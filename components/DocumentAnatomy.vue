<script setup>
defineProps({ title: { type: String, default: 'SPEC' }, fields: { type: Array, required: true } })
</script>

<template>
  <div class="document-anatomy">
    <div class="document-anatomy__doc"><small>产物</small><b>{{ title }}</b><span v-for="line in 5" :key="line" /></div>
    <div class="document-anatomy__fields"><StatusChip v-for="(field, index) in fields" :key="String(field)" :status="index % 3 === 0 ? 'decision' : index % 3 === 1 ? 'evidence' : 'fact'">{{ field }}</StatusChip></div>
  </div>
</template>
