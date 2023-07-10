<script setup lang="ts">
import MainData from '@/components/MainData.vue'
import GenerateButton from '@/components/GenerateButton.vue'
import { User } from '@/utils/user.class'
import { computed, ref, watch } from 'vue'
import { type IUserProps } from './interfaces/user.interface'

const userData = new User()
const userRef = ref<IUserProps[]>(userData.returnData())

const updateData = () => {
  userData.update()
  userRef.value = userData.returnData()
}
</script>

<template>
  <div class="container">
    <MainData :userRef="userRef" />
    <GenerateButton @updateData="updateData" />
  </div>
</template>

<style scoped>
/* FONT FACE CONNECT START */
@font-face {
  font-family: 'Quicksand-Regular';
  src: local('Quicksand-Regular'), url('./fonts/Quicksand-Regular.woff2') format('woff2');
  src: local('Quicksand-Regular'), url('./fonts/Quicksand-Regular.woff') format('woff');
  src: local('Quicksand-Regular'), url('./fonts/Quicksand-Regular.ttf') format('truetype');
  src: local('Quicksand-Regular'), url('./fonts/Quicksand-Regular.eot') format('eot');
  font-weight: 400;
}

@font-face {
  font-family: 'Quicksand-Bold';
  src: local('Quicksand-Bold'), url('./fonts/Quicksand-Bold.woff2') format('woff2');
  src: local('Quicksand-Bold'), url('./fonts/Quicksand-Bold.woff') format('woff');
  src: local('Quicksand-Bold'), url('./fonts/Quicksand-Bold.ttf') format('truetype');
  src: local('Quicksand-Bold'), url('./fonts/Quicksand-Bold.eot') format('eot');
  font-weight: 700;
}

@font-face {
  font-family: 'Quicksand-Light';
  src: local('Quicksand-Light'), url('./fonts/Quicksand-Light.woff2') format('woff2');
  src: local('Quicksand-Light'), url('./fonts/Quicksand-Light.woff') format('woff');
  src: local('Quicksand-Light'), url('./fonts/Quicksand-Light.ttf') format('truetype');
  src: local('Quicksand-Light'), url('./fonts/Quicksand-Light.eot') format('eot');
  font-weight: 400;
}

/* FONT FACE CONNECT END */

/* CONTAINER  */
.container {
  font-family: 'Quicksand-Regular', -apple-system, sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 10px;
  position: relative;
}
</style>
