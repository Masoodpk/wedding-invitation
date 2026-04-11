<template>
  <main class="app-shell px-6 py-12">
    <div class="max-w-xl mx-auto">
      <div class="app-kicker text-[11px]">Step 4</div>
      <h1 class="mt-2 text-[clamp(28px,4vw,40px)] app-title">Publish</h1>

      <div v-if="!draft.paid" class="mt-6 app-card p-5 text-[13px] app-muted">
        Payment is required before publishing.
      </div>

      <div class="mt-8 app-card p-6">
        <div class="text-[14px] app-title">Choose a subdomain (slug)</div>
        <label class="block mt-4 text-sm app-muted">
          Slug
          <input
            class="mt-2 app-input px-3 py-2"
            placeholder="e.g. ayisha-naji"
            v-model="slugInput"
          />
        </label>
        <div class="mt-3 text-[12px] app-muted">
          Preview link: <span class="text-[color:var(--app-ink)]">/s?slug={{ slug || 'your-slug' }}</span>
        </div>
        <div v-if="slugInput && !isValidSlugValue" class="mt-3 text-[12px] text-[color:var(--app-accent)]">
          Use letters, numbers, and hyphens only.
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between gap-4">
        <NuxtLink
          to="/checkout"
          class="app-btn app-btn-secondary px-5 py-2 text-[11px]"
        >
          Back
        </NuxtLink>
        <button
          type="button"
          :class="`app-btn px-7 py-3 ${
            canPublish ? 'app-btn-primary' : 'border border-[color:var(--app-border)] text-[color:rgba(36,28,26,0.35)] cursor-not-allowed'
          }`"
          @click="publish"
          :disabled="!canPublish"
        >
          Publish
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import defaultWeddingData from '~/data/defaultWeddingData.json'
import type { PublishedSite, WeddingData, WeddingDraft } from '~/lib/wedding'
import { isValidSlug, loadDraft, mergeDefaults, normalizeSlug, savePublishedSite } from '~/lib/wedding'

const router = useRouter()

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

const draft = ref<WeddingDraft>(getDefaultDraft())
const slugInput = ref('')

onMounted(() => {
  const existing = loadDraft()
  if (existing) {
    draft.value = { ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) }
  }
})

const slug = computed(() => normalizeSlug(slugInput.value))
const isValidSlugValue = computed(() => isValidSlug(slug.value))
const canPublish = computed(() => draft.value.paid && isValidSlugValue.value)

const publish = () => {
  if (!canPublish.value) return
  const site: PublishedSite = {
    slug: slug.value,
    templateId: draft.value.templateId,
    publishedAtIso: new Date().toISOString(),
    data: draft.value.data,
  }
  savePublishedSite(site)
  router.push(`/s?slug=${encodeURIComponent(slug.value)}`)
}
</script>
