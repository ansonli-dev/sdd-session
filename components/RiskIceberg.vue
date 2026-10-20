<script setup>
defineProps({ visible: { type: String, default: '看似完整的 Spec' }, risks: { type: Array, default: () => ['假精确', 'Spec 漂移', '证据不足', '循环失控'] } })
</script>

<template>
  <div class="risk-iceberg">
    <div class="risk-iceberg__surface"><span>{{ visible }}</span></div>
    <div class="risk-iceberg__water" />
    <div class="risk-iceberg__body"><StatusChip v-for="risk in risks" :key="String(risk)" status="risk">{{ risk }}</StatusChip></div>
  </div>
</template>
