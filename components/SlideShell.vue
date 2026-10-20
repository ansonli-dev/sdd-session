<script setup>
defineProps({
  section: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  page: { type: String, default: '' },
  tone: { type: String, default: 'blue' },
  variant: { type: String, default: 'standard' },
})
</script>

<template>
  <section class="visual-shell" :class="[`shell-${variant}`, `tone-${tone}`]">
    <header class="visual-shell__header">
      <div>
        <div v-if="section" class="visual-shell__section">{{ section }}</div>
        <h1>{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
      <slot name="header" />
    </header>
    <main class="visual-shell__body"><slot /></main>
    <footer v-if="page" class="visual-shell__page">{{ page }}</footer>
  </section>
</template>
