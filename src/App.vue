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
  <MainData :userRef="userRef" />
  <GenerateButton @updateData="updateData" />
</template>
