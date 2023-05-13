import React from 'react'

import * as S from './styles'

export type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return <S.MainLayoutContainer>{children}</S.MainLayoutContainer>
}
