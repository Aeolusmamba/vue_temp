<template>
  <div class="reports">
    <div class="reports_sheet">
      <div id="reports_sheet_polyline_power"></div>
      <div class="chatCon">
        <div id="reports_sheet_polyline_deng"></div>
      <div id="reports_sheet_polyline_light"></div>
      <div id="reports_sheet_polyline_tem"></div>
      <div id="reports_sheet_polyline_humidity"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { fetchDeviceStatus, fetchDevicePower } from '../../api/reports'
/*eslint-disable*/
import { powerChatOption , dengChatOption ,lightChatOption ,temChatOption , humidityChatOption} from './reports.config'
import {setChatData} from "./utils"
  export default {
    setup() {
      onMounted(async () => {
        /*eslint-disable*/
        const powerChat = echarts.init(document.getElementById('reports_sheet_polyline_power'))
        const dengChat = echarts.init(document.getElementById('reports_sheet_polyline_deng'))
        const lightChat = echarts.init(document.getElementById('reports_sheet_polyline_light'))
        const temChat = echarts.init(document.getElementById('reports_sheet_polyline_tem'))
        const humidityChat = echarts.init(document.getElementById('reports_sheet_polyline_humidity'))
        const fetchData = async()=>{
          const deviceStatus = await fetchDeviceStatus()
        const devicePower = await fetchDevicePower()
        if(!deviceStatus || !devicePower) return
        const chatsData = setChatData(deviceStatus.reportList || [] , devicePower.powerList || [])
        const {dengChatData , powerChatData , lightChatData , temChatData , humidityChatData} = chatsData
        powerChatOption.xAxis.data = powerChatData.x
        powerChatOption.series[0].data = powerChatData.y
        powerChat.setOption(powerChatOption)
        dengChatOption.xAxis.data = dengChatData.x
        dengChatOption.series[0].data = dengChatData.y
        dengChat.setOption(dengChatOption)
        lightChatOption.xAxis.data = lightChatData.x
        lightChatOption.series[0].data = lightChatData.y
        lightChat.setOption(lightChatOption)
        temChatOption.xAxis.data = temChatData.x
        temChatOption.series[0].data = temChatData.y
        temChat.setOption(temChatOption)
        humidityChatOption.series[0].data[0].value = humidityChatData.y.pop()
        humidityChat.setOption(humidityChatOption)
        }
        await fetchData()
        setInterval(async() => {
          await fetchData()
        }, 2000);
      })
    }
  }
</script>

<style lang="scss" scoped>
.reports{
  .reports_sheet{
    #reports_sheet_polyline_power{
      width: 800px;
      height: 300px;
    }
    .chatCon{
      width: 1000px;
      height: 1000px;
      display: flex;
      flex-wrap:wrap;
      flex: 1;
      justify-content: space-between;
      #reports_sheet_polyline_light , #reports_sheet_polyline_tem , #reports_sheet_polyline_deng , #reports_sheet_polyline_humidity{
        width: 500px;
        height: 400px;
        padding: 0px 40px;
    }
    }
  }
}
</style>
