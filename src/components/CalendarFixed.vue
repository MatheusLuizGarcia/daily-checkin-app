<template>
  <div class="max-w-sm mx-auto p-4 rounded-lg shadow">
    <header class="mb-3 text-center">
      <h3 class="text-lg font-semibold">{{ monthYearLabel }}</h3>
    </header>

    <div class="grid grid-cols-7 gap-1 text-center">
      <div
        v-for="(wd, i) in weekdayLabels"
        :key="i"
        class="text-xs font-medium text-gray-600"
      >
        {{ wd }}
      </div>

      <div
        v-for="(cell, idx) in calendarCells"
        :key="idx"
        class="h-10 flex items-center justify-center rounded-md"
        :class="cellClass(cell)"
      >
        <span class="select-none" :class="cellTextClass(cell)">{{ cell.day }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  highlightDates?: string[]
}>()

const now = new Date()
const todayY = now.getFullYear()
const todayM = now.getMonth()
const todayD = now.getDate()

const firstOfMonth = new Date(todayY, todayM, 1)
const daysInMonth = new Date(todayY, todayM + 1, 0).getDate()
const firstWeekday = firstOfMonth.getDay()

const locale = navigator?.language || 'pt-BR'

const weekdayLabels = Array.from({ length: 7 }, (_, i) =>
  new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(new Date(2021, 7, i + 1))
)

const monthYearLabel = new Intl.DateTimeFormat(locale, {
  month: 'long',
  year: 'numeric'
}).format(firstOfMonth)

const normalizedHighlights = computed(() =>
  (props.highlightDates || []).map((d) => {
    const parts = d.split('-').map(Number)
    return new Date(parts[0]!, parts[1]! - 1, parts[2]!).toDateString()
  })
)

const calendarCells = computed(() => {
  const cells: any[] = []

  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: '', type: 'blank' })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const currentDate = new Date(todayY, todayM, d)
    const dateStr = currentDate.toDateString()

    cells.push({
      day: d,
      type: 'current',
      isToday: d === todayD,
      isHighlighted: normalizedHighlights.value.includes(dateStr)
    })
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: '', type: 'blank' })
  }

  return cells
})

function cellClass(cell: any) {
  if (cell.type === 'blank') return 'bg-transparent'
  if (cell.isToday) return 'bg-blue-600'
  if (cell.isHighlighted) return 'bg-yellow-400'
  return 'bg-transparent hover:bg-gray-100'
}

function cellTextClass(cell: any) {
  if (cell.type === 'blank') return 'text-gray-300'
  if (cell.isToday) return 'text-white font-semibold'
  if (cell.isHighlighted) return 'text-gray-800 font-medium'
  return 'text-gray-700'
}
</script>
