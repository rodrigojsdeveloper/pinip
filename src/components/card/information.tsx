'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '.'
import { api } from '@/services/api'
import { InformationProps } from '@/interfaces'
import { CircleAlert } from 'lucide-react'

export const CardInformation = () => {
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
    <Card title="IP INFORMATION">
      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">GEOLOCATION</h2>
        </div>

        <ul className="grid grid-cols-1 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">IP</h3>
            <p className="text-base text-neutral-800">{information.ip}</p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">COUNTRY</h3>
            <p className="text-base text-neutral-800">
              {information.country_name}
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">
              CONTINENT NAME
            </h3>
            <p className="text-base text-neutral-800">
              {information.continent_name}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">
              CONTINENT CODE
            </h3>
            <p className="text-base text-neutral-800">
              {information.continent_code}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">COUNTRY CODE</h3>
            <p className="text-base text-neutral-800">
              {information.country_code}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">REGION</h3>
            <p className="text-base text-neutral-800">{information.region}</p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">REGION CODE</h3>
            <p className="text-base text-neutral-800">
              {information.region_code}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">REGION TYPE</h3>
            <p className="text-base text-neutral-800">
              {information.region_type}
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">LATITUDE</h3>
            <p className="text-base text-neutral-800">{information.latitude}</p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">LONGITUDE</h3>
            <p className="text-base text-neutral-800">
              {information.longitude}
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">CALLING CODE</h3>
            <p className="text-base text-neutral-800">
              {information.calling_code}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">EMOJI FLAG</h3>
            <p className="text-base text-neutral-800">
              {information.emoji_flag}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">
              EMOJI UNICODE
            </h3>
            <p className="text-base text-neutral-800">
              {information.emoji_unicode}
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-1 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">FLAG</h3>
            <Link
              href={information.flag ?? ''}
              className="text-base text-neutral-800 underline hover:no-underline"
              target="_blank"
            >
              {information.flag}
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">LANGUAGES</h2>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          {information.languages?.map(({ name, native, code }, index) => (
            <li key={`langague-${index}`}>
              <div>
                <h3 className="text-xs uppercase text-neutral-600">NAME</h3>
                <p className="text-base text-neutral-800">{name}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase text-neutral-600">NATIVE</h3>
                <p className="text-base text-neutral-800">{native}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase text-neutral-600">CODE</h3>
                <p className="text-base text-neutral-800">{code}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">TIME ZONE</h2>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NAME</h3>
            <p className="text-base text-neutral-800">
              {information.currency?.name}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">CODE</h3>
            <p className="text-base text-neutral-800">
              {information.currency?.code}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">SYMBOL</h3>
            <p className="text-base text-neutral-800">
              {information.currency?.symbol}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NATIVE</h3>
            <p className="text-base text-neutral-800">
              {information.currency?.native}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">PLURAL</h3>
            <p className="text-base text-neutral-800">
              {information.currency?.plural}
            </p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">TIME ZONE</h2>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NAME</h3>
            <p className="text-base text-neutral-800">
              {information.time_zone?.name}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">ABBR</h3>
            <p className="text-base text-neutral-800">
              {information.time_zone?.abbr}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">OFFSET</h3>
            <p className="text-base text-neutral-800">
              {information.time_zone?.offset}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">IS_DST</h3>
            <p className="text-base text-neutral-800">
              {information.time_zone?.is_dst ? 'true' : 'false'}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">CURRENT_TIME</h3>
            <p className="text-base text-neutral-800">
              {information.time_zone?.current_time}
            </p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">ASN</h2>
        </div>

        <ul className="grid grid-cols-2 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">ASN</h3>
            <p className="text-base text-neutral-800">{information.asn?.asn}</p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">TYPE</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.type}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">DOMAIN</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.domain}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">ROUTE</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.route}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NAME</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.name}
            </p>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-800 pb-1">
          <CircleAlert className="size-4 text-neutral-800" />
          <h2 className="text-sm uppercase text-neutral-800">COMPANY</h2>
        </div>

        <ul className="grid grid-cols-2 gap-4">
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NAME</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.name}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">DOMAIN</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.domain}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">TYPE</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.type}
            </p>
          </li>
          <li>
            <h3 className="text-xs uppercase text-neutral-600">NETWORK</h3>
            <p className="text-base text-neutral-800">
              {information.asn?.route}
            </p>
          </li>
        </ul>
      </section>
    </Card>
  )
}
