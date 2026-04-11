<template>
  <div class="min-h-[100svh] bg-[#f2efe6] text-[#171717]">
    <header class="max-w-[1100px] mx-auto px-6 pt-8">
      <div class="text-center text-[12px] tracking-[0.26em] uppercase opacity-70">{{ t4.headerText }}</div>

      <div class="mt-7 border-t border-[#171717]/15" />
      <nav class="py-4 flex items-center justify-center gap-10 text-[11px] tracking-[0.22em] uppercase opacity-70">
        <a v-for="label in t4.navItems ?? []" :key="label" href="#" class="hover:opacity-100">
          {{ label }}
        </a>
      </nav>
    </header>

    <section class="max-w-[1100px] mx-auto px-6 mt-6 rounded-[2px] overflow-hidden relative">
      <img :src="t4.heroImageUrl" alt="" class="w-full h-[360px] md:h-[420px] object-cover" />
      <div class="absolute inset-0 bg-black/35" />
      <div class="absolute inset-0 flex items-center justify-center text-center px-6">
        <div class="max-w-[900px]">
          <div class="text-[11px] tracking-[0.26em] uppercase text-white/85">{{ t4.heroKicker }}</div>
          <div class="mt-6 text-[clamp(44px,7vw,92px)] leading-[0.92] text-white font-script">{{ t4.heroTitle }}</div>
          <div class="mt-4 text-[12px] tracking-[0.22em] uppercase text-white/80">{{ t4.heroDateText }}</div>
        </div>
      </div>
    </section>

    <section class="max-w-[1100px] mx-auto px-6 mt-10 bg-[#f7f3ea] border border-[#171717]/12 rounded-[2px] px-8 md:px-12 py-14 text-center">
      <div class="text-[11px] tracking-[0.26em] uppercase opacity-70">{{ t4.welcomeKicker }}</div>
      <div class="mt-6 text-[clamp(42px,6vw,78px)] leading-[0.92] font-script">{{ t4.welcomeHeading }}</div>
      <p class="mt-8 max-w-[760px] mx-auto text-[14px] leading-[1.9] opacity-80">{{ t4.welcomeText }}</p>
      <div class="mt-10">
        <button class="border border-[#171717]/70 px-10 py-4 text-[11px] tracking-[0.26em] uppercase">{{ t4.primaryCtaLabel }}</button>
      </div>
      <div class="mt-10 text-[12px] tracking-[0.18em] opacity-70 font-serif">
        {{ data.couple.groom.name }} &amp; {{ data.couple.bride.name }}
      </div>
    </section>

    <section class="max-w-[1100px] mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
      <div v-for="(src, idx) in (t4.galleryImages ?? []).slice(0, 3)" :key="`${src}-${idx}`" class="rounded-[2px] overflow-hidden bg-[#171717]/10">
        <img :src="src" alt="" class="w-full h-[240px] object-cover grayscale" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WeddingData } from '~/lib/wedding'

const props = defineProps<{ data: WeddingData }>()

const t4 = computed(() => props.data.templateFour ?? ({} as WeddingData['templateFour']))
</script>
