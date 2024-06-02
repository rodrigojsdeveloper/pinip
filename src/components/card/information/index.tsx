'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { Card } from '../'
import { InformationContext } from '@/contexts/information.context'
import { Loading } from '@/components/loading'
import { HeaderInformation } from './header-information'
import { ContentInformation } from './content-information'

export const CardInformation = () => {
  const { information, isLoading } = useContext(InformationContext)

  return (
    <Card title="IP INFORMATION">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="flex flex-col gap-4">
            <HeaderInformation title="GEOLOCATION" />

            <ul className="grid grid-cols-1 gap-4">
              <ContentInformation title="IP" description={information.ip} />
              <ContentInformation
                title="COUNTRY"
                description={information.country_name}
              />
            </ul>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ContentInformation
                title="CONTINENT NAME"
                description={information.continent_name}
              />
              <ContentInformation
                title="CONTINENT CODE"
                description={information.continent_code}
              />
              <ContentInformation
                title="COUNTRY CODE"
                description={information.country_code}
              />
              <ContentInformation
                title="REGION"
                description={information.region}
              />
              <ContentInformation
                title="REGION CODE"
                description={information.region_code}
              />
              <ContentInformation
                title="REGION TYPE"
                description={information.region_type}
              />
            </ul>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContentInformation
                title="LATITUDE"
                description={String(information.latitude)}
              />
              <ContentInformation
                title="LONGITUDE"
                description={String(information.longitude)}
              />
            </ul>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ContentInformation
                title="CALLING CODE"
                description={information.calling_code}
              />
              <ContentInformation
                title="EMOJI FLAG"
                description={information.emoji_flag}
              />
              <ContentInformation
                title="EMOJI UNICODE"
                description={information.emoji_unicode}
              />
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
            <HeaderInformation title="LANGUAGES" />

            <div className="grid grid-cols-1 gap-4">
              {information.languages?.map(({ name, native, code }, index) => (
                <ul
                  key={`langague-${index}`}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  <ContentInformation title="NAME" description={name} />
                  <ContentInformation title="NATIVE" description={native} />
                  <ContentInformation title="CODE" description={code} />
                </ul>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <HeaderInformation title="CURRENCY" />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ContentInformation
                title="NAME"
                description={information.currency?.name}
              />
              <ContentInformation
                title="CODE"
                description={information.currency?.code}
              />
              <ContentInformation
                title="SYMBOL"
                description={information.currency?.symbol}
              />
              <ContentInformation
                title="NATIVE"
                description={information.currency?.native}
              />
              <ContentInformation
                title="PLURAL"
                description={information.currency?.plural}
              />
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <HeaderInformation title="TIME ZONE" />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ContentInformation
                title="NAME"
                description={information.time_zone?.name}
              />
              <ContentInformation
                title="ABBR"
                description={information.time_zone?.abbr}
              />
              <ContentInformation
                title="OFFSET"
                description={information.time_zone?.offset}
              />
              <ContentInformation
                title="IS_DST"
                description={information.time_zone?.is_dst ? 'true' : 'false'}
              />
              <ContentInformation
                title="CURRENT_TIME"
                description={information.time_zone?.current_time}
              />
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <HeaderInformation title="ASN" />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContentInformation
                title="ASN"
                description={information.asn?.asn}
              />
              <ContentInformation
                title="TYPE"
                description={information.asn?.type}
              />
              <ContentInformation
                title="DOMAIN"
                description={information.asn?.domain}
              />
              <ContentInformation
                title="ROUTE"
                description={information.asn?.route}
              />
              <ContentInformation
                title="NAME"
                description={information.asn?.name}
              />
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <HeaderInformation title="COMPANY" />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContentInformation
                title="NAME"
                description={information.asn?.name}
              />
              <ContentInformation
                title="DOMAIN"
                description={information.asn?.domain}
              />
              <ContentInformation
                title="TYPE"
                description={information.asn?.type}
              />
              <ContentInformation
                title="NETWORK"
                description={information.asn?.route}
              />
            </ul>
          </section>
        </>
      )}
    </Card>
  )
}
