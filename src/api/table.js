import request from '@/utils/request'

export default function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
