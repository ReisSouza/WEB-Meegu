import { styled } from '@ionext-ui/react'

export const AsideContainer = styled('aside', {
  height: 'calc(100vh - 64px)',
  width: '240px',
  background: '$white',

  borderRightWidth: '$thin',
  borderRightColor: '$border',
  borderRightStyle: 'solid',
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  padding: '$4',
})

export const ItemList = styled('li', {
  gap: '$4',
  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',

  height: '$8',

  borderRadius: '$pill',

  padding: '0 $4',
  color: '$secondary-dark',

  transition: 'all 250ms ease-in-out',

  '&:hover': {
    background: '$primary-light-hover',
    scale: '1.03',

    p: {
      fontSize: 'calc(100% * (1 / 1.1))',
    },
  },

  '&:active': {
    background: '$primary-light-active',
  },

  variants: {
    active: {
      true: {
        background: '$primary-light-normal',
      },
    },
  },
})
