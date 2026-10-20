<script setup>
defineProps({ root: { type: String, default: '模糊想法' }, frontier: { type: Array, default: () => ['决策 A', '决策 B'] }, locked: { type: Array, default: () => ['下一步 A', '下一步 B'] } })
</script>

<template>
  <div class="decision-tree">
    <FlowNode :label="root" kind="artifact" state="complete" />
    <div class="decision-tree__stem" />
    <div class="decision-tree__row frontier"><FlowNode v-for="item in frontier" :key="String(item)" :label="String(item)" kind="human" state="current" /></div>
    <div class="decision-tree__row locked"><FlowNode v-for="item in locked" :key="String(item)" :label="String(item)" kind="secondary" state="locked" /></div>
  </div>
</template>
