function mergeDefaults(defaults, value) {
  if (Array.isArray(defaults)) {
    return Array.isArray(value) ? value : defaults;
  }
  if (defaults && typeof defaults === "object") {
    const incoming = value && typeof value === "object" ? value : {};
    const out = {};
    for (const key of Object.keys(defaults)) {
      out[key] = mergeDefaults(
        defaults[key],
        incoming[key]
      );
    }
    return out;
  }
  return value === void 0 ? defaults : value;
}
function getFirstName(fullName) {
  const trimmed = fullName.trim();
  if (!trimmed) return "";
  return trimmed.split(/\s+/)[0] ?? trimmed;
}
function parseLocalDatePart(dateTimeLocal) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;
  return { year, month, day };
}
function formatDateLong(dateTimeLocal) {
  const parsed = parseLocalDatePart(dateTimeLocal);
  if (!parsed) return "";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthName = months[parsed.month - 1] ?? "";
  return `${monthName} ${parsed.day}, ${parsed.year}`;
}
function formatDateParts(dateTimeLocal) {
  const parsed = parseLocalDatePart(dateTimeLocal);
  if (!parsed) {
    return {
      day: "",
      month: "",
      year: "",
      weekday: ""
    };
  }
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
  ];
  const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const day = String(parsed.day).padStart(2, "0");
  const month = months[parsed.month - 1] ?? "";
  const year = String(parsed.year);
  const weekdayIndex = new Date(Date.UTC(parsed.year, parsed.month - 1, parsed.day)).getUTCDay();
  const weekday = weekdays[weekdayIndex] ?? "";
  return { day, month, year, weekday };
}
function saveDraft(draft) {
  return;
}
function loadPublishedSites() {
  return {};
}
function loadPublishedSite(slug) {
  const sites = loadPublishedSites();
  return sites[slug] ?? null;
}
function normalizeSlug(input) {
  return input.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-/, "").replace(/-$/, "");
}
function isValidSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export { formatDateParts as a, formatDateLong as f, getFirstName as g, isValidSlug as i, loadPublishedSite as l, mergeDefaults as m, normalizeSlug as n, saveDraft as s };
//# sourceMappingURL=wedding-DB1Sg7gL.mjs.map
