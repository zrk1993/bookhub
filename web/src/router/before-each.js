import store from '../store/index'

export default function beforeEach(to, from) {
  store.dispatch('route/before', { to, from })
  store.dispatch('route/loadingBefore', true)
}
