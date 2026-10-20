<script setup>
defineProps({ label: { type: String, required: true }, value: { type: String, required: true }, detail: { type: String, default: '' }, trend: { type: String, default: 'up' }, tone: { type: String, default: 'cyan' } })
</script>

<template>
  <article class="metric-card" :class="`metric-${tone}`">
    <small>{{ label }}</small><strong>{{ value }}</strong><span class="metric-card__trend" :class="`trend-${trend}`"><i v-for="height in [20,32,27,48,56,72,84]" :key="height" :style="{ height: `${height}%` }" /></span><p>{{ detail }}</p>
  </article>
</template>
