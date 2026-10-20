<script setup>
defineProps({ variant: { type: String, default: 'answer' }, label: { type: String, default: '' } })
</script>

<template>
  <blockquote class="statement-block" :class="`statement-${variant}`">
    <small v-if="label">{{ label }}</small>
    <div><slot /></div>
  </blockquote>
</template>
