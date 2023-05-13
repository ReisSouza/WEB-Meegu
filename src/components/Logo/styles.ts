import { styled } from '@ionext-ui/react'
import Image from 'next/image'

export const LogoContainer = styled(Image, {
  position: 'relative',
  maxWidth: '320px',
  margin: '0 auto',

  variants: {
    cursorPoint: {
      true: {},
    },
  },
})
