<template>
  <div class="clearfix">
    <p class="title">Your Watchlist</p>
    <el-card ref="topTokens" class="butter-table">
      <el-table :data="tableData" v-if="tableData && tableData.length > 0" style="width: 100%" :default-sort="{ prop: 'price', order: 'descending' }">
        <el-table-column width="100" type="index" label="#"></el-table-column>
        <el-table-column width="400" sortable prop="name" label="NAME"></el-table-column>
        <el-table-column sortable prop="price" label="PRICE">
          <template slot-scope="scope">${{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column sortable prop="priceChange" label="PRICE CHANGE"></el-table-column>
        <el-table-column sortable prop="volume24h" label="VOLUME 24H"></el-table-column>
        <el-table-column sortable prop="liquidity" label="LIQUIDITY"></el-table-column>
      </el-table>
      <div class="pagination" v-if="tableData && tableData.length > 0">
        <el-pagination background layout="prev, pager, next" :current-page="query.pageNumber" :page-size="query.pageSize" :total="pageTotal" @current-change="pageChange"></el-pagination>
      </div>
      <p v-else class="table-nothing">You have no attention to Pools for the time being</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: { pageNumber: 1, pageSize: 10 },
      tableData: [],
      pageTotal: 1
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      // TODO: retrieve data Give TableData
      this.$set(this, 'tableData', [
        // { name: 'HT', price: '293.73', isIncrease: true, volume24h: '$399.06M', priceChange: '0.8%', liquidity: '$1.18B' },
        // { name: 'HUSD', price: '6.5', isIncrease: true, volume24h: '$200.06M', priceChange: '1.8%', liquidity: '$112B' },
        // { name: 'Tether USD(USDT)', price: '6.73', isIncrease: false, volume24h: '$312M', priceChange: '3.3%', liquidity: '$332B' },
        // { name: 'Butter', price: '888.73', isIncrease: true, volume24h: '$4444M', priceChange: '84%', liquidity: '$239B' }
      ])
    },
    pageChange() {
      this.$set(this.query, 'pageNumber', '1')
      this.get()
    }
  }
}
</script>

<style scoped>
.butter-table {
  float: left;
  width: 99%;
  margin: 0px 0.5% 0px;
}
</style>