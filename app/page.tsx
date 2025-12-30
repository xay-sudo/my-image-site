'use client';

import { useEffect, useState } from 'react'

// Helper Component: Hides the box if image is missing
function ImageCard({ num, onClick }: { num: number, onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl cursor-pointer active:scale-95 transition-transform"
    >
      <img
        src={`/${num}.jpg`}
        alt={`Image ${num}`}
        className="w-full h-auto object-cover"
        loading="lazy"
        onError={() => setIsVisible(false)}
      />
    </div>
  );
}

export default function Home() {

  // Default link (fallback)
  const [currentLink, setCurrentLink] = useState("https://www.effectivegatecpm.com/zqy1udbn23?key=a78f37426b934fec682c9e32be41442a");

  useEffect(() => {
    // ---------------------------------------------------------------
    // 1. SETUP LINKS & LOGIC
    // ---------------------------------------------------------------
    const links = [
      "https://www.effectivegatecpm.com/zqy1udbn23?key=a78f37426b934fec682c9e32be41442a",
      "https://lakns.com/link?z=10346652&var={SOURCE_ID}&ymid={CLICK_ID}",
      "https://www.effectivegatecpm.com/zqy1udbn23?key=a78f37426b934fec682c9e32be41442a"
    ];

    let count = 0;

    // SAFETY: Wrap localStorage in try/catch because Facebook Browser might block it
    try {
      const stored = localStorage.getItem('visitCount');
      if (stored) {
        count = parseInt(stored);
        if (isNaN(count)) count = 0;
      }
    } catch (e) {
      // If storage fails (private mode/facebook), just default to 0
      count = 0;
    }

    // Determine target link
    const linkIndex = count % links.length;
    const target = links[linkIndex];
    setCurrentLink(target); // Save to state so click works immediately

    // ---------------------------------------------------------------
    // 2. TRACKING (Safe Mode)
    // ---------------------------------------------------------------
    const trackVisit = () => {
      // Only block the specific Facebook Crawler (metadata scraper)
      // Do NOT block "bot" generally, as it might block the user.
      if (navigator.userAgent.includes('facebookexternalhit')) {
        return;
      }

      fetch('https://my-tracker-two.vercel.app/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          tracker_id: '303019',
          url: window.location.href,
          referrer: document.referrer
        })
      }).catch(err => console.error("Tracking failed", err));
    };
    trackVisit();

    // ---------------------------------------------------------------
    // 3. EXECUTE REDIRECT
    // ---------------------------------------------------------------

    // If it is the pure Crawler, DO NOT redirect (so the link preview works)
    const isCrawler = navigator.userAgent.includes('facebookexternalhit');

    if (!isCrawler) {
      // Increment counter safely
      try {
        localStorage.setItem('visitCount', (count + 1).toString());
      } catch (e) {}

      // Redirect after 500ms
      const timer = setTimeout(() => {
        // Use href instead of replace (sometimes works better in Apps)
        window.location.href = target;
      }, 500);

      return () => clearTimeout(timer);
    }

  }, [])

  // Manual trigger if auto-redirect is blocked
  const handleManualClick = () => {
    window.location.href = currentLink;
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">
      <div className="flex flex-col gap-8 w-full max-w-sm px-4">

        {/* Pass the click handler so if it sticks, user can TAP to go */}
        <ImageCard num={1} onClick={handleManualClick} />
        <ImageCard num={2} onClick={handleManualClick} />
        <ImageCard num={3} onClick={handleManualClick} />
        <ImageCard num={4} onClick={handleManualClick} />

      </div>
    </main>
  )
}
