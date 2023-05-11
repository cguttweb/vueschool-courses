import { useCycleList } from '@vueuse/core'
import { ref, computed } from 'vue'

export function useAppCycleList(list, options) {
  const direction = ref(null)
  const cycleList = useCycleList(list, options)

  const isForward = computed(() => direction.value === 'forward')
  const isBackward = computed(() => direction.value === 'backward')

  function next() {
    direction.value = 'forward'
    cycleList.next()
  }

  function prev() {
    direction.value = 'backward'
    cycleList.prev()
  }

  return {
    ...cycleList,
    next,
    prev,
  }
}
