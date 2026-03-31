export type WeddingTemplateId = 'template-1' | 'template-2' | 'template-3' | 'template-4'

export type WeddingDraft = {
  templateId: WeddingTemplateId
  paid: boolean
  data: WeddingData
}

export type PublishedSite = {
  slug: string
  templateId: WeddingTemplateId
  publishedAtIso: string
  data: WeddingData
}

export type WeddingData = {
  couple: {
    bride: {
      name: string
      detailsLine: string
    }
    groom: {
      name: string
      detailsLine: string
    }
  }
  wedding: {
    dateTimeLocal: string
    heroImageUrl: string
    tagline: string
    basmala: string
    musicUrl: string
  }
  quote: {
    text: string
    source: string
  }
  events: {
    ceremony: {
      title: string
      time: string
      dateText: string
      locationName: string
    }
    reception: {
      title: string
      time: string
      dateText: string
      locationName: string
    }
    venue: {
      title: string
      name: string
      address: string
      mapUrl: string
      ctaLabel: string
    }
  }
  templateTwo: {
    topLeftText: string
    topRightCtaLabel: string
    description: string
    heroImageUrl: string
    primaryCtaLabel: string
    travelHeading: string
    travelText: string
    travelHotelName: string
    travelHotelAddress: string
  }
  templateThree: {
    headerText: string
    topLinks: string[]
    rsvpLabel: string
    galleryImages: string[]
    scheduleHeading: string
    scheduleSubheading: string
    scheduleItems: Array<{ time: string; label: string }>
    locationHeading: string
    locationLeftText: string
    locationRightText: string
    locationImageUrl: string
    locationCtaLabel: string
    countdownBackgroundUrl: string
    registryHeading: string
    registryText: string
    dressCodeHeading: string
    dressCodeText: string
  }
  templateFour: {
    headerText: string
    navItems: string[]
    heroImageUrl: string
    heroKicker: string
    heroTitle: string
    heroDateText: string
    welcomeKicker: string
    welcomeHeading: string
    welcomeText: string
    galleryImages: string[]
    primaryCtaLabel: string
  }
}

const DRAFT_KEY = 'wedding:draft:v1'
const PUBLISHED_KEY = 'wedding:published:v1'

export function isBrowser() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
}

export function mergeDefaults<T>(defaults: T, value: unknown): T {
  if (Array.isArray(defaults)) {
    return (Array.isArray(value) ? (value as unknown as T) : defaults) as T
  }

  if (defaults && typeof defaults === 'object') {
    const incoming = value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
    const out: Record<string, unknown> = {}
    for (const key of Object.keys(defaults as Record<string, unknown>)) {
      out[key] = mergeDefaults(
        (defaults as Record<string, unknown>)[key],
        (incoming as Record<string, unknown>)[key]
      )
    }
    return out as T
  }

  return (value === undefined ? defaults : (value as T)) as T
}

export function getFirstName(fullName: string) {
  const trimmed = fullName.trim()
  if (!trimmed) return ''
  return trimmed.split(/\s+/)[0] ?? trimmed
}

export function toDateOrNull(dateTimeLocal: string) {
  const d = new Date(dateTimeLocal)
  return Number.isNaN(d.getTime()) ? null : d
}

function parseLocalDatePart(dateTimeLocal: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim())
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null
  if (month < 1 || month > 12) return null
  if (day < 1 || day > 31) return null
  return { year, month, day }
}

export function formatDateLong(dateTimeLocal: string) {
  const parsed = parseLocalDatePart(dateTimeLocal)
  if (!parsed) return ''
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthName = months[parsed.month - 1] ?? ''
  return `${monthName} ${parsed.day}, ${parsed.year}`
}

export function formatDateParts(dateTimeLocal: string) {
  const parsed = parseLocalDatePart(dateTimeLocal)
  if (!parsed) {
    return {
      day: '',
      month: '',
      year: '',
      weekday: '',
    }
  }

  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ]
  const weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  const day = String(parsed.day).padStart(2, '0')
  const month = months[parsed.month - 1] ?? ''
  const year = String(parsed.year)
  const weekdayIndex = new Date(Date.UTC(parsed.year, parsed.month - 1, parsed.day)).getUTCDay()
  const weekday = weekdays[weekdayIndex] ?? ''

  return { day, month, year, weekday }
}

export function loadDraft(): WeddingDraft | null {
  if (!isBrowser()) return null
  const raw = localStorage.getItem(DRAFT_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as WeddingDraft
  } catch {
    return null
  }
}

export function saveDraft(draft: WeddingDraft) {
  if (!isBrowser()) return
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
}

export function clearDraft() {
  if (!isBrowser()) return
  localStorage.removeItem(DRAFT_KEY)
}

export function loadPublishedSites(): Record<string, PublishedSite> {
  if (!isBrowser()) return {}
  const raw = localStorage.getItem(PUBLISHED_KEY)
  if (!raw) return {}
  try {
    return JSON.parse(raw) as Record<string, PublishedSite>
  } catch {
    return {}
  }
}

export function loadPublishedSite(slug: string): PublishedSite | null {
  const sites = loadPublishedSites()
  return sites[slug] ?? null
}

export function savePublishedSite(site: PublishedSite) {
  if (!isBrowser()) return
  const sites = loadPublishedSites()
  sites[site.slug] = site
  localStorage.setItem(PUBLISHED_KEY, JSON.stringify(sites))
}

export function normalizeSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '')
}

export function isValidSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}
