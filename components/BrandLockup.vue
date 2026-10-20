<script setup>
defineProps({
  variant: { type: String, default: 'partnership' },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div class="brand-lockup" :class="[{ compact }, `brand-${variant}`]">
    <img class="brand-lockup__inspire" src="/assets/brand/inspire-group-logo-white.svg" alt="Inspire Group" />
    <template v-if="variant === 'partnership'">
      <div class="brand-lockup__relation"><span />合作方<span /></div>
      <img class="brand-lockup__dji" src="/assets/brand/dji-logo-white.svg" alt="DJI" />
    </template>
  </div>
</template>
