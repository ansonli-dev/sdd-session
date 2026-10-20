<script setup>
defineProps({ icon: { type: String, required: true }, title: { type: String, required: true }, detail: { type: String, default: '' } })
</script>

<template>
  <div class="icon-label">
    <span class="icon-label__icon" :class="icon" />
    <div><b>{{ title }}</b><small v-if="detail">{{ detail }}</small></div>
  </div>
</template>
