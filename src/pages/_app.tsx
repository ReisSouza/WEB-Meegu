/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'

import { Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { globalStyles } from '@/styles/global'

import '@/libs/dayjs'
import { AuthLayout } from '@/components/layout/AuthLayout/AuthLayout'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { custom } from '@/styles/thema/meegu'

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

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="custom"
      value={{
        custom: custom.className,
        light: 'light',
      }}
    >
      <div className={roboto_mono.className}>{getLayout(<Component {...pageProps} />)}</div>
    </ThemeProvider>
  )
}

export default MyApp
