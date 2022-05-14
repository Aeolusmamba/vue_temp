import request from './request'

export const login = (data) => {
  return request({
    url: '/user/login', // /login  /user/login
    method: 'POST',
    data
  })
}
