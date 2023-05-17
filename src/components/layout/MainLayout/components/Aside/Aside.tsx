import React from 'react'

import * as S from './styles'
import Icon from '@/components/Icon/Icon'
import { Paragraph } from '@ionext-ui/react'
import { useRouter } from 'next/router'
import { ROUTES } from '@/config/env'
import Link from 'next/link'

export type AsideProps = {}

export const Aside: React.FC<AsideProps> = ({}: AsideProps) => {
  const { asPath } = useRouter()

  return (
    <S.AsideContainer>
      <S.List>
        {ROUTES.map((route, index) => {
          return (
            <Link key={index} href={route.icon} passHref>
              <S.ItemList active={asPath === route.icon}>
                <Icon icon={route.icon} size={24} />
                <Paragraph css={{ fontWeight: '$bold' }}>{route.label}</Paragraph>
              </S.ItemList>
            </Link>
          )
        })}
      </S.List>
    </S.AsideContainer>
  )
}
