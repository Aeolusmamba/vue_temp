export const setChatData = (deviceStatus, devicePower) => {
    const powerChatData = { x: [], y: [] }
        const dengChatData = { x: [], y: [] }
        const lightChatData = { x: [], y: [] }
        const temChatData = { x: [], y: [] }
        const humidityChatData = { x: [], y: [] }
        // power data
        for (const power of devicePower) {
            powerChatData.x.push(power.xAxis)
            powerChatData.y.push(power.yAxis)
          }
          // other data
        const length = deviceStatus[0].length
        let flag = 0
        const dataSet = []
        while (flag < length) {
          const set = []
           for (const item of deviceStatus) {
             set.push(item[flag])
          }
          dataSet.push(set)
          flag++
        }
        for (const item of dataSet[0]) {
          dengChatData.x.push(item.xAxis)
          if (item.yAxis === 0) {
            dengChatData.y.push(item.yAxis - 1)
          } else {
            dengChatData.y.push(item.yAxis)
          }
        }
        for (const item of dataSet[1]) {
          lightChatData.x.push(item.xAxis)
          lightChatData.y.push(item.yAxis)
        }
        for (const item of dataSet[2]) {
          temChatData.x.push(item.xAxis)
          temChatData.y.push(item.yAxis)
        }
        for (const item of dataSet[3]) {
          humidityChatData.x.push(item.xAxis)
          humidityChatData.y.push(item.yAxis)
        }
        return {
            powerChatData,
            dengChatData,
            lightChatData,
            temChatData,
            humidityChatData
        }
}
