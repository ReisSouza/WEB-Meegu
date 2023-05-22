import { styled } from '@ionext-ui/react'
import Image from 'next/image'

export const LogoContainer = styled(Image, {
  position: 'relative',
  variants: {
    cursorPoint: {
      true: {
        cursor: 'pointer',
      },
    },
    size: {
      small: {
        height: '20px',
        width: '80px',
      },
      medium: {
        width: '120px',
        height: '40px',
      },
      large: {
        width: '180px',
      },
    },
    isCenter: {
      true: {
        margin: '0 auto',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    isCenter: false,
  },
})
