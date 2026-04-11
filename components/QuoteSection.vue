<template>
  <section class="reveal relative py-20 md:py-32 px-6 text-center flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#002a18] via-[#001f11] to-[#002a18]" id="quote-section">
    <!-- Decorative Border Frame -->
    <div class="absolute inset-[clamp(1.5rem,4vw,3rem)] border border-accent/15 z-0 pointer-events-none" />
    
    <div class="max-w-[800px] relative z-[1]">
      <blockquote class="m-0 text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.5] text-accent uppercase font-serif">
        {{ text }}
      </blockquote>
      <div class="flex items-center justify-center gap-4 mt-8 text-accent text-[0.9rem] tracking-[0.2em] uppercase">
        <span class="flex-none w-10 h-px bg-accent opacity-50" />
        <p>{{ source }}</p>
        <span class="flex-none w-10 h-px bg-accent opacity-50" />
      </div>
    </div>

    <!-- Bottom Right Decorative Mandala -->
    <div class="absolute bottom-[-15%] right-[-15%] w-[clamp(300px,50vw,500px)] md:w-[clamp(200px,30vw,350px)] text-accent/20 pointer-events-none animate-[spin_40s_linear_infinite] z-0 hidden md:block" aria-hidden="true">
      <MandalaDecoration class="w-full h-full" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MandalaDecoration from './MandalaDecoration.vue'

defineProps<{
  text: string
  source: string
}>()
</script>
