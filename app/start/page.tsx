'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import defaultWeddingData from '@/data/defaultWeddingData.json'
import type { WeddingData, WeddingDraft } from '@/lib/wedding'
import { loadDraft, mergeDefaults, saveDraft } from '@/lib/wedding'

function getDefaultDraft(): WeddingDraft {
  return {
    templateId: 'template-1',
    paid: false,
    data: defaultWeddingData as WeddingData,
  }
}

export default function StartPage() {
  const router = useRouter()
  const [draft, setDraft] = useState<WeddingDraft>(() => getDefaultDraft())

  useEffect(() => {
    const existing = loadDraft()
    if (existing) setDraft({ ...existing, data: mergeDefaults(defaultWeddingData as WeddingData, existing.data) })
  }, [])

  const saveAndContinue = () => {
    saveDraft(draft)
    router.push('/templates')
  }

  return (
    <main className="app-shell px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-[clamp(28px,4vw,40px)] app-title m-0">Enter your details</h1>
          <button
            type="button"
            className="app-btn app-btn-secondary px-5 py-2 text-[11px]"
            onClick={() => setDraft(getDefaultDraft())}
          >
            Reset
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="app-card p-6">
            <div className="app-kicker text-[11px]">Couple</div>
            <label className="block mt-5 text-sm app-muted">
              Groom name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.couple.groom.name}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      couple: {
                        ...d.data.couple,
                        groom: { ...d.data.couple.groom, name: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block mt-4 text-sm app-muted">
              Groom details line
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.couple.groom.detailsLine}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      couple: {
                        ...d.data.couple,
                        groom: { ...d.data.couple.groom, detailsLine: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>

            <label className="block mt-6 text-sm app-muted">
              Bride name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.couple.bride.name}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      couple: {
                        ...d.data.couple,
                        bride: { ...d.data.couple.bride, name: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block mt-4 text-sm app-muted">
              Bride details line
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.couple.bride.detailsLine}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      couple: {
                        ...d.data.couple,
                        bride: { ...d.data.couple.bride, detailsLine: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
          </div>

          <div className="app-card p-6">
            <div className="app-kicker text-[11px]">Wedding</div>
            <label className="block mt-5 text-sm app-muted">
              Wedding date & time
              <input
                type="datetime-local"
                className="mt-2 app-input px-3 py-2"
                value={draft.data.wedding.dateTimeLocal}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: { ...d.data, wedding: { ...d.data.wedding, dateTimeLocal: e.target.value } },
                  }))
                }
              />
            </label>
            <label className="block mt-4 text-sm app-muted">
              Tagline
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.wedding.tagline}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: { ...d.data, wedding: { ...d.data.wedding, tagline: e.target.value } },
                  }))
                }
              />
            </label>
            <label className="block mt-4 text-sm app-muted">
              Hero image URL
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.wedding.heroImageUrl}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: { ...d.data, wedding: { ...d.data.wedding, heroImageUrl: e.target.value } },
                  }))
                }
              />
            </label>
          </div>
        </div>

        <div className="mt-6 app-card p-6">
          <div className="app-kicker text-[11px]">Venue</div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block text-sm app-muted">
              Venue name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.venue.name}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        venue: { ...d.data.events.venue, name: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Venue address
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.venue.address}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        venue: { ...d.data.events.venue, address: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted md:col-span-2">
              Google maps link
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.venue.mapUrl}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        venue: { ...d.data.events.venue, mapUrl: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
          </div>
        </div>

        <div className="mt-6 app-card p-6">
          <div className="app-kicker text-[11px]">Schedule</div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block text-sm app-muted">
              Ceremony time
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.ceremony.time}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        ceremony: { ...d.data.events.ceremony, time: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Reception time
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.reception.time}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        reception: { ...d.data.events.reception, time: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Ceremony location name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.ceremony.locationName}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        ceremony: { ...d.data.events.ceremony, locationName: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Reception location name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.events.reception.locationName}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      events: {
                        ...d.data.events,
                        reception: { ...d.data.events.reception, locationName: e.target.value },
                      },
                    },
                  }))
                }
              />
            </label>
          </div>
        </div>

        <div className="mt-6 app-card p-6">
          <div className="app-kicker text-[11px]">Quote</div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block text-sm app-muted md:col-span-2">
              Quote text
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.quote.text}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: { ...d.data, quote: { ...d.data.quote, text: e.target.value } },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Quote source
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.quote.source}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: { ...d.data, quote: { ...d.data.quote, source: e.target.value } },
                  }))
                }
              />
            </label>
          </div>
        </div>

        <div className="mt-6 app-card p-6">
          <div className="app-kicker text-[11px]">Template Two</div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block text-sm app-muted md:col-span-2">
              Description paragraph
              <textarea
                className="mt-2 app-input px-3 py-2 min-h-[110px]"
                value={draft.data.templateTwo.description}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      templateTwo: { ...d.data.templateTwo, description: e.target.value },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted md:col-span-2">
              Travel text
              <textarea
                className="mt-2 app-input px-3 py-2 min-h-[90px]"
                value={draft.data.templateTwo.travelText}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      templateTwo: { ...d.data.templateTwo, travelText: e.target.value },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Hotel name
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.templateTwo.travelHotelName}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      templateTwo: { ...d.data.templateTwo, travelHotelName: e.target.value },
                    },
                  }))
                }
              />
            </label>
            <label className="block text-sm app-muted">
              Hotel address
              <input
                className="mt-2 app-input px-3 py-2"
                value={draft.data.templateTwo.travelHotelAddress}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    data: {
                      ...d.data,
                      templateTwo: { ...d.data.templateTwo, travelHotelAddress: e.target.value },
                    },
                  }))
                }
              />
            </label>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end">
          <button
            type="button"
            className="app-btn app-btn-primary px-7 py-3"
            onClick={saveAndContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  )
}
