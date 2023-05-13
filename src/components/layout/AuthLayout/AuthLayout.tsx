import React, { ReactNode } from 'react'

import * as S from './styles'

export type AuthLayoutProps = {
  children: ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <S.AuthLayoutContainer>
      <div className="wrappedLeft">
        <S.WrappedLeft>{children}</S.WrappedLeft>
      </div>
      <div className="wrappedRight"></div>
    </S.AuthLayoutContainer>
  )
}
