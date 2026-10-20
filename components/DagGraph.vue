<script setup>
defineProps({ root: { type: String, default: '契约' }, branches: { type: Array, default: () => ['后端', '前端', '测试'] }, merge: { type: String, default: '集成' }, gate: { type: String, default: '验收' } })
</script>

<template>
  <div class="dag-graph">
    <FlowNode :label="root" kind="artifact" state="complete" />
    <FlowEdge />
    <div class="dag-graph__branches"><FlowNode v-for="(branch, index) in branches" :key="String(branch)" :label="String(branch)" :kind="index === 0 ? 'primary' : 'secondary'" :state="index === 0 ? 'current' : 'complete'" /></div>
    <FlowEdge variant="critical" />
    <FlowNode :label="merge" kind="evidence" state="current" />
    <FlowEdge />
    <QualityGate :label="gate" state="passed" />
  </div>
</template>
