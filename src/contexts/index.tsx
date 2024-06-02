import { PropsWithChildren } from 'react'
import { InformationContextProvider } from './information.context'

export const Providers = ({ children }: PropsWithChildren) => {
  return <InformationContextProvider>{children}</InformationContextProvider>
}
