<script setup lang="ts"></script>

<template>
  <button @click="$emit('updateData')">Regenerate</button>
</template>

<style scoped>
button {
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.1) 0 2px 5px 0,
    rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.15;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  width: 33%;
  margin: 0 auto;
  padding: 9px;
  font-weight: 700;
}

button:hover {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.2) 0 6px 15px 0,
    rgba(0, 0, 0, 0.1) 0 2px 2px 0, rgba(50, 151, 211, 0.3) 0 0 0 4px;
  scale: 1.05;
}

button:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.2) 0 6px 15px 0,
    rgba(0, 0, 0, 0.1) 0 2px 2px 0, rgba(50, 151, 211, 0.3) 0 0 0 4px;
}
</style>
