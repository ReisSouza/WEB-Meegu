export type User = {
  id: string
  updatedAt: string
  createdAt: string
  access_token: string
  useTermsAccepted: boolean
  email: string
  name: string
  address: {
    street: string
    city: string
    district: string
    complement: string
    zipcode: string
  }
  birthdate: string
  document: string
}
