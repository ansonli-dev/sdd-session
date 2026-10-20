<script setup>
defineProps({ levels: { type: Array, required: true } })
</script>

<template>
  <div class="knowledge-pyramid">
    <div v-for="(level, index) in levels" :key="String(level)" class="knowledge-pyramid__level" :style="{ '--level': index }"><b>L{{ index }}</b><span>{{ level }}</span></div>
    <div class="knowledge-pyramid__arrow down">上下文组装 ↓</div>
    <div class="knowledge-pyramid__arrow up">↑ 评审与晋升</div>
  </div>
</template>
