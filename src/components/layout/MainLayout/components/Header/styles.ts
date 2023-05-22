import { styled } from '@ionext-ui/react'

export const HeaderContainer = styled('header', {
  background: '$white',

  width: '100vw',
  height: '64px',

  padding: '0 $8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottomWidth: '$thin',
  borderBottomColor: '$border',
  borderBottomStyle: 'solid',
})

export const WrappedLogo = styled('div', {
  display: 'flex',
  width: '240px',
})
