'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Card } from '.'
import { api } from '@/services/api'
import { InformationProps } from '@/interfaces'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ZOOM = 12
const MIN_ZOOM = 2
const MAX_ZOOM = 17
const MAP_CENTER = [0, 20] as [number, number]
const ANIMATION_DURATION = 3

const markerIcon = new Icon({
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1200px-Map_pin_icon.svg.png',
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const FlyToLocation = ({ center }: { center: [number, number] }) => {
  const map = useMap()
  useEffect(() => {
    if (center[0] !== 0 && center[1] !== 20) {
      map.flyTo(center, ZOOM, {
        animate: true,
        duration: ANIMATION_DURATION,
        easeLinearity: 0.5,
      })
    }
  }, [center, map])
  return null
}

export const CardMap = () => {
  const [information, setInformation] = useState<InformationProps>(
    {} as InformationProps,
  )

  useEffect(() => {
    api
      .get('')
      .then((res) => setInformation(res.data))
      .catch((err) => err)
  }, [])

  return (
    <Card title="MAP">
      {information.latitude && information.longitude ? (
        <MapContainer
          center={MAP_CENTER}
          zoom={MIN_ZOOM}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker
            position={[information.latitude, information.longitude]}
            icon={markerIcon}
          >
            <Popup>
              {`Latitude: ${information.latitude}, Longitude: ${information.longitude}`}
            </Popup>
          </Marker>
          <FlyToLocation
            center={[information.latitude, information.longitude]}
          />
        </MapContainer>
      ) : (
        <div>No location data available</div>
      )}
    </Card>
  )
}
