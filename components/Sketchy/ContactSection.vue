<template>
  <section class="reveal py-24 px-6 bg-[#1A1A1A] text-white">
    <div class="max-w-[1000px] mx-auto text-center">
      <h3 class="font-serif text-[clamp(2.5rem,5vw,4rem)] uppercase tracking-[0.2em] mb-16 relative inline-block">
        Location
        <Elements type="underline" className="absolute -bottom-4 left-0 w-full h-8 text-[#C62828]" />
      </h3>

      <div class="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16">
        <div class="flex-1 text-center md:text-right">
          <p class="font-serif text-[#C62828] tracking-widest uppercase text-sm mb-4">Venue</p>
          <p class="font-serif text-2xl md:text-3xl mb-2">{{ data.events.venue.name }}</p>
          <p class="font-sans text-gray-400 font-light max-w-xs ml-auto mr-auto md:mr-0">{{ data.events.venue.address }}</p>
        </div>

        <div class="hidden md:block w-px bg-gray-800" />

        <div class="flex-1 text-center md:text-left flex flex-col justify-center">
          <div v-for="e in events" :key="e.title" class="mb-6 last:mb-0">
            <p class="font-serif text-xl mb-1">{{ e.title }}</p>
            <p class="font-sans text-[#C62828] tracking-widest text-sm">{{ e.time }}</p>
          </div>
        </div>
      </div>

      <a
        :href="data.events.venue.mapUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block border-2 border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white px-10 py-4 font-serif uppercase tracking-[0.2em] transition-colors duration-300"
      >
        View on Map
      </a>
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

const events = computed(() => {
  return [
    { title: props.data.events.ceremony.title, time: props.data.events.ceremony.time },
    { title: props.data.events.reception.title, time: props.data.events.reception.time },
  ]
})
</script>
