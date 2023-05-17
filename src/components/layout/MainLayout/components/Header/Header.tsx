import React from 'react'

import * as S from './styles'
import { Logo } from '@/components/Logo/Logo'
import { Avatar } from '@ionext-ui/react'

export type HeaderProps = {}

export const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.WrappedLogo>
        <Logo cursorPoint size="small" />
      </S.WrappedLogo>
      <Avatar />
    </S.HeaderContainer>
  )
}
