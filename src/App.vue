<script setup lang="ts">
import { User } from '@/utils/user.dto'
import MainData from '@/components/MainData.vue'
import { ref } from 'vue'
import IUserClass from '@/interfaces/user.interface'

const userData = ref<IUserClass>(new User())
</script>

<template>
  <MainData :userData="userData" />
</template>
