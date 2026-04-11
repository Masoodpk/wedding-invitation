<template>
  <section
    id="introScreen"
    :class="`fixed inset-0 flex items-center justify-center p-6 z-[100] bg-[#001f11] transition-[opacity,visibility] duration-[1000ms] ease-in-out overflow-hidden ${
      hidden ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible pointer-events-auto'
    }`"
  >
    <div 
      class="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#E6B836] to-transparent shadow-[0_0_15px_2px_rgba(230,184,54,0.5)] -translate-x-1/2 z-0 opacity-60 pointer-events-none" 
      aria-hidden="true" 
    />
    
    <MandalaDecoration 
      class="absolute top-0 left-0 w-[clamp(200px,60vw,500px)] h-[clamp(200px,60vw,500px)] md:w-[clamp(150px,30vw,400px)] md:h-[clamp(150px,30vw,400px)] text-white opacity-70 pointer-events-none z-0 -translate-x-1/2 -translate-y-[45%]" 
    />
    
    <MandalaDecoration 
      class="absolute bottom-0 right-0 w-[clamp(200px,60vw,500px)] h-[clamp(200px,60vw,500px)] md:w-[clamp(150px,30vw,400px)] md:h-[clamp(150px,30vw,400px)] text-white opacity-70 pointer-events-none z-0 translate-x-1/2 translate-y-[45%]" 
    />

    <div class="w-full max-w-2xl text-center z-[1] flex flex-col items-center justify-center">
      <div class="flex flex-col items-center mb-8">
        <p class="m-0 text-[1.5rem] md:text-[1.8rem] text-[#E6B836] leading-[1.2] font-arabic">
          {{ basmala }}
        </p>
      </div>

      <h1 class="mt-8 mb-0 flex flex-col items-center gap-0 leading-[1.1]">
        <span class="text-[60px] md:text-[90px] text-white font-normal font-script">{{ groomName }}</span>
        <div class="flex items-center justify-center gap-4 w-full my-4">
          <div class="flex-none w-12 h-px bg-[#E6B836] opacity-40" />
          <span class="text-[1.2rem] font-normal text-[#E6B836] font-serif">&amp;</span>
          <div class="flex-none w-12 h-px bg-[#E6B836] opacity-40" />
        </div>
        <span class="text-[60px] md:text-[90px] text-white font-normal font-script">{{ brideName }}</span>
      </h1>

      <p class="mt-12 mb-0 text-white tracking-[0.25em] uppercase text-[0.9rem] opacity-50 font-serif">
        {{ subtitle }}
      </p>

      <div class="relative flex flex-col items-center mt-12 gap-6">
        <button
          id="openInviteBtn"
          class="relative w-16 h-16 md:w-20 md:h-20 border-none rounded-full bg-[#E6B836] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-[#f2db94] animate-[pulse-ring_1s_infinite] shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          aria-label="Open invitation"
          @click="$emit('open')"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8 text-[#001f11]"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <span class="text-[#E6B836] tracking-[0.15em] uppercase text-[0.8rem] font-serif animate-[blink_2s_infinite]">Open Invitation</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MandalaDecoration from './MandalaDecoration.vue'

defineProps<{
  hidden: boolean
  brideName: string
  groomName: string
  basmala: string
  subtitle: string
}>()

defineEmits<{
  (e: 'open'): void
}>()
</script>
