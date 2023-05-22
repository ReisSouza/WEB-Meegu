import React, { useState } from 'react'

import * as S from './styles'
import { Paragraph, Table } from '@ionext-ui/react'
import Icon from '@/components/Icon/Icon'
import { useDeleteAccountMutation, useGetAccountsQuery } from '@/services/users'
import { PencilSimple, TrashSimple } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useToastContext } from '@/context/ToastProvider'
import { DialogCreateAccount } from './components/DialogCreateAccount/DialogCreateAccount'
import { formatString } from '@format-string/core'
import dayjs from 'dayjs'
import { User } from '@/types/user'
import { DialogEditAccount } from './components/DialogEditAccount/DialogEditAccount'

export type AccountsProps = {}

export const Accounts: React.FC<AccountsProps> = ({}: AccountsProps) => {
  const { push, query, isReady } = useRouter()
  const [openModalEditUser, setOpenModalEditUser] = useState(false)
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const [userForEdit, setUserForEdit] = useState<User | undefined>()
  const [filterValue, setFilter] = useState<string | undefined>(query.filter as string)

  const { getFeedbackRequest } = useToastContext()

  const { data, refetch } = useGetAccountsQuery(
    { page: 1, limit: 8, filter: filterValue },
    { refetchOnMountOrArgChange: true, skip: !isReady, refetchOnFocus: true, refetchOnReconnect: true },
  )

  const [deleteAccount] = useDeleteAccountMutation()

  const handleFilter = ({ filter }: { filter: string }) => {
    push('', { query: { filter } })
    setFilter(filter)
  }

  const handleDelete = (id: string) => {
    deleteAccount(id).then((res) => {
      getFeedbackRequest(res)
      if (res && 'data' in res) {
        refetch()
      }
    })
  }
  const handleOpenModalCreateAccount = () => {
    setOpenModalCreate(true)
  }

  const handleOpenModalEditAccount = (id: string) => {
    const userSelected = data?.data.accounts.filter((account) => account.id === id)[0]
    setUserForEdit(userSelected)
    setOpenModalEditUser(true)
  }

  return (
    <S.AccountsCOntainer>
      <Table
        onAdd={handleOpenModalCreateAccount}
        onFilter={handleFilter}
        hasRounded
        onSort={() => {}}
        options={[
          {
            icon: <PencilSimple weight="fill" />,
            label: 'Editar',
            onClick: handleOpenModalEditAccount,
          },
          {
            icon: <TrashSimple weight="fill" />,
            label: 'Deletar',
            onClick: handleDelete,
          },
        ]}
        labelButtonAdd="Novo usuário"
        iconButtonAdd={<Icon icon="users" size={24} />}
        cols={[' Nome', 'Email', 'Documento', ' Cep', 'Aniversario', 'Criação', 'Atualização']}
        rows={
          data?.data?.accounts?.map((user) => {
            return {
              cols: [
                <Paragraph key={1}>{user.name}</Paragraph>,
                <Paragraph key={2}>{user.email}</Paragraph>,
                <Paragraph key={2}>{formatString({ value: user.document, type: 'cpfOurCnpj' })}</Paragraph>,
                <Paragraph key={2}>{formatString({ value: user.zipcode, type: 'postalCode' })}</Paragraph>,
                <Paragraph key={2}>{dayjs(user.birthdate).format('DD-MM-YYY')}</Paragraph>,
                <Paragraph key={2}>{dayjs(user.createdAt).format('DD-MM-YYY')}</Paragraph>,
                <Paragraph key={2}>{dayjs(user.updatedAt).format('DD-MM-YYY')}</Paragraph>,
              ],
              id: user.id,
            }
          }) || []
        }
      />
      <DialogEditAccount
        openModalEdit={openModalEditUser}
        setOpenModalEdit={setOpenModalEditUser}
        onSuccess={() => refetch()}
        user={userForEdit}
      />
      <DialogCreateAccount
        onSuccess={() => refetch()}
        openModalCreate={openModalCreate}
        setOpenModalCreate={setOpenModalCreate}
      />
    </S.AccountsCOntainer>
  )
}
