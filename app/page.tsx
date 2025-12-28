'use client'

import { useEffect, useState } from 'react'

// Helper component: Keeps the code clean and hides the box if the file is missing
function ImageCard({ num }: { num: number }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hides the whole box (no empty lines)

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
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

  useEffect(() => {
    const links = [
      "https://telegram.org",
      "https://facebook.com",
      "https://google.com"
    ]

    let count = parseInt(localStorage.getItem('visitCount') || '0')

    const timer = setTimeout(() => {
      const targetLink = links[count % links.length]
      localStorage.setItem('visitCount', (count + 1).toString())
      window.location.replace(targetLink)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">
      <div className="flex flex-col gap-8 w-full max-w-sm px-4">

        {/* Exactly 4 images, like the old version */}
        <ImageCard num={1} />
        <ImageCard num={2} />
        <ImageCard num={3} />
        <ImageCard num={4} />

      </div>
    </main>
  )
}