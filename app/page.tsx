// app/page.tsx
'use client'

import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    // 1. Define your list of links here
    const links = [
      "https://telegram.org",  // Link for 1st visit
      "https://facebook.com",  // Link for 2nd visit
      "https://google.com"     // Link for 3rd visit
    ]

    // 2. Check how many times they visited before
    // If it's the first time, 'count' will be 0
    let count = parseInt(localStorage.getItem('visitCount') || '0')

    // 3. Set the timer to redirect
    const timer = setTimeout(() => {
      // Pick the link based on the count
      // The "%" symbol makes it loop (0, 1, 2, then back to 0)
      const targetLink = links[count % links.length]

      // Save the NEW count for next time
      localStorage.setItem('visitCount', (count + 1).toString())

      // Go to the link
      window.location.href = targetLink
    }, 500) // 1 second delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">
      {/* While waiting for the 1 second, they see your images */}
      <div className="flex flex-col gap-8 w-full max-w-sm px-4">

        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img src="/1.jpg" alt="Image 1" className="w-full h-auto object-cover" />
        </div>

        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img src="/2.jpg" alt="Image 2" className="w-full h-auto object-cover" />
        </div>

        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img src="/3.jpg" alt="Image 3" className="w-full h-auto object-cover" />
        </div>

      </div>
    </main>
  )
}