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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchInformation = async () => {
    try {
      setIsLoading(true)
      const res = await api.get(`?api-key=${process.env.NEXT_APP_API_KEY}`)
      setInformation(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInformation = async ({ ip }: { ip: string }) => {
    try {
      setError(null)
      setIsLoading(true)
      const res = await api.get(
        `/${ip}?api-key=${process.env.NEXT_APP_API_KEY}`,
      )
      setInformation(res.data)
    } catch (err) {
      setError('IP address does not exist')
    } finally {
      setIsLoading(false)
    }
  }

  const FlyLocation = dynamic(() => import('../components/fly-location'), {
    ssr: false,
  })

  useEffect(() => {
    fetchInformation()
  }, [])

  const informationContextData: InformationContextDataProps = {
    information,
    FlyLocation,
    markerIcon,
    ZOOM,
    MIN_ZOOM,
    MAX_ZOOM,
    MAP_CENTER,
    ANIMATION_DURATION,
    isLoading,
    handleInformation,
    error,
  }

  return (
    <InformationContext.Provider value={informationContextData}>
      {children}
    </InformationContext.Provider>
  )
}
