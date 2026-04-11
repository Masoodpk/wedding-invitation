<template>
  <main class="app-shell px-6 py-12">
    <div class="max-w-5xl mx-auto">
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="app-kicker text-[11px]">Step 2</div>
          <h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Choose a template</h1>
        </div>
        <NuxtLink
          to="/start"
          class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
        >
          Edit details
        </NuxtLink>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="templateId in templates" :key="templateId" class="app-card overflow-hidden">
          <div class="p-6">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="text-[14px] app-title">{{ templateLabel(templateId) }}</div>
                <div class="mt-2 text-[13px] app-muted">
                  {{ draft.data.couple.groom.name }} &amp; {{ draft.data.couple.bride.name }}
                </div>
              </div>
              <div
                :class="`px-3 py-1 rounded-full text-[11px] tracking-[0.18em] uppercase font-serif ${
                  draft.templateId === templateId ? 'bg-[color:var(--app-accent)] text-[color:var(--app-paper)]' : 'border border-[color:var(--app-border)] text-[color:var(--app-accent)]'
                }`"
              >
                {{ draft.templateId === templateId ? 'Selected' : ' ' }}
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-3">
              <NuxtLink
                :to="`/preview?templateId=${templateId}`"
                class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
              >
                Preview
              </NuxtLink>
              <button
                type="button"
                class="app-btn app-btn-primary px-5 py-2 text-[11px]"
                @click="choose(templateId)"
              >
                Choose
              </button>
            </div>
          </div>

          <div class="h-[160px] flex items-center justify-center border-t border-[color:var(--app-border)] bg-[rgba(247,241,232,0.6)]">
            <div class="text-center text-[11px] tracking-[0.22em] uppercase app-muted">Preview in new page</div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex items-center justify-end">
        <NuxtLink
          to="/checkout"
          class="app-btn app-btn-primary px-7 py-3"
          @click="saveDraft(draft)"
        >
          Continue
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft, WeddingTemplateId } from '~/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '~/lib/wedding'

const templates: WeddingTemplateId[] = ['template-1', 'template-2', 'template-3', 'template-4']

function templateLabel(id: WeddingTemplateId) {
  if (id === 'template-1') return 'Template One (Sketchy Modern)'
  if (id === 'template-2') return 'Template Two (Minimal)'
  if (id === 'template-3') return 'Template Three (White Editorial)'
  return 'Template Four (Hero RSVP)'
}

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: JSON.parse(JSON.stringify(defaultWeddingData)) as WeddingData,
  }
}

const draft = ref<WeddingDraft>(getDefaultDraft())

onMounted(() => {
  const existing = loadDraft()
  if (existing) {
    draft.value = { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
  }
})

function choose(templateId: WeddingTemplateId) {
  const next = { ...draft.value, templateId }
  draft.value = next
  saveDraft(next)
}
</script>
