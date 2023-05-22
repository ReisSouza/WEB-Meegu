import { useToastContext } from '@/context/ToastProvider'
import { FormUpdateAccount } from '@/features/components/FormUpdateAccount/FormUpdateAccount'

import { UpdateAccountFormType } from '@/features/components/FormUpdateAccount/validation'
import { useUpdateUserMutation } from '@/services/users'
import { User } from '@/types/user'
import { formatRemove } from '@format-string/core'
import { Dialog } from '@ionext-ui/react'
import React from 'react'

export type DialogEditAccountProps = {
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>
  openModalEdit: boolean
  onSuccess: () => void
  user?: User
}

export const DialogEditAccount: React.FC<DialogEditAccountProps> = ({
  setOpenModalEdit,
  openModalEdit,
  onSuccess,
  user,
}: DialogEditAccountProps) => {
  const { getFeedbackRequest } = useToastContext()
  const [updatedMuted, { isLoading }] = useUpdateUserMutation()
  const handleCreateUser = async (data: UpdateAccountFormType) => {
    if (user) {
      updatedMuted({
        ...data,
        id: user.id,
        zipcode: formatRemove(data.zipcode),
        document: formatRemove(data.document),
      }).then((res) => {
        getFeedbackRequest(res)
        if (res && 'data' in res) {
          setOpenModalEdit(false)
          onSuccess()
        }
      })
    }
  }
  return (
    <Dialog
      cssFooter={{}}
      cssOverlay={{}}
      cssContent={{ overflowY: 'auto', minWidth: '680px' }}
      title="Editar contar"
      description="Preencha o formulário para editar a conta "
      footer={[]}
      onOpenChange={setOpenModalEdit}
      trigger={undefined}
      open={openModalEdit}
      content={<FormUpdateAccount user={user} onSubmit={handleCreateUser} isLoading={isLoading} />}
    />
  )
}
