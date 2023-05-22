import React, { ReactNode } from 'react'
import { IoLogIn } from 'react-icons/io5'

import * as S from './styles'
import { Button, Heading, Toast } from '@ionext-ui/react'
import { Logo } from '@/components/Logo/Logo'
import { useRouter } from 'next/router'
import { useToastContext } from '@/context/ToastProvider'

export type AuthLayoutProps = {
  children: ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  const { asPath, push } = useRouter()
  const { listOfToast } = useToastContext()

  const handleActionSecondaryPage = () => {
    if (asPath.includes('login')) {
      return {
        label: 'Criar conta',
        action: () => push('/auth/create-account'),
      }
    } else {
      return {
        label: 'Login',
        action: () => push('/auth/login'),
      }
    }
  }
  return (
    <>
      <S.AuthLayoutContainer>
        <S.WrappedLeft>
          <Logo isCenter />

          <S.ContentLeft>{children}</S.ContentLeft>
        </S.WrappedLeft>
        <S.WrappedRight>
          <Heading css={{ color: '$background', maxWidth: '580px' }} align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae aperiam vero accusantium,
            maiores ipsum iusto obcaecati quos exercitationem expedita impedit sed commodi delectus. Voluptatum commodi
            facilis facere. Iste, molestias?
          </Heading>
          <Button
            onClick={handleActionSecondaryPage().action}
            variant="contained"
            color="tertiary"
            iconRight={<IoLogIn size={24} />}
          >
            {handleActionSecondaryPage().label}
          </Button>
        </S.WrappedRight>
      </S.AuthLayoutContainer>
      {listOfToast.map(({ description, variant, id, title }, index) => {
        return <Toast key={index} description={description} title={title} id={id} variant={variant} />
      })}
    </>
  )
}
