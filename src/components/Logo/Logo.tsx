import React, { ComponentProps } from 'react'

import * as S from './styles'
import LogoMain from '@/assets/logo.png'

export const Logo: React.FC<Omit<ComponentProps<typeof S.LogoContainer>, 'src' | 'alt'>> = ({
  ...rest
}: Omit<ComponentProps<typeof S.LogoContainer>, 'src' | 'alt'>) => {
  return <S.LogoContainer {...rest} src={LogoMain} alt="" />
}
