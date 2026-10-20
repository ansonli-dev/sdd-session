<script setup>
defineProps({ steps: { type: Array, required: true }, center: { type: String, default: '' }, tone: { type: String, default: 'green' } })
</script>

<template>
  <div class="loop-diagram" :class="`loop-${tone}`">
    <div class="loop-diagram__ring" />
    <div class="loop-diagram__center">{{ center }}</div>
    <div v-for="(step, index) in steps" :key="String(step)" class="loop-diagram__node" :style="{ '--index': index, '--count': steps.length }"><b>{{ step }}</b></div>
  </div>
</template>
