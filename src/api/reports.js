import request from './request'

// 获取设备状态数据 ----> https://web.postman.co/workspace/graduate~b1a8a4f8-e59c-45e3-9147-3dc9db681a6f/request/6739793-f885867a-9a9e-4804-8632-9b84d2fc769a
export const fetchDeviceStatus = () => {
    return request({
        url: '/report/device'
    })
}

// 获取power -----> https://web.postman.co/workspace/graduate~b1a8a4f8-e59c-45e3-9147-3dc9db681a6f/request/6739793-7ff67dcc-6192-4c0a-b887-a437e3bd2fce
export const fetchDevicePower = () => {
    return request({
        url: '/report/power'
    })
}
