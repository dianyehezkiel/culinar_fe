import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect } from "react"

interface MapProps {
  lon?: number,
  lat?: number,
}

export default function Map({lon = 0, lat = 0}:MapProps) {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: 15,
    })

    new mapboxgl.Marker({
      color: '#ff5b4d',
      scale: 0.8,
    })
      .setLngLat([lon, lat])
      .addTo(map)
  }, [lon, lat])

  return (
    <div id='map-container' className='w-full h-full' />
  )
}