import { Dashboard } from '@/screens/Dashboard/Dashboard'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meegu</title>
        <meta name="description" content="APP Meegu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  )
}
