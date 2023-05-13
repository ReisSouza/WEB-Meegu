const validationPassword = (password: string) => {
  const validationRule = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  return validationRule.test(password)
}

export { validationPassword }
