<template>
  <section class="reveal py-24 px-6 relative overflow-hidden">
    <div class="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
      <div class="flex flex-col items-center md:items-end text-center md:text-right relative">
        <div class="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100">
          <img src="/assets/groom-optimized.jpg" :alt="data.couple.groom.name" class="w-full h-full object-cover" />
        </div>
        <h3 class="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">{{ data.couple.groom.name }}</h3>
        <p class="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Groom</p>
        <p class="font-sans text-gray-500 font-light max-w-xs">{{ data.couple.groom.detailsLine }}</p>
      </div>

      <div class="flex flex-col items-center md:items-start text-center md:text-left relative">
        <div class="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100">
          <img src="/assets/bride-optimized.jpg" :alt="data.couple.bride.name" class="w-full h-full object-cover" />
        </div>
        <h3 class="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">{{ data.couple.bride.name }}</h3>
        <p class="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Bride</p>
        <p class="font-sans text-gray-500 font-light max-w-xs">{{ data.couple.bride.detailsLine }}</p>
      </div>
    </div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(10rem,30vw,20rem)] text-[#C62828] opacity-[0.03] pointer-events-none select-none">
      &amp;
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WeddingData } from '~/lib/wedding'

defineProps<{
  data: WeddingData
}>()
</script>
