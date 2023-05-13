/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from 'next/app'
import { Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

import { globalStyles } from '@/styles/global'
import { custom } from '@/styles/thema/meegu'

export default function App({ Component, pageProps }: AppProps) {
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
      <div className={roboto_mono.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
