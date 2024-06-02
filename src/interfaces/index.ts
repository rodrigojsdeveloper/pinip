import { Icon, LatLngTuple } from 'leaflet'
import { ComponentType } from 'react'

export interface InformationProps {
  ip: string
  is_eu: boolean
  city: string
  region: string
  region_code: string
  region_type: string
  country_name: string
  country_code: string
  continent_name: string
  continent_code: string
  latitude: number
  longitude: number
  postal: string | null
  calling_code: string
  flag: string
  emoji_flag: string
  emoji_unicode: string
  asn: {
    asn: string
    name: string
    domain: string
    route: string
    type: string
  }
  languages: {
    name: string
    native: string
    code: string
  }[]
  currency: {
    name: string
    code: string
    symbol: string
    native: string
    plural: string
  }
  time_zone: {
    name: string
    abbr: string
    offset: string
    is_dst: boolean
    current_time: string
  }
  threat: {
    is_tor: boolean
    is_icloud_relay: boolean
    is_proxy: boolean
    is_datacenter: boolean
    is_anonymous: boolean
    is_known_attacker: boolean
    is_known_abuser: boolean
    is_threat: boolean
    is_bogon: boolean
    blocklists: []
  }
  count: string
}

export interface FlyToLocationProps {
  center: LatLngTuple
  zoom: number
  animationDuration: number
}

export interface InformationContextDataProps {
  information: InformationProps
  FlyLocation: ComponentType<{ latitude: number; longitude: number }>
  markerIcon: Icon<{
    iconUrl: string
    iconSize: [number, number]
    iconAnchor: [number, number]
    popupAnchor: [number, number]
  }>
  ZOOM: number
  MIN_ZOOM: number
  MAX_ZOOM: number
  MAP_CENTER: LatLngTuple
  ANIMATION_DURATION: number
}
