<template>
  <div class="overview">
    <p class="title">ButterSwap Info & Analytics</p>
    <Liquidity />
    <el-card class="butter-card"></el-card>
  </div>
</template>

<script>
import Liquidity from './components/liquidity/liquidity.vue'
export default {
  name: 'overview',
  components: { Liquidity },
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
  padding: 0px 0 12px 0;
}
.overview {
  width: 70%;
  margin: auto;
  padding: 20px 0 0 0;
  text-align: left;
  .butter-card {
    display: inline-block;
    width: 48%;
    margin-right: 2%;
  }
}
</style>