import React from 'react'

import * as S from './styles'
import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'

export type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <S.MainLayoutContainer>
      <Header />
      <Aside />
      <S.Main>{children}</S.Main>
    </S.MainLayoutContainer>
  )
}
