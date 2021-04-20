import request from '@/utils/request'

export function getAppearance (data) {
  return request('/reader/appearance', {
    method: 'GET',
    params: {
      ...data
    }
  })
}

export function setAppearance (data) {
  return request('/reader/appearance/up', {
    method: 'POST',
    data: {
      ...data
    }
  })
}

export function getProgress (data) {
  return request('/reader/progress', {
    method: 'GET',
    params: {
      ...data
    }
  })
}

export function setProgress (data) {
  return request('/reader/progress/up', {
    method: 'POST',
    data: {
      ...data
    }
  })
}

