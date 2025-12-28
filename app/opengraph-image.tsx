import { ImageResponse } from 'next/og'

// Force Square Size
export const size = {
  width: 1080,
  height: 1080,
}

export const contentType = 'image/png'

export default async function Image() {
  // Your specific image URL
  const imageUrl = 'https://my-image-site-wine.vercel.app/image_9c9267.png'

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
            objectFit: 'cover', // Ensures the image fills the 1080x1080 square
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}