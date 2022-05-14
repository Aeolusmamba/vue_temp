import request from './request'

export const getUser = (params) => {
  return request({
    url: '/user/users', // /user/users
    params
  })
}

export const addUser = (data) => {
  return request({
    url: '/user/addUser',
    method: 'post',
    data
  })
}

export const editUser = (data) => {
  return request({
    url: `/user/${data.id}/editUser`,
    method: 'put',
    data
  })
}

export const deleteUser = (id) => {
  return request({
    url: `/user/${id}/deleteUser`,
    method: 'delete'
  })
}
