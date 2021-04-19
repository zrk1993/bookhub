import request from '@/utils/request'

export function getAppearance (data) {
  return request('/reader/appearance', {
    method: 'GET',
    params: {
      ...data
    }
  })
}
