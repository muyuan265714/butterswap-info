<template>
  <div class="clearfix">
    <p class="title">Your Watchlist</p>
    <el-card ref="topTokens" class="butter-table">
      <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'price', order: 'descending' }" v-if="tableData && tableData.length > 0">
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
      this.$set(this, 'tableData', [])
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