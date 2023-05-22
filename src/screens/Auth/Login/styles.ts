import { styled } from '@ionext-ui/react'

export const LoginContainer = styled('form', {
  width: '100%',
  gap: '$4',
  display: 'flex',
  flexDirection: 'column',
})

export const WrappedInputs = styled('fieldset', {
  all: 'unset',
  width: '100%',
  gap: '$2',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$2',
})

export const WrappedButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$4',
})
