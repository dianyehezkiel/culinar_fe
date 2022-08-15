import fallback from '../public/resto_fallback.png'
import Image from 'next/image'
import React from 'react'

interface IWFProps {
  src?: string;
  alt: string;
  fallBackSrc?: string;
}

const ImageWithFallback: React.FC<IWFProps> = ({
  src = fallback.src,
  alt,
  fallBackSrc = fallback.src,
}) => {
  const [imageError, setImageError] = React.useState(false)
  const [imgSource, setImgSource] = React.useState('')

  if (imgSource !== src) {
    setImageError(false)
    setImgSource(src)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Image
      className='object-cover'
      src={imageError ? fallBackSrc : src}
      loading='lazy'
      alt={alt}
      layout='fill'
      onError={handleImageError}
    />
  )
}

export default ImageWithFallback
