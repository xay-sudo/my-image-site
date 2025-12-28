import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Website Preview'
export const contentType = 'image/png'

// Ensure this is 1080x1080 for the square shape you wanted
export const size = {
  width: 1080,
  height: 1080,
}

export default async function Image() {
  // ✅ This matches the file in your screenshot
  const imageUrl = 'https://my-image-site-wine.vercel.app/thumbnail.jpg'

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
            // Use 'contain' to show the WHOLE image (no cropping)
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}