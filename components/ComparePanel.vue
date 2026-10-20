<script setup>
defineProps({ leftTitle: { type: String, default: '之前' }, rightTitle: { type: String, default: '之后' }, balance: { type: String, default: 'equal' } })
</script>

<template>
  <div class="compare-panel" :class="`compare-${balance}`">
    <section class="compare-panel__side compare-panel__left"><h3>{{ leftTitle }}</h3><slot name="left" /></section>
    <div class="compare-panel__divider">→</div>
    <section class="compare-panel__side compare-panel__right"><h3>{{ rightTitle }}</h3><slot name="right" /></section>
  </div>
</template>
