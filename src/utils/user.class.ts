import type { IUserClass, IUserProps } from '@/interfaces/user.interface'
import { faker } from '@faker-js/faker'

export class User implements IUserClass {
  firstName: string
  lastName: string
  email: string
  state: string
  city: string
  streetAdress: string
  zip: string
  cardNumber: string
  cvvNumber: string
  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.email = faker.internet.email({
      firstName: this.firstName,
      lastName: this.lastName
    })
    this.state = faker.location.state()
    this.city = faker.location.city()
    this.streetAdress = faker.location.streetAddress()
    this.zip = faker.location.zipCode()
    this.cardNumber = faker.finance.creditCardNumber()
    this.cvvNumber = faker.finance.creditCardCVV()
  }
  update() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.email = faker.internet.email({
      firstName: this.firstName,
      lastName: this.lastName
    })
    this.state = faker.location.state()
    this.city = faker.location.city()
    this.streetAdress = faker.location.streetAddress()
    this.zip = faker.location.zipCode()
    this.cardNumber = faker.finance.creditCardNumber()
    this.cvvNumber = faker.finance.creditCardCVV()
  }
  returnData(): IUserProps[] {
    return [
      {
        id: 1,
        description: 'First Name',
        value: this.firstName
      },
      {
        id: 2,
        description: 'Last Name',
        value: this.lastName
      },
      {
        id: 3,
        description: 'Email',
        value: this.email
      },
      {
        id: 4,
        description: 'State',
        value: this.state
      },
      {
        id: 5,
        description: 'City',
        value: this.city
      },
      {
        id: 6,
        description: 'StreetAdress',
        value: this.streetAdress
      },
      {
        id: 7,
        description: 'Zip',
        value: this.zip
      },
      {
        id: 8,
        description: 'Card number',
        value: this.cardNumber
      },
      {
        id: 9,
        description: 'CVV',
        value: this.cvvNumber
      }
    ]
  }
}
