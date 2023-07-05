import type { IUserClass } from '@/interfaces/user.interface'
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
}
