import request from './request'

export const menuList = () => {
  return request({
    url: '/user/menus' // /menus  /user/menus
  })
}
