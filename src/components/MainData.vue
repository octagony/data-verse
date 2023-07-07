<script setup lang="ts">
import { type IUserClass } from '@/interfaces/user.interface'
import type { PropType } from 'vue'
const props = defineProps({
  userRef: Object as PropType<IUserClass>
})
</script>

<template>
  <div>
    <h1>Test</h1>
    {{ JSON.stringify(props) }}
  </div>
</template>
