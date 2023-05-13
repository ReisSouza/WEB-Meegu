import { styled } from '@ionext-ui/react'

export const AuthLayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
  '& > *': {
    boxSizing: 'border-box',
  },
  '& > .wrappedLeft': {
    flex: '0 0 55%',
    height: '100%',

    paddingTop: 'calc($20 * 2)',
  },
  '& > .wrappedRight': {
    flex: '0 0 45%',
    height: '100%',
    background: '$primary-normal',
  },
  '@media (max-width: 1000px)': {
    flexDirection: 'column',
    '& > *': {
      flex: '1 1 auto',
    },
  },
})

export const WrappedLeft = styled('div', {
  width: '100%',
  maxWidth: '480px',
  margin: 'auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
})
