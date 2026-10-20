<script setup>
defineProps({ label: { type: String, required: true }, state: { type: String, default: 'pending' } })
</script>

<template><div class="quality-gate" :class="`gate-${state}`"><i class="i-carbon-checkmark-outline" /><span>{{ label }}</span></div></template>
