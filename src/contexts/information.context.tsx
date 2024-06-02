'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { api } from '@/services/api'
import { InformationProps, InformationContextDataProps } from '@/interfaces'
import { Icon, LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

const ZOOM = 12
const MIN_ZOOM = 2
const MAX_ZOOM = 17
const MAP_CENTER: LatLngTuple = [0, 20]
const ANIMATION_DURATION = 3

let markerIcon: Icon<{
  iconUrl: string
  iconSize: [number, number]
  iconAnchor: [number, number]
  popupAnchor: [number, number]
}>

if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const leaflet = require('leaflet')
  markerIcon = new leaflet.Icon({
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1200px-Map_pin_icon.svg.png',
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

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

  const FlyLocation = dynamic(() => import('../components/fly-location'), {
    ssr: false,
  })

  const informationContextData: InformationContextDataProps = {
    information,
    FlyLocation,
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
