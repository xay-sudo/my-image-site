// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">

      {/* UPDATED: Changed 'max-w-3xl' to 'max-w-sm'
         This limits the width to roughly 380px (like a phone),
         so the images won't be gigantic.
      */}
      <div className="flex flex-col gap-8 w-full max-w-sm px-4">

        {/* Image 1 */}
        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img
            src="/1.jpg"
            alt="Image 1"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 2 */}
        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img
            src="/2.jpg"
            alt="Image 2"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 3 */}
        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
          <img
            src="/3.jpg"
            alt="Image 3"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </main>
  )
}