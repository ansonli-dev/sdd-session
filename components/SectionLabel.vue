<script setup>
defineProps({ index: { type: String, default: '' }, label: { type: String, required: true } })
</script>

<template>
  <div class="section-label"><b v-if="index">{{ index }}</b><span>{{ label }}</span></div>
</template>
