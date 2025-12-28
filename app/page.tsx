// app/page.tsx
'use client'

import { useEffect } from 'react'

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

      // CHANGE THIS WORD: Use 'replace' instead of 'href'
      window.location.replace(targetLink)

    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">
      <div className="flex flex-col gap-8 w-full max-w-sm px-4">
        {/* Your Images remain the same... */}
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