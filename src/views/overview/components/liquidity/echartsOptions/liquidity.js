export default {
  title: {
    text: 'Liquidity',
    fontFamily: ' Kanit, sans-serif',
    left: '10',
    top: '10'
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b} : {c}'
  },
  grid: {
    left: '60px',
    top: '80px',
    bottom: '40px',
    right: '40px'
  },
  xAxis: {
    type: 'category',
    show: true,
    formatter: function (p) {
      return p.split('-')[2]
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
    type: 'value',
    axisLabel: { formatter: '{value} Bn' }
  },
  series: [
    {
      data: [],
      type: 'line',
      lineStyle: {
        color: 'rgb(255, 153, 0)'
      },
      itemStyle: {
        normal: {
          color: 'rgb(255, 153, 0)'
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
