import store from '../store/index'

export default function afterEach(to, from) {
  store.dispatch('route/after', { to, from })
  store.dispatch('route/loadingBefore', false)
}

