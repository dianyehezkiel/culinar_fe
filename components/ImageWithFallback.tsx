import fallback from '../public/resto_fallback.png'
import Image from 'next/image'
import React from 'react'

interface IWFProps {
  src: string;
  alt: string;
  fallBackSrc?: string;
}

const ImageWithFallback: React.FC<IWFProps> = ({
  src,
  alt,
  fallBackSrc = fallback.src,
}) => {
  const [imageError, setImageError] = React.useState(false)
  return (
    <Image
      className='object-cover'
      src={imageError ? fallBackSrc : src}
      alt={alt}
      layout='fill'
      onError={() => setImageError(true)}
    />
  )
}

export default ImageWithFallback
