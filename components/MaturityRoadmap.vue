<script setup>
defineProps({ stages: { type: Array, required: true }, active: { type: Number, default: 4 } })
</script>

<template>
  <div class="maturity-roadmap">
    <article v-for="(stage, index) in stages" :key="String(stage)" :class="{ active: index <= active }" :style="{ '--stage': index }"><b>0{{ index + 1 }}</b><span>{{ stage }}</span><small>{{ index === 0 ? '闭合一个循环' : index === stages.length - 1 ? '规模化治理' : '验证后扩展' }}</small></article>
  </div>
</template>
