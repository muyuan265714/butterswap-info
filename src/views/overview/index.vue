<template>
  <div class="overview container">
    <div class="overBox clearfix">
      <p class="title">ButterSwap Info & Analytics</p>
      <Liquidity />
      <Volume />
    </div>
    <TopTokens />
    <TopPools />
    <Transactions />
  </div>
</template>

<script>
import Liquidity from './components/liquidity/index'
import Volume from './components/volume/index'
import TopTokens from './components/topTokens/index'
import TopPools from './components/topPools/index'
import Transactions from './components/transactions/index'
export default {
  name: 'overview',
  components: { Liquidity, Volume, TopTokens, TopPools, Transactions },
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
.overview {
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