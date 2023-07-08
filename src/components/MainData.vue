<script setup lang="ts">
import { type IUserClass } from '@/interfaces/user.interface'
import type { PropType } from 'vue'
const props = defineProps({
  userRef: Object as PropType<IUserClass>
})
</script>

<template>
  <div>
    <small>First Name</small>
    <p>{{ props.userRef?.firstName }}</p>
    <small>Last Name</small>
    <p>{{ props.userRef?.lastName }}</p>
    <small>Email</small>
    <p>{{ props.userRef?.email }}</p>
    <small>State</small>
    <p>{{ props.userRef?.state }}</p>
    <small>City</small>
    <p>{{ props.userRef?.city }}</p>
    <small>Street adress</small>
    <p>{{ props.userRef?.streetAdress }}</p>
    <small>ZIP-code</small>
    <p>{{ props.userRef?.zip }}</p>
    <small>Card Number</small>
    <p>{{ props.userRef?.cardNumber }}</p>
    <small>CvvNumber</small>
    <p>{{ props.userRef?.cvvNumber }}</p>
  </div>
</template>
