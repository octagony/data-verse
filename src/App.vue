<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { reactive } from 'vue'

const data = reactive({
  fullName: faker.person.fullName({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  }),
  state: faker.location.state(),
  city: faker.location.city(),
  streetAdress: faker.location.streetAddress(),
  zip: faker.location.zipCode(),
  cardNumber: faker.finance.creditCardNumber(),
  cvvNumber: faker.finance.creditCardCVV()
})

const regenerateData = () => {
  data.fullName = faker.person.fullName({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  })
  data.state = faker.location.state()
  data.city = faker.location.city()
  ;(data.streetAdress = faker.location.streetAddress()), (data.zip = faker.location.zipCode())
  ;(data.cardNumber = faker.finance.creditCardNumber()),
    (data.cvvNumber = faker.finance.creditCardCVV())
}
</script>

<template>
  <div class="test">
    <p>{{ data.fullName }}</p>
    <p>{{ data.state }}</p>
    <p>{{ data.city }}</p>
    <p>{{ data.streetAdress }}</p>
    <p>{{ data.zip }}</p>
    <p>{{ data.cardNumber }}</p>
    <p>{{ data.cvvNumber }}</p>
  </div>
  <button @click="regenerateData">regenerateData</button>
</template>
