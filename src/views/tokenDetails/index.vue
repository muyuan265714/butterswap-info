<template>
  <div class="details container">
    <div>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Overview</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/tokens' }">Tokens</el-breadcrumb-item>
        <el-breadcrumb-item>{{ token }}</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="flr">
        <el-link type="primary">
          View on Heco
          <i class="el-icon-view el-icon-position"></i>
        </el-link>
        <i style="color: #f90" @click="watch" :class="(isWatch ? 'el-icon-star-on' : 'el-icon-star-off') + ' star'"></i>
      </span>
    </div>
    <el-row>
      <el-col :span="16">
        <p class="tokenName">{{ tokenDetail.name }}</p>
        <p class="tokenPrice">
          $0.16
          <span class="increase">↑8.37%</span>
        </p>
      </el-col>
      <el-col :span="8">
        <div class="operation">
          <el-button type="primary" plain>Add Liquidity</el-button>
          <el-button type="primary">Trade</el-button>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-tabs v-model="activeTabs" type="border-card">
        <el-tab-pane class="xxx" label="Volume" name="Volume">
          <Volume v-if="activeTabs == 'Volume'" />
        </el-tab-pane>
        <el-tab-pane label="Liquidity" name="Liquidity"><Liquidity v-if="activeTabs == 'Liquidity'" /></el-tab-pane>
        <!-- <el-tab-pane label="Price" name="Price">Price</el-tab-pane> -->
      </el-tabs>
    </div>
    <Pools />
    <Transactions />
  </div>
</template>

<script>
import watchlist from '@/libs/utils.watchlist.js'
import Liquidity from '@/views/overview/components/liquidity/index.vue'
import Volume from '@/views/overview/components/volume/index.vue'
import Pools from '@/views/pools/components/pools/index.vue'
import Transactions from '@/views/overview/components/transactions/index.vue'
export default {
  components: { Liquidity, Volume, Pools, Transactions },
  data() {
    return {
      token: this.$route.params.token,
      activeTabs: 'Volume',
      isWatch: false,
      tokenDetail: {
        name: 'ButterSwap Token',
        icon: '',
        token: '0x00000'
      }
    }
  },
  mounted() {
    console.log(watchlist)
    this.init()
  },
  methods: {
    init() {
      this.$set(this, 'isWatch', watchlist.whetherToWatch(this.token))
    },
    watch() {
      if (this.isWatch) {
        watchlist.delWatch(this.token)
      } else {
        watchlist.setWatch(this.tokenDetail)
      }
      this.$set(this, 'isWatch', !this.isWatch)
    }
  }
}
</script>

<style lang="less">
.details.container {
  padding-bottom: 40px;
  .el-tab-pane {
    width: 100%;
  }
  .breadcrumb {
    display: inline-block;
    width: 600px;
    padding: 10px 0;
  }
  .flr {
    padding: 10px 0;
  }
  .tokenName {
    padding: 15px 0 8px;
    color: rgb(40, 13, 95);
    font-weight: 600;
    margin-left: 12px;
    line-height: 0.7;
    font-size: 40px;
  }
  .tokenPrice {
    padding: 0 12px 12px;
    color: rgb(40, 13, 95);
    font-weight: 600;
    line-height: 1.5;
    margin-right: 16px;
    font-size: 24px;
  }
  .increase {
    font-size: 16px;
    font-weight: 600;
    color: rgb(49, 208, 170);
    font-weight: 700;
  }
  .operation {
    text-align: right;
    padding: 10px 0;
  }
  .star {
    padding: 0 10px;
    cursor: pointer;
    position: relative;
    top: 1px;
  }
}
</style>