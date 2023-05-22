import { useToastContext } from '@/context/ToastProvider'
import { FormCreateAccount } from '@/features/components/FormCreateAccount/FormCreateAccount'
import { CreateAccountFormType } from '@/features/components/FormCreateAccount/validation'
import { useCreateUserMutation } from '@/services/users'
import { formatRemove } from '@format-string/core'
import { Dialog } from '@ionext-ui/react'
import React from 'react'

export type DialogCreateAccountProps = {
  setOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>
  openModalCreate: boolean
  onSuccess: () => void
}

export const DialogCreateAccount: React.FC<DialogCreateAccountProps> = ({
  setOpenModalCreate,
  openModalCreate,
  onSuccess,
}: DialogCreateAccountProps) => {
  const { getFeedbackRequest } = useToastContext()
  const [createUser, { isLoading }] = useCreateUserMutation()
  const handleCreateUser = async (data: CreateAccountFormType) => {
    createUser({
      ...data,
      zipcode: formatRemove(data.zipcode),
      document: formatRemove(data.document),
    }).then((res) => {
      getFeedbackRequest(res)
      if (res && 'data' in res) {
        setOpenModalCreate(false)
        onSuccess()
      }
    })
  }
  return (
    <Dialog
      cssFooter={{}}
      cssOverlay={{}}
      cssContent={{ overflowY: 'auto', minWidth: '680px' }}
      title="Criar contar"
      description="Preencha o formulário para criar uma nova conta "
      footer={[]}
      onOpenChange={setOpenModalCreate}
      trigger={undefined}
      open={openModalCreate}
      content={<FormCreateAccount onSubmit={handleCreateUser} isLoading={isLoading} />}
    />
  )
}
