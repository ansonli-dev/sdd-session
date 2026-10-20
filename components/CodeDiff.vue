<script setup>
defineProps({ before: { type: Array, default: () => [] }, after: { type: Array, default: () => [] } })
</script>

<template>
  <div class="code-diff">
    <div class="code-diff__pane removed"><small>之前</small><code v-for="line in before" :key="line">− {{ line }}</code></div>
    <div class="code-diff__pane added"><small>之后</small><code v-for="line in after" :key="line">+ {{ line }}</code></div>
  </div>
</template>
