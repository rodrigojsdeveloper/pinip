'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { api } from '@/services/api'
import { InformationProps, InformationContextDataProps } from '@/interfaces'
import { useMap } from 'react-leaflet'
import { Icon, LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ZOOM = 12
const MIN_ZOOM = 2
const MAX_ZOOM = 17
const MAP_CENTER: LatLngTuple = [0, 20]
const ANIMATION_DURATION = 3

const markerIcon = new Icon({
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1200px-Map_pin_icon.svg.png',
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

export const InformationContext = createContext<InformationContextDataProps>(
  {} as InformationContextDataProps,
)

export const InformationContextProvider = ({ children }: PropsWithChildren) => {
  const [information, setInformation] = useState<InformationProps>(
    {} as InformationProps,
  )

  useEffect(() => {
    api
      .get('')
      .then((res) => setInformation(res.data))
      .catch((err) => console.error(err))
  }, [])

  const FlyToLocation = () => {
    const map = useMap()
    useEffect(() => {
      if (information.latitude !== 0 && information.longitude !== 20) {
        map.flyTo([information.latitude, information.longitude], ZOOM, {
          animate: true,
          duration: ANIMATION_DURATION,
          easeLinearity: 0.5,
        })
      }
    }, [map])
    return null
  }

  const informationContextData: InformationContextDataProps = {
    information,
    FlyToLocation,
    markerIcon,
    ZOOM,
    MIN_ZOOM,
    MAX_ZOOM,
    MAP_CENTER,
    ANIMATION_DURATION,
  }

  return (
    <InformationContext.Provider value={informationContextData}>
      {children}
    </InformationContext.Provider>
  )
}
