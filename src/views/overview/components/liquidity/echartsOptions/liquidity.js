export default {
  // title: {
  //   text: 'Liquidity',
  //   left: '10',
  //   top: '10',
  //   textStyle:{
  //     color: '#ff9901',
  //     fontFamily: 'Kanit, sans-serif',
  //   }
  // },

  tooltip: {
    trigger: 'axis',
    showContent:false,
    axisPointer:{
      lineStyle:{
        color: 'rgb(255, 153, 0)',
        width: 1,
        type: 'solid'
      },
    },
    triggerOn: 'mousemove'
  },
  grid: {
    left: '3%',
    top: '12%',
    bottom: '8%',
    right: '10%'
  },
  xAxis: {
    type: 'category',
    show: true,
    formatter: function (p) {
      return p.split('-')[2]
    },
    axisLabel: {
      show: true,
      fontSize: '12',
      textStyle: {
        color: 'rgba(44,62,80,.7)',
        fontFamily: 'Kanit, sans-serif',
      }
    },
    data: [],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    position: 'right',
    type: 'value',
    axisLabel: {
      show: true,
      formatter: '${value} Bn',
      textStyle: {
        color: 'rgba(255,153,1,.7)',
        fontFamily: 'Kanit, sans-serif',
      }
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      data: [],
      type: 'line',
      showSymbol: false,
      lineStyle: {
        width: 1,// 0.1的线条是非常细的了
        color: 'rgb(255, 153, 0)'
      },
      emphasis: {
        lineStyle: {
          width: 1,	// hover时的折线宽度
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(255, 153, 0)'
        },
      },
      areaStyle: { // 颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(255, 158, 68)'
        },
        {
          offset: 1,
          color: 'rgba(255, 225, 225,0.3)'
        }])
      }, 
      markPoint: {
        symbol: 'pin',
        data: [{ type: 'max', name: '最大值', label: { color: '#fff', fontSize: 10 } }]
      },
      smooth: true // 是否平滑曲线显示。
    }
  ]
}
