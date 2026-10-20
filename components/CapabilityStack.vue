<script setup>
defineProps({ layers: { type: Array, required: true }, direction: { type: String, default: 'up' } })
</script>

<template>
  <div class="capability-stack" :class="`stack-${direction}`">
    <div v-for="(layer, index) in layers" :key="String(layer)" class="capability-stack__layer"><b>L{{ index }}</b><span>{{ layer }}</span></div>
  </div>
</template>
