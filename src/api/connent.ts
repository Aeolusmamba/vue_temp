import request from './request.js'

//获取状态
export const connectStatus = () => {
    return request({
      url: '/lamp/connect' 
    })
  }
  
  // 按钮触发开关
  export const connectAction = (command)=>{
    return request({
        url: `lamp/control?command=${command}` ,
      })
  }