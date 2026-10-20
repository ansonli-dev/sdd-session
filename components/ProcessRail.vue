<script setup>
defineProps({ steps: { type: Array, required: true }, active: { type: Number, default: -1 }, tone: { type: String, default: 'blue' } })
</script>

<template>
  <div class="process-rail" :class="`rail-${tone}`">
    <template v-for="(step, index) in steps" :key="String(step)">
      <div class="process-rail__step" :class="{ active: index === active, complete: active > index }"><b>{{ String(index + 1).padStart(2, '0') }}</b><span>{{ step }}</span></div>
      <div v-if="index < steps.length - 1" class="process-rail__edge" />
    </template>
  </div>
</template>
