<script setup>
defineProps({ label: { type: String, default: '' }, variant: { type: String, default: 'solid' }, direction: { type: String, default: 'right' } })
</script>

<template><div class="flow-edge" :class="[`edge-${variant}`, `edge-${direction}`]"><span /><small v-if="label">{{ label }}</small></div></template>
