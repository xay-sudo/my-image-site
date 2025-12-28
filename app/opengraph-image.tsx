import { ImageResponse } from 'next/og'

// 1. You MUST export an alt text for accessibility/TypeScript
export const alt = 'Website Preview'

// 2. Explicitly set the runtime to edge (often fixes build issues)
export const runtime = 'edge'

export const size = {
  width: 1080,
  height: 1080,
}

export const contentType = 'image/png'

export default async function Image() {
  // Ensure this URL is correct and the file exists in your public folder
  const imageUrl = 'https://my-image-site-wine.vercel.app/thumnail.jpg'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <img
          src={imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}