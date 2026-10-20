<script setup>
defineProps({ label: { type: String, required: true }, detail: { type: String, default: '' }, kind: { type: String, default: 'primary' }, state: { type: String, default: 'current' }, icon: { type: String, default: '' } })
</script>

<template>
  <div class="flow-node" :class="[`node-${kind}`, `node-${state}`]">
    <span v-if="icon" class="flow-node__icon" :class="icon" />
    <div><b>{{ label }}</b><small v-if="detail">{{ detail }}</small></div>
  </div>
</template>
