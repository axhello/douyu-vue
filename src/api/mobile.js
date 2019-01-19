import request from '@/utils/request'

// home/mix
export function home(data) {
  return request({
    url: '/home/mix',
    method: 'get',
    params: data || {}
  })
}

// recList?cid=&ct=
export function recList(data) {
  return request({
    url: '/cate/recList',
    method: 'get',
    params: data || {}
  })
}

// cate?type=
export function category(data) {
  return request({
    url: '/cate/list',
    method: 'get',
    params: data || {}
  })
}

// room?page=1&type=xxx
export function rooms(data) {
  return request({
    url: '/room/list',
    method: 'get',
    params: data || {}
  })
}
