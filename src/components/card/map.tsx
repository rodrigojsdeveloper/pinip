'use client'

import { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Card } from '.'
import { InformationContext } from '@/contexts/information.context'

export const CardMap = () => {
  const {
    information,
    FlyToLocation,
    MAP_CENTER,
    MIN_ZOOM,
    MAX_ZOOM,
    markerIcon,
  } = useContext(InformationContext)

  return (
    <Card title="MAP">
      {information.latitude && information.longitude ? (
        <MapContainer
          center={MAP_CENTER}
          zoom={MIN_ZOOM}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          style={{ height: '400px', width: '100%' }}
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
          <FlyToLocation />
        </MapContainer>
      ) : (
        <div>No location data available</div>
      )}
    </Card>
  )
}
