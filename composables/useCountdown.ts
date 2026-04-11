import { ref, onMounted, onUnmounted } from 'vue'

function formatUnit(value: number): string {
  return String(value).padStart(2, '0')
}

export function useCountdown(dateISO: string) {
  const time = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    arrived: false,
  })

  let id: ReturnType<typeof setInterval>

  onMounted(() => {
    const targetTime = new Date(dateISO).getTime()
    const getTimeLeft = () => {
      const diff = targetTime - Date.now()
      if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00', arrived: true }
      return {
        days: formatUnit(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: formatUnit(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: formatUnit(Math.floor((diff / (1000 * 60)) % 60)),
        seconds: formatUnit(Math.floor((diff / 1000) % 60)),
        arrived: false,
      }
    }

    time.value = getTimeLeft()
    id = setInterval(() => {
      time.value = getTimeLeft()
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(id)
  })

  return time
}
