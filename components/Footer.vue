<template>
  <footer class="reveal text-center py-16 px-4 bg-bg border-t border-accent/10">
    <p class="font-arabic text-accent text-2xl mb-2">{{ blessingArabic }}</p>
    <p class="font-serif tracking-widest text-sm text-[FAFAF2] opacity-80 mt-2">{{ namesLine }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  blessingArabic: string
  namesLine: string
}>()
</script>
