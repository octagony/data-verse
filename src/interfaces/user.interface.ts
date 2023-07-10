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

export interface IUserProps {
  id: number
  description: string
  value: string | Function
}
