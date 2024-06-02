'use client'

import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { Card } from '.'
import { InformationContext } from '@/contexts/information.context'

const DynamicMapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false },
)
const DynamicTileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
)
const DynamicMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false },
)
const DynamicPopup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false },
)
const DynamicFlyLocation = dynamic(() => import('../fly-location'), {
  ssr: false,
})

export const CardMap = () => {
  const { information, MAP_CENTER, MIN_ZOOM, MAX_ZOOM, markerIcon } =
    useContext(InformationContext)

  return (
    <Card title="MAP">
      {typeof window !== 'undefined' &&
      information.latitude &&
      information.longitude ? (
        <DynamicMapContainer
          center={MAP_CENTER}
          zoom={MIN_ZOOM}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          style={{ height: '400px', width: '100%' }}
        >
          <DynamicTileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <DynamicMarker
            position={[information.latitude, information.longitude]}
            icon={markerIcon}
          >
            <DynamicPopup>
              {`Latitude: ${information.latitude}, Longitude: ${information.longitude}`}
            </DynamicPopup>
          </DynamicMarker>
          <DynamicFlyLocation
            latitude={information.latitude}
            longitude={information.longitude}
          />
        </DynamicMapContainer>
      ) : (
        <div>No location data available</div>
      )}
    </Card>
  )
}
