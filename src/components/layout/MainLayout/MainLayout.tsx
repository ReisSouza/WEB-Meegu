import React from 'react'

import * as S from './styles'
import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'
import { useToastContext } from '@/context/ToastProvider'
import { Toast } from '@ionext-ui/react'

export type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const { listOfToast } = useToastContext()
  return (
    <S.MainLayoutContainer>
      <Header />
      <S.Flex>
        <Aside />
        <S.Main>{children}</S.Main>
      </S.Flex>
      {listOfToast.map(({ description, variant, id, title }, index) => {
        return <Toast key={index} description={description} title={title} id={id} variant={variant} />
      })}
    </S.MainLayoutContainer>
  )
}
