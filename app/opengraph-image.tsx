import { ImageResponse } from 'next/og'

// This forces the image to be the correct Facebook size
export const size = {
  width: 1080,
  height: 1080,
}

export const contentType = 'image/png'

export default async function Image() {
  // 1. We fetch your existing image from the public folder
  // CHANGE THIS URL to your actual live site URL if needed for local testing
  const imageUrl = 'https://my-image-site-wine.vercel.app/1.jpg'

  return new ImageResponse(
    (
      // This div creates a 1200x630 container
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
        {/* This image tag automatically crops the photo to fill the space */}
        <img
          src={imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // <--- THIS IS THE MAGIC "AUTO CROP" SETTING
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}