import request from '@/utils/request'

export function bookInfo (data) {
  return request('/book/info', {
    method: 'GET',
    params: {
      ...data
    }
  })
}

export function bookshelfList (data) {
  return request('/book/list', {
    method: 'GET',
    params: {
      ...data
    }
  })
}

export function removeBook (data) {
  return request('/book/remove', {
    method: 'POST',
    data: {
      ...data
    }
  })
}
