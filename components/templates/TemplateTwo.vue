<template>
  <div class="min-h-[100svh] bg-[#f3efe6] text-[#161616]">
    <header class="max-w-[980px] mx-auto px-6 pt-10">
      <div class="flex items-center justify-between text-[12px] tracking-[0.2em] uppercase">
        <div>{{ data.templateTwo.topLeftText }}</div>
        <button class="border border-[#161616] px-4 py-2 text-[12px] tracking-[0.2em] uppercase">
          {{ data.templateTwo.topRightCtaLabel }}
        </button>
      </div>
    </header>

    <main class="max-w-[980px] mx-auto px-6 pb-20">
      <section class="text-center pt-14">
        <div class="text-[11px] tracking-[0.25em] uppercase opacity-70">Save the Date</div>
        <h1 class="mt-6 text-[clamp(44px,7vw,82px)] leading-[0.95] font-serif font-normal">
          We&rsquo;re Getting
          <br />
          Married!
        </h1>

        <div class="mt-10 mx-auto w-full max-w-[560px]">
          <img
            :src="data.templateTwo.heroImageUrl"
            alt="Wedding hero"
            class="w-full h-[320px] md:h-[360px] object-cover grayscale"
          />
        </div>

        <div class="mt-10 text-[clamp(32px,5vw,58px)] leading-[1] font-serif">{{ dateLong }}</div>
        <p class="mt-6 mx-auto max-w-[620px] text-[15px] leading-[1.7] opacity-80">
          {{ data.templateTwo.description }}
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left max-w-[720px] mx-auto">
          <div>
            <div class="text-center text-[14px] tracking-[0.18em] uppercase">Ceremony</div>
            <div class="mt-5 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.venue.name }}
            </div>
            <div class="mt-2 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.venue.address }}
            </div>
            <div class="mt-3 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.ceremony.time }}
            </div>
          </div>

          <div>
            <div class="text-center text-[14px] tracking-[0.18em] uppercase">Reception</div>
            <div class="mt-5 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.venue.name }}
            </div>
            <div class="mt-2 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.venue.address }}
            </div>
            <div class="mt-3 text-center text-[12px] tracking-[0.18em] uppercase opacity-70">
              {{ data.events.reception.time }}
            </div>
          </div>
        </div>

        <div class="mt-12">
          <button class="border border-[#161616] px-10 py-4 text-[12px] tracking-[0.22em] uppercase">
            {{ data.templateTwo.primaryCtaLabel }}
          </button>
        </div>
      </section>

      <section class="mt-20 border-t border-[#161616]/20 pt-14 text-center">
        <h2 class="text-[22px] tracking-[0.12em] uppercase font-serif font-normal">{{ data.templateTwo.travelHeading }}</h2>
        <p class="mt-4 mx-auto max-w-[560px] text-[14px] leading-[1.8] opacity-80">
          {{ data.templateTwo.travelText }}
        </p>

        <div class="mt-10 text-[12px] tracking-[0.18em] uppercase opacity-80">{{ data.templateTwo.travelHotelName }}</div>
        <div class="mt-2 text-[12px] tracking-[0.18em] uppercase opacity-70">
          {{ data.templateTwo.travelHotelAddress }}
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WeddingData } from '~/lib/wedding'
import { formatDateLong } from '~/lib/wedding'

const props = defineProps<{ data: WeddingData }>()

const dateLong = computed(() => formatDateLong(props.data.wedding.dateTimeLocal))
</script>
