<template>
  <div class="connect">
    <div class="connect_con">
      <div class="connect_img"></div>
      <div class="connect_status">
        <div class="status_header">
          设备运行状态
        </div>
        <div :class="{
          'contaier':true,
          'connect_is_off':!maStatus.connected,
          'connect_is_on': maStatus.connected,
        }">硬件已{{
          maStatus.connected ? '连接':"断开"
        }}</div>
        <div :class="{
          'contaier':true,
          'pop_btn':true,
          'pop_is_on': maStatus.opened,
        }">灯泡已{{
          maStatus.opened ? '连接':"断开"
        }}</div>
        <div :class="{
          'contaier':true,
          'active_time':true,
        }">今日开启次数{{
          maStatus.times
        }}</div>
      </div>
      <div class="connect_action">
        <div class="status_header">
          设备控制
        </div>
        <div class="contaier">
          远程控制模式
          <el-switch
            v-bind:value="store.getters.remote"
            @input="(e)=>modelOnHandle(e, 'remote')"
            active-color="#13ce66"
            inactive-color="#ccc"
            :disabled="!maStatus.connected"
          />
        </div>
        <div class="contaier">
          {{maStatus.opened?'关':'开'}}灯
          <el-switch
            v-bind:value="Boolean(maStatus.opened)"
            @input="(e)=>modelOnHandle(e, 'opened')"
            active-color="#13ce66"
            inactive-color="#ccc"
            :disabled="!maStatus.connected || !store.getters.remote"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { connectStatus, connectAction } from '../../api/connent.ts'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
let timer = null
const store = useStore()
/*eslint-disable*/
const modelOnHandle = async (e , type)=>{
  let command = 0
  if(type === 'remote'){
    if(e){
      command = 1
      store.commit('app/remoteSetting' , true)
      clearInterval(timer)
    }else{
      command = 0
      store.commit('app/remoteSetting' , false)
      createTimer()
    }
  }else if(type === 'opened'){
    if(e){
      command = 3
    }else{
      command = 2
    }
  }
  const res = await connectAction(command)
  if(res){
    const keys = Object.keys(res)
    for(let key  of keys){
      maStatus.value[key] = res[key]
    }
  }
}
const maStatus = ref({
        connected: false,     //硬件是否连接
        opened: false,
        times: 0,
        remote: store.getters.remote
      })
const createTimer =  async ()=>{
  if(timer) clearInterval(timer)
  timer = setInterval(async()=>{
        const status = await connectStatus()
        if(!status) return
        const keys = Object.keys(status)
        for(let key  of keys){
          maStatus.value[key] = status[key]
        }
      },1000)
}     
onMounted(async () => {
      createTimer()
    })
</script>

<style lang="scss" scoped>
.connect{
  width: 1000px;
  height: 500px;
  padding: 80px 50px;
  margin: auto auto;
  .connect_con{
    display: flex;
    justify-content: space-between;
    .connect_img{
      width: 320px;
      background-image: url(../../assets/illustration.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .connect_status , .connect_action{
      width: 230px;
      height: auto;
      border: 1px solid black;
      .status_header{
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #000;
        border-bottom: 2px solid black;
      }
      .contaier{
        width: 170px;
        margin: 15px 24px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border: 1px solid #ccc;
      }
    }
    .connect_status{
      color: #fff;
      .connect_is_off{
        background-color: #708090;
      }
      .connect_is_on{
        background-color: #1E90FF;
      }
      .pop_btn{
        background-color: #708090;
      }
      .pop_is_on{
        background-color: #DB7093;
      }
      .active_time{
        background-color: #FFA500;
      }
    }
    .connect_action{
      .contaier{
        text-align:justify ;
        border: 0px solid transparent;
      }
    }
  }
}
</style>
