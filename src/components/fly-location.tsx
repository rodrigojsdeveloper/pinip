import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const FlyLocation = ({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}) => {
  const map = useMap()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (latitude !== 0 && longitude !== 20) {
        map.flyTo([latitude, longitude], 12, {
          animate: true,
          duration: 3,
          easeLinearity: 0.5,
        })
      }
    }
  }, [map, latitude, longitude])
  return null
}

export default FlyLocation
