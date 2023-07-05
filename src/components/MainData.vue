<script setup lang="ts">
const props = defineProps({
  userData: String
})
</script>

<template>
  <div>
    <h1>Test</h1>
    {{ JSON.stringify(props) }}
  </div>
</template>
