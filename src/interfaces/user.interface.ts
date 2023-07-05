export interface IUser {
  firstName: string
  lastName: string
  email: string
  state: string
  city: string
  streetAdress: string
  zip: string
  cardNumber: string
  cvvNumber: string
}

export interface IUserClass extends IUser {
  update: () => void
}
