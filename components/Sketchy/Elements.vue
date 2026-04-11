<template>
  <svg v-if="type === 'circle'" viewBox="0 0 100 100" :class="className" fill="none" stroke="currentColor" stroke-width="2">
    <path
      d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,12"
      stroke-dasharray="300"
      stroke-dashoffset="0"
      class="animate-[draw_2s_ease-out_infinite]"
    />
  </svg>

  <svg v-else-if="type === 'line'" viewBox="0 0 200 20" :class="className" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10" />
  </svg>

  <svg v-else-if="type === 'underline'" viewBox="0 0 100 10" :class="className" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M2,5 Q50,8 98,4 Q50,2 5,6" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  type: 'circle' | 'line' | 'underline'
  className?: string
}>()
</script>
