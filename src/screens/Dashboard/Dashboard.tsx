import React from 'react'

import * as S from './styles'
import { Avatar, Box, Heading } from '@ionext-ui/react'
import Link from 'next/link'
import { EnvelopeSimple, FileDoc, GithubLogo } from '@phosphor-icons/react'
import DownloadButtonCollectionPostman from './components/DownloadButton/DownloadButton'

export type DashboardProps = {}

export const Dashboard: React.FC<DashboardProps> = ({}: DashboardProps) => {
  return (
    <S.DashboardContainer>
      <S.DashboardFlexRow css={{ width: '100%', gap: '$4' }}>
        <Box css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <S.DashboardFlexRow css={{ alignItems: 'center', gap: '$6' }}>
            <Avatar size="extraLarge" />
            <S.DashboardFlexCol>
              <Heading color="secondary">Jackson Reis de Souza</Heading>
              <Heading size="sm" color="secondary">
                Full Stack pleno
              </Heading>
            </S.DashboardFlexCol>
          </S.DashboardFlexRow>
        </Box>
        <Box css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <S.DashboardFlexCol>
            <Link style={{ display: 'flex', gap: '16px' }} href="mailto:reis.souza@outlook.com.br" passHref>
              <EnvelopeSimple size={24} />
              <Heading size="sm" color="secondary">
                reis.souza@outlook.com.br
              </Heading>
            </Link>

            <Link
              style={{ display: 'flex', gap: '16px' }}
              href="https://github.com/ReisSouza?tab=repositories"
              passHref
            >
              <GithubLogo size={24} />
              <Heading size="sm" color="secondary">
                Perfil Git Hub
              </Heading>
            </Link>
          </S.DashboardFlexCol>
        </Box>
      </S.DashboardFlexRow>
      <S.DashboardFlexRow css={{ width: '100%', gap: '$4' }}>
        <Box css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <Link
            style={{ display: 'flex', gap: '16px' }}
            target="_blank"
            href="https://github.com/ReisSouza/WEB-Meegu"
            passHref
          >
            <GithubLogo size={24} />
            <Heading size="sm" color="secondary">
              Repositório WEB - Frontend
            </Heading>
          </Link>
        </Box>
        <Box css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <Link
            style={{ display: 'flex', gap: '16px' }}
            target="_blank"
            href="https://github.com/ReisSouza/API-Meegu"
            passHref
          >
            <GithubLogo size={24} />
            <Heading size="sm" color="secondary">
              Repositório API - Backend
            </Heading>
          </Link>
        </Box>
      </S.DashboardFlexRow>
      <S.DashboardFlexRow
        css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}
      >
        <Box
          css={{
            display: 'flex',
            height: '74px',
            gap: '$8',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <Link style={{ display: 'flex', gap: '16px' }} target="_blank" href="http://localhost:3001/doc" passHref>
            <FileDoc size={24} />
            <Heading size="sm" color="secondary">
              Documentação API
            </Heading>
          </Link>
        </Box>
        <Box css={{ display: 'flex', gap: '$8', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
          <Heading size="sm" color="secondary">
            Arquivo JSON
          </Heading>
          <DownloadButtonCollectionPostman />
        </Box>
      </S.DashboardFlexRow>
    </S.DashboardContainer>
  )
}
