<script setup>
defineProps({ status: { type: String, default: 'fact' }, icon: { type: String, default: '' } })
</script>

<template>
  <span class="status-chip" :class="`chip-${status}`"><i v-if="icon" :class="icon" /><slot /></span>
</template>
