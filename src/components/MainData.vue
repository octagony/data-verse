<script setup lang="ts">
import { type IUserClass } from '@/interfaces/user.interface'
import type { PropType } from 'vue'
const props = defineProps({
  userRef: Object as PropType<IUserClass>
})
</script>

<template>
  <div class="container">
    <div class="data__container">
      <small class="data__description">First Name</small>
      <p class="data__value">{{ props.userRef?.firstName }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">Last Name</small>
      <p class="data__value">{{ props.userRef?.lastName }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">Email</small>
      <p class="data__value">{{ props.userRef?.email }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">State</small>
      <p class="data__value">{{ props.userRef?.state }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">City</small>
      <p class="data__value">{{ props.userRef?.city }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">Street adress</small>
      <p class="data__value">{{ props.userRef?.streetAdress }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">ZIP-code</small>
      <p class="data__value">{{ props.userRef?.zip }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">Card Number</small>
      <p class="data__value">{{ props.userRef?.cardNumber }}</p>
    </div>
    <div class="data__container">
      <small class="data__description">CvvNumber</small>
      <p class="data__value">{{ props.userRef?.cvvNumber }}</p>
    </div>
  </div>
</template>

<style scoped>
.data__container {
  padding: 0 5px;
  width: 100%;
}

.data__description {
  font-size: 0.8rem;
  color: #0dc3e7;
  font-weight: 300;
}

.data__value {
  font-weight: 400;
  font-size: 1.2rem;
}
</style>
