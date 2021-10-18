import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export const getPositionEffect = () => {
  const store = useStore()
  const position = computed(() => {
    store.getters.Address
    if ( store.getters.Address ) {
      return store.getters.Address
    } else {
      store.dispatch('Position/setWarp')
      store.dispatch('Position/setPosition')
      return store.getters.Address || '加载中'
    }
})
  return { position }
}