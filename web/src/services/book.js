import request from '@/utils/request'

export function bookInfo (data) {
  return request('/book/info', {
    method: 'GET',
    params: {
      ...data
    }
  })
}
