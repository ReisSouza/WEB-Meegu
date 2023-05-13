import { styled } from '@ionext-ui/react'

export const AuthLayoutContainer = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100vh',
  gridTemplateColumns: '55vw 45vw',
  overflowY: 'auto',
  overflowX: 'hidden',
})

export const WrappedRight = styled('div', {
  minWidth: '45%',
  background: 'linear-gradient(151.62deg, #EC509A 0%, rgba(83, 28, 54, 0.63) 46.88%, #4A5899 98.66%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$6',
})

export const WrappedLeft = styled('div', {
  width: '100%',
  padding: '$10 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  justifyContent: 'center',
})

export const ContentLeft = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '600px',
})
