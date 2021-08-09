export default {
  // title: {
  //   text: 'Volume 24H',
  //   fontFamily: ' Kanit, sans-serif',
  //   left: '10',
  //   top: '10'
  // },

  tooltip: {
    trigger: 'axis',
    showContent:false,
    axisPointer:{
      type: 'shadow',
      shadowStyle:{
        color: '#cccccc4d',
      }
    
    },
    triggerOn: 'mousemove'
  },
  grid: {
    left: '3%',
    top: '12%',
    bottom: '8%',
    right: '5%'
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
    splitLine: {
      show: false
    },
    position: 'right',
    type: 'value',
    axisLabel: {
      show: true,
      formatter: '{value} M',
      textStyle: {
        color: 'rgba(255,153,1,.7)',
        fontFamily: 'Kanit, sans-serif',
      }
    },
  },
  series: [
    {
      data: [],
      type: 'bar',
      lineStyle: {
        color: 'rgb(255, 153, 0)'
      },
      itemStyle: {
        normal: {
          color: 'rgb(255, 153, 0)',
          barBorderRadius:[15, 15, 15, 15]
        }
      },
      markPoint: {
        symbol: 'pin',
        data: [{ type: 'max', name: '最大值', label: { color: '#fff', fontSize: 10 } }]
      },
      smooth: true
    }
  ]
}
