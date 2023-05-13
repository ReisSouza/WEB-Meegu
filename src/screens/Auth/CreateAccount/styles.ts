import { styled } from '@ionext-ui/react'

export const ContainerFormCreateAccount = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '100%',

  gap: '$8',
})

export const FormCreateAccount = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$4',
})

export const WrappedInputs = styled('fieldset', {
  all: 'unset',
  width: '100%',
  gap: '$2',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$2',
})

export const Flex = styled('div', {
  display: 'flex',
  gap: '$4',
  width: '100%',
  '& > div': {
    flex: 1,
  },
})
