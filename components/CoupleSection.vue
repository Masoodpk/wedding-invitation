<template>
  <section class="reveal py-8 px-4 pb-[clamp(4rem,8vw,6rem)] max-w-[1100px] mx-auto text-center" id="couple">
    <div class="mb-16">
      <h2 class="text-[clamp(3rem,7vw,5rem)] text-text m-0 leading-none font-script">{{ heading }}</h2>
      <div class="flex items-center justify-center gap-6 mt-4 text-accent text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em] uppercase font-serif">
        <span class="flex-none w-[60px] h-px bg-accent opacity-40" />
        <p>{{ subheading }}</p>
        <span class="flex-none w-[60px] h-px bg-accent opacity-40" />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-8 relative">
      <!-- Groom -->
      <article class="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
        <div class="w-full text-center">
          <p class="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">• THE GROOM</p>
          <h4 class="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
            {{ groomFirst }}
            <template v-if="groomRest.length > 0">
              <br />
              {{ groomRest.join(' ') }}
            </template>
          </h4>
          <p class="text-muted text-[0.95rem] m-0 font-body italic">{{ groomDetailsLine }}</p>
        </div>
      </article>

      <div class="flex items-center justify-center px-4 md:px-0 max-lg:-my-4 z-[3]">
        <div class="flex items-center justify-center text-[1.5rem] md:text-[3rem] text-accent bg-bg z-[2] font-script">&amp;</div>
      </div>

      <!-- Bride -->
      <article class="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
        <div class="w-full text-center">
          <p class="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">THE BRIDE •</p>
          <h4 class="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
            {{ brideFirst }}
            <template v-if="brideRest.length > 0">
              <br />
              {{ brideRest.join(' ') }}
            </template>
          </h4>
          <p class="text-muted text-[0.95rem] m-0 font-body italic">{{ brideDetailsLine }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  groomName: string
  groomDetailsLine: string
  brideName: string
  brideDetailsLine: string
  heading: string
  subheading: string
}>()

const groomFirst = computed(() => props.groomName.trim().split(/\s+/)[0])
const groomRest = computed(() => props.groomName.trim().split(/\s+/).slice(1))

const brideFirst = computed(() => props.brideName.trim().split(/\s+/)[0])
const brideRest = computed(() => props.brideName.trim().split(/\s+/).slice(1))
</script>
