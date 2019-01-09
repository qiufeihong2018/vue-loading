import request from '@/utils/request'

// eslint-disable-next-line
export function getTotal(data) {
  return request({
    url: '/static/test.json',
    method: 'get',
    params: data
  })
}
