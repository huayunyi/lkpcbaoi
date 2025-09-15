import { computed } from 'vue'
import { useRoute } from 'vue-router'
import homeConfig from '../config/homeConfig.js'

export function usePageName() {
  const route = useRoute()
  const pageName = computed(() => {
    const path = route.path
    for (const group of homeConfig.lists) {
      const btn = group.buttons.find(b => b.path === path)
      if (btn) return btn.name
    }
    return ''
  })
  return pageName
}
