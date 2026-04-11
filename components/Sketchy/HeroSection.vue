<template>
  <section class="reveal relative min-h-screen py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
    <div class="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div class="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
        <div class="inline-block px-4 py-1 border border-[#C62828] text-[#C62828] text-sm tracking-[0.3em] uppercase mb-8">
          The Wedding of -------
        </div>

        <h2 class="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] font-serif uppercase tracking-tighter mb-4 text-[#1A1A1A]">
          {{ data.couple.groom.name }}
          <br />
          <span class="text-[#C62828]">&amp;</span> {{ data.couple.bride.name }}
        </h2>

        <div class="relative mt-4">
          <p class="font-script text-[clamp(1.5rem,4vw,2.5rem)] text-gray-700">...совместные мечты</p>
          <Elements type="underline" className="absolute -bottom-2 left-0 w-full h-4 text-[#C62828] opacity-40" />
        </div>

        <div class="mt-12 flex flex-col items-center md:items-start gap-4 font-serif tracking-[0.2em] text-[#1A1A1A]">
          <p class="text-xl">{{ dateText }}</p>
          <p class="text-sm opacity-60 uppercase">{{ data.events.venue.name }}</p>
        </div>
      </div>

      <div class="order-1 md:order-2 relative">
        <div class="aspect-[4/5] bg-gray-200 border-[8px] border-white shadow-xl transform rotate-2 overflow-hidden">
          <img :src="data.wedding.heroImageUrl" alt="Couple" class="w-full h-full object-cover grayscale" />
        </div>

        <div class="absolute -bottom-10 -left-10 w-24 h-24 text-[#C62828] rotate-45 opacity-60">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10,50 L90,50 M70,30 L90,50 L70,70" />
          </svg>
        </div>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="font-serif text-[10px] tracking-[0.3em] uppercase text-[#C62828] opacity-60">Scroll</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C62828" stroke-width="1.5">
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WeddingData } from '~/lib/wedding'
import Elements from './Elements.vue'

const props = defineProps<{
  data: WeddingData
}>()

function parseYmd(dateTimeLocal: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim())
  if (!match) return null
  return { year: match[1], month: match[2], day: match[3] }
}

const dateText = computed(() => {
  const ymd = parseYmd(props.data.wedding.dateTimeLocal)
  return ymd ? `${ymd.day} . ${ymd.month} . ${ymd.year}` : ''
})
</script>
