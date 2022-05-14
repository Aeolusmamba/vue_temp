export const powerChatOption = {
  title: {
    text: '用电量'
  },
    xAxis: {
      data: []
    },
    yAxis: {
      name: '10^(-5)kw*h'
    },
    series: [
      {
        type: 'bar',
        data: [100, 100, 100, 100]
      }
    ]
  }

  export const dengChatOption = {
    title: {
      text: '灯泡状态'
    },
    xAxis: {
      data: []
    },
    yAxis: {
      name: '-1关灯,1开灯'
    },
    series: [
      {
        type: 'scatter',
        data: [],
        itemStyle: {
          normal: {
            color: '#32CD32'
          }
        }
      }
    ]
  }

  export const lightChatOption = {
    title: {
      text: '光照强度'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value',
      name: 'LX'
    },
    series: [
      {
        data: [],
        type: 'line',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#FFD700'
            }
          }
        }
      }
    ]
  }
  export const temChatOption = {
    title: {
      text: '温度'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value',
      name: '°C'
    },
    series: [
      {
        data: [],
        type: 'line',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#BA55D3'
            }
          }
        }
      }
    ]
  }

  export const humidityChatOption = {
    title: {
      text: '湿度'
    },
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 20,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#999',
          fontSize: 20
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 60,
          fontWeight: 'bolder',
          formatter: '{value} %',
          color: 'auto'
        },
        data: [
          {
            value: 20
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 20
          }
        ]
      }
    ]
  }
