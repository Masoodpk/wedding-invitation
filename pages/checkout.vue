<template>
  <main class="app-shell px-6 py-12">
    <div class="max-w-xl mx-auto">
      <div class="app-kicker text-[11px]">Step 3</div>
      <h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Checkout (dummy)</h1>

      <div class="mt-8 app-card p-6">
        <div class="text-[14px] app-title">Order summary</div>
        <div class="mt-4 text-[13px] app-muted">
          Template: <span class="text-[color:var(--app-ink)]">{{ draft.templateId }}</span>
        </div>
        <div class="mt-2 text-[13px] app-muted">
          Couple:
          <span class="text-[color:var(--app-ink)]">
            {{ draft.data.couple.groom.name }} &amp; {{ draft.data.couple.bride.name }}
          </span>
        </div>
        <div class="mt-2 text-[13px] app-muted">
          Price: <span class="text-[color:var(--app-ink)]">$0.00</span>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between gap-4">
        <NuxtLink
          to="/templates"
          class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
        >
          Back
        </NuxtLink>
        <button
          type="button"
          class="app-btn app-btn-primary px-7 py-3"
          @click="pay"
        >
          Pay & Continue
        </button>
      </div>

      <div v-if="draft.paid" class="mt-6 text-[13px] app-muted">Already paid. Continue to publish.</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft } from '~/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '~/lib/wedding'

const router = useRouter()

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

const draft = ref<WeddingDraft>(getDefaultDraft())

onMounted(() => {
  const existing = loadDraft()
  if (existing) {
    draft.value = { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
  }
})

const pay = () => {
  saveDraft({ ...draft.value, paid: true })
  router.push('/publish')
}
</script>
