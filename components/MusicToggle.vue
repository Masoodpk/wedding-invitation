<template>
  <button
    v-if="!hidden"
    id="musicToggle"
    :class="`fixed bottom-5 right-5 md:bottom-8 md:right-8 xl:bottom-6 xl:right-5.5 z-40 w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-card/80 backdrop-blur-lg border border-accent text-accent flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-card ${playing ? 'is-playing' : ''}`"
    aria-label="Toggle background music"
    :aria-pressed="playing"
    @click="$emit('toggle')"
  >
    <svg
      class="w-4 h-4 md:w-5 md:h-5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <template v-if="playing">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </template>
      <template v-else>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </template>
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  playing: boolean
  hidden: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>
