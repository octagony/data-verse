<script setup lang="ts">
import MainData from '@/components/MainData.vue'
import GenerateButton from '@/components/GenerateButton.vue'
import { User } from '@/utils/user.class'
import { ref } from 'vue'

const userData = new User()
const userRef = ref(userData)

const updateData = () => {
  userRef.value.update()
}
</script>

<template>
  <div class="container">
    <MainData :userRef="userRef" />
    <GenerateButton @updateData="updateData" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
