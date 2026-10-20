<script setup>
defineProps({
  variant: { type: String, default: 'neutral' },
  state: { type: String, default: 'default' },
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
})
</script>

<template>
  <article class="glass-card" :class="[`card-${variant}`, `state-${state}`]">
    <header v-if="title || icon" class="glass-card__header">
      <span v-if="icon" class="glass-card__icon" :class="icon" />
      <h3>{{ title }}</h3>
    </header>
    <div class="glass-card__body"><slot /></div>
    <footer v-if="$slots.footer" class="glass-card__footer"><slot name="footer" /></footer>
  </article>
</template>
