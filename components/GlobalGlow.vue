<script setup>
defineProps({
  tone: { type: String, default: 'blue' },
  position: { type: String, default: 'center' },
  intensity: { type: String, default: 'normal' },
})
</script>

<template>
  <div class="global-glow" :class="[`glow-${tone}`, `glow-${position}`, `glow-${intensity}`]" aria-hidden="true">
    <span class="glow-shape glow-shape-a" />
    <span class="glow-shape glow-shape-b" />
    <span class="glow-shape glow-shape-c" />
  </div>
</template>
