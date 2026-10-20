<script setup>
defineProps({ state: { type: String, default: 'active' } })
</script>

<template><div class="click-stage" :class="`click-${state}`"><slot /></div></template>
