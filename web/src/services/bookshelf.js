import request from '@/utils/request'

export function bookshelfList (data) {
  return request('/bookshelf/list', {
    method: 'GET',
    params: {
      ...data
    }
  })
}
