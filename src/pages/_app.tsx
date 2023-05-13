/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'

import { Roboto_Mono } from 'next/font/google'

import { globalStyles } from '@/styles/global'

import '@/libs/dayjs'
import { AuthLayout } from '@/components/layout/AuthLayout/AuthLayout'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      if (router.asPath.includes('auth')) {
        return <AuthLayout>{page}</AuthLayout>
      }
      return <MainLayout>{page}</MainLayout>
    })

  globalStyles()

  return <div className={roboto_mono.className}>{getLayout(<Component {...pageProps} />)}</div>
}

export default MyApp
