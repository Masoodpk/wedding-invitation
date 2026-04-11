<template>
  <section class="reveal py-[clamp(3rem,6vw,5rem)] px-4 max-w-[1000px] mx-auto text-center" id="date">
    <h3 class="font-serif text-[clamp(2rem,4vw,3rem)] text-accent m-0 mb-4 tracking-[0.1em]">{{ heading }}</h3>
    <div class="w-[60px] h-0.5 bg-accent mx-auto mb-12 opacity-50" />

    <div class="bg-card rounded-[20px] p-[clamp(2rem,5vw,4rem)] shadow-2xl">
      <p class="font-serif tracking-widest text-accent text-sm mb-4">
        {{ subheading }}
      </p>

      <div class="flex items-center justify-center gap-8 text-text mb-12">
        <div class="text-[clamp(4rem,8vw,6rem)] leading-none font-serif">{{ formattedDate.day }}</div>
        <div class="w-px h-20 bg-text opacity-30" />
        <div class="flex flex-col items-start text-accent font-serif">
          <span class="text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[0.1em]">{{ formattedDate.month }}</span>
          <span class="text-[clamp(0.9rem,1.5vw,1.2rem)] tracking-[0.25em] mt-2 text-text opacity-80 font-serif">
            {{ formattedDate.year }} • {{ formattedDate.weekday }}
          </span>
        </div>
      </div>

      <div id="countdown" class="flex items-center justify-center gap-[clamp(0.2rem,2vw,1.5rem)]" aria-live="polite">
        <div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
          <strong id="days" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{{ time.days }}</strong>
          <span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">DAYS</span>
        </div>
        <span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
        <div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
          <strong id="hours" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{{ time.hours }}</strong>
          <span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">HOURS</span>
        </div>
        <span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
        <div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
          <strong id="minutes" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{{ time.minutes }}</strong>
          <span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">MINS</span>
        </div>
        <span class="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
        <div class="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
          <strong id="seconds" class="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{{ time.seconds }}</strong>
          <span class="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">SECS</span>
        </div>
      </div>
    </div>

    <p v-if="time.arrived" id="countdownNote" class="mt-8 text-accent text-[1.2rem] font-serif">
      The wedding day has arrived. Welcome to our celebration.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCountdown } from '~/composables/useCountdown'
import { formatDateParts } from '~/lib/wedding'

const props = defineProps<{
  dateTimeLocal: string
  heading: string
  subheading: string
}>()

const time = useCountdown(props.dateTimeLocal)
const formattedDate = computed(() => formatDateParts(props.dateTimeLocal))
</script>
