<template>
  <div>
    <div class="__volume_title">Volume 24H</div>
    <div class="__volume_val">${{ showValue }}</div>
    <div class="__volume_date">{{ showDate }}</div>
    <div ref="Volume" class="butterMap"></div>
  </div>
</template>

<script>
import Volume from './echartsOptions/volume'
export default {
  data() {
    return {
      showDate: '',
      showValue: ''
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      // TODO: Get the chain data through the API and demonstrate into icons
      let getApiJson = [
        { date: '2021-7-1', value: '30' },
        { date: '2021-7-2', value: '93' },
        { date: '2021-7-3', value: '90' },
        { date: '2021-7-4', value: '93' },
        { date: '2021-7-5', value: '129' },
        { date: '2021-7-6', value: '233' },
        { date: '2021-7-7', value: '532' },
        { date: '2021-7-8', value: '142' },
        { date: '2021-7-9', value: '243' },
        { date: '2021-7-10', value: '420' },
        { date: '2021-7-11', value: '383' },
        { date: '2021-7-12', value: '190' },
        { date: '2021-7-13', value: '320' },
        { date: '2021-7-14', value: '293' },
        { date: '2021-7-15', value: '590' },
        { date: '2021-7-16', value: '493' },
        { date: '2021-7-17', value: '329' },
        { date: '2021-7-18', value: '433' },
        { date: '2021-7-19', value: '432' },
        { date: '2021-7-20', value: '242' },
        { date: '2021-7-21', value: '643' },
        { date: '2021-7-22', value: '320' },
        { date: '2021-7-23', value: '483' },
        { date: '2021-7-24', value: '290' },
        { date: '2021-7-25', value: '130' },
        { date: '2021-7-26', value: '193' },
        { date: '2021-7-27', value: '90' },
        { date: '2021-7-28', value: '93' },
        { date: '2021-7-29', value: '129' },
        { date: '2021-7-30', value: '300' }
      ]
      let Dates = getApiJson.map(v => v.date)
      let values = getApiJson.map(v => v.value)
      // TODO: Get the chain data through the API and demonstrate into icons
      Volume.xAxis.data = Dates
      Volume.series[0].data = values
      var myChart = echarts.init(this.$refs.Volume)
      myChart.setOption(Volume)

      let latestData = getApiJson[getApiJson.length - 1]

      this.showDate = latestData.date
      this.showValue = latestData.value

      // 移动设置动态值
      let that = this
      myChart.on('highlight', function (params) {
        that.showDate = getApiJson[params.batch[0].dataIndex].date
        that.showValue = getApiJson[params.batch[0].dataIndex].value
      })

      // 鼠标移出选中最新数据
      myChart.on('globalout', function (params) {
        that.showDate = latestData.date
        that.showValue = latestData.value
      })
      window.addEventListener('resize', function () {
        myChart.resize()
      })

      this.$nextTick(() => {
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      })
    }
  }
}
</script>

<style scoped>
.butterMap {
  margin-bottom: 20px;
  height: 240px;
}

.__volume_title {
  font-size: 16px;
  color: #ff9901;
  font-weight: 600;
}
.__volume_val {
  color: #fe5e20;
  font-weight: 600;
  line-height: 1.5;
  font-size: 24px;
}
.__volume_date {
  color: #ff9901;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.butter_volume {
  height: 240px;
  width: 100%;
}
</style>