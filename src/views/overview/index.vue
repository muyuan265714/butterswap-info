<template>
  <div class="overview">
    <p class="title">ButterSwap Info & Analytics</p>
    <div class="overBox clearfix">
      <Liquidity />
      <Volume />
    </div>
    <p class="title">Top Tokens</p>
    <div class="clearfix">
      <TopTokens />
    </div>
    <p class="title">Top Pools</p>
    <div class="clearfix">
      <TopPools />
    </div>
  </div>
</template>

<script>
import Liquidity from './components/liquidity/index'
import Volume from './components/volume/index'
import TopTokens from './components/topTokens/index'
import TopPools from './components/topPools/index'
export default {
  name: 'overview',
  components: { Liquidity, Volume, TopTokens, TopPools },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
    setLiquidity() {}
  }
}
</script>
<style lang="less" scoped>
.title {
  font-size: 24px;
  padding: 12px 0 12px 6px;
  font-family: Kanit, sans-serif;
}
.overview {
  width: 72%;
  margin: auto;
  padding: 20px 0 0 0;
  text-align: left;
  .overBox {
    margin-right: -2%;
  }
  .butter-card {
    float: left;
    width: 49%;
    margin: 0 0.5%;
  }
}
</style>