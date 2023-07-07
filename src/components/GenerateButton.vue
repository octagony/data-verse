<script setup lang="ts">
const props = defineProps({
  regenerate: Function
})
const emit = defineEmits(['updateData'])
</script>

<template>
  <button @click="$emit('updateData')">Regenerate</button>
</template>
