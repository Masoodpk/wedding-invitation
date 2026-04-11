<template>
  <main class="app-shell px-6 py-12">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between gap-4">
        <h1 class="text-[clamp(28px,4vw,40px)] app-title m-0">Enter your details</h1>
        <button
          type="button"
          class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
          @click="draft = getDefaultDraft()"
        >
          Reset
        </button>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="app-card p-6">
          <div class="app-kicker text-[11px]">Couple</div>
          <label class="block mt-5 text-sm app-muted">
            Groom name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.couple.groom.name" />
          </label>
          <label class="block mt-4 text-sm app-muted">
            Groom details line
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.couple.groom.detailsLine" />
          </label>

          <label class="block mt-6 text-sm app-muted">
            Bride name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.couple.bride.name" />
          </label>
          <label class="block mt-4 text-sm app-muted">
            Bride details line
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.couple.bride.detailsLine" />
          </label>
        </div>

        <div class="app-card p-6">
          <div class="app-kicker text-[11px]">Wedding</div>
          <label class="block mt-5 text-sm app-muted">
            Wedding date & time
            <input type="datetime-local" class="mt-2 app-input px-3 py-2" v-model="draft.data.wedding.dateTimeLocal" />
          </label>
          <label class="block mt-4 text-sm app-muted">
            Tagline
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.wedding.tagline" />
          </label>
          <label class="block mt-4 text-sm app-muted">
            Hero image URL
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.wedding.heroImageUrl" />
          </label>
        </div>
      </div>

      <div class="mt-6 app-card p-6">
        <div class="app-kicker text-[11px]">Venue</div>
        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <label class="block text-sm app-muted">
            Venue name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.venue.name" />
          </label>
          <label class="block text-sm app-muted">
            Venue address
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.venue.address" />
          </label>
          <label class="block text-sm app-muted md:col-span-2">
            Google maps link
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.venue.mapUrl" />
          </label>
        </div>
      </div>

      <div class="mt-6 app-card p-6">
        <div class="app-kicker text-[11px]">Schedule</div>
        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <label class="block text-sm app-muted">
            Ceremony time
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.ceremony.time" />
          </label>
          <label class="block text-sm app-muted">
            Reception time
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.reception.time" />
          </label>
          <label class="block text-sm app-muted">
            Ceremony location name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.ceremony.locationName" />
          </label>
          <label class="block text-sm app-muted">
            Reception location name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.events.reception.locationName" />
          </label>
        </div>
      </div>

      <div class="mt-6 app-card p-6">
        <div class="app-kicker text-[11px]">Quote</div>
        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <label class="block text-sm app-muted md:col-span-2">
            Quote text
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.quote.text" />
          </label>
          <label class="block text-sm app-muted">
            Quote source
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.quote.source" />
          </label>
        </div>
      </div>

      <div class="mt-6 app-card p-6">
        <div class="app-kicker text-[11px]">Template Two</div>
        <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <label class="block text-sm app-muted md:col-span-2">
            Description paragraph
            <textarea class="mt-2 app-input px-3 py-2 min-h-[110px]" v-model="draft.data.templateTwo.description" />
          </label>
          <label class="block text-sm app-muted md:col-span-2">
            Travel text
            <textarea class="mt-2 app-input px-3 py-2 min-h-[90px]" v-model="draft.data.templateTwo.travelText" />
          </label>
          <label class="block text-sm app-muted">
            Hotel name
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.templateTwo.travelHotelName" />
          </label>
          <label class="block text-sm app-muted">
            Hotel address
            <input class="mt-2 app-input px-3 py-2" v-model="draft.data.templateTwo.travelHotelAddress" />
          </label>
        </div>
      </div>

      <div class="mt-10 flex items-center justify-end">
        <button
          type="button"
          class="app-btn app-btn-primary px-7 py-3"
          @click="saveAndContinue"
        >
          Continue
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft } from '~/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '~/lib/wedding'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: JSON.parse(JSON.stringify(defaultWeddingData)) as WeddingData,
  }
}

const router = useRouter()
const draft = ref<WeddingDraft>(getDefaultDraft())

onMounted(() => {
  const existing = loadDraft()
  if (existing) {
    draft.value = { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
  }
})

const saveAndContinue = () => {
  saveDraft(draft.value)
  router.push('/templates')
}
</script>
