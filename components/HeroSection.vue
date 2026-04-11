<template>
  <header class="reveal relative min-h-[100svh] flex items-center justify-center overflow-visible">
    <div class="absolute inset-0 w-full h-full overflow-hidden">
      <!-- Decorative Frame -->
      <div class="absolute inset-[clamp(1rem,1.3vw,2rem)] border border-[#E6B836]/20 z-[5] pointer-events-none before:content-[''] before:absolute before:top-[-2px] before:left-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-[#E6B836] after:content-[''] after:absolute after:bottom-[-2px] after:right-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-r-2 after:border-[#E6B836]">
        <div class="absolute inset-0 before:content-[''] before:absolute before:top-[-2px] before:right-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-r-2 before:border-[#E6B836] after:content-[''] after:absolute after:bottom-[-2px] after:left-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-l-2 after:border-[#E6B836]" />
      </div>

      <img
        :src="heroImageUrl"
        alt="Wedding couple"
        class="hero-image parallax absolute inset-0 w-full h-full object-cover object-center scale-[1.05] grayscale opacity-25"
        decoding="async"
      />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#001f11]/70 via-[#001f11]/50 to-[#001f11] opacity-80" />

      <div class="relative z-[2] text-center w-full px-4 flex flex-col items-center justify-center h-full">
        <p class="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#E6B836] mb-8 font-arabic">{{ basmala }}</p>
        <p class="m-0 mb-8 uppercase tracking-[0.3em] text-[clamp(0.7rem,1.5vw,0.9rem)] text-white opacity-80 font-serif">{{ tagline }}</p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-8">
          <span class="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">{{ getFirstName(groomName) }}</span>
          <span class="text-[clamp(1.5rem,3vw,2.5rem)] text-[#E6B836] font-serif">&amp;</span>
          <span class="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">{{ getFirstName(brideName) }}</span>
        </div>

        <div class="flex items-center justify-center gap-4 md:gap-8 my-8 text-[#E6B836] bg-[#003219]/10 backdrop-blur-[2px] border border-[#E6B836]/15 py-4 px-6 md:px-12 font-serif max-w-[calc(100%-2rem)] mx-auto">
          <div class="flex flex-col items-center line-height-[1.2]">
            <span class="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">{{ formattedDate.day }}</span>
            <span class="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">{{ formattedDate.month }}</span>
          </div>
          <div class="w-px h-10 bg-[#E6B836] opacity-50" />
          <div class="flex flex-col items-center line-height-[1.2]">
            <span class="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">{{ formattedDate.year }}</span>
            <span class="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">{{ formattedDate.weekday }}</span>
          </div>
        </div>

        <div class="scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 color-[#E6B836] text-[0.75rem] tracking-[0.2em] opacity-80 animate-bounce font-serif">
          <p>Scroll Down</p>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatDateParts, getFirstName } from '~/lib/wedding'

const props = defineProps<{
  brideName: string
  groomName: string
  dateTimeLocal: string
  heroImageUrl: string
  basmala: string
  tagline: string
}>()

const formattedDate = computed(() => formatDateParts(props.dateTimeLocal))
</script>
