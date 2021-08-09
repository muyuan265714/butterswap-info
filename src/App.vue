<template>
  <div id="app">
    <div class="hLpnfN">
      <el-radio-group fill="#ff9900" v-model="infoPath">
        <el-radio-button label="/">Overview</el-radio-button>
        <el-radio-button label="/pools">Pools</el-radio-button>
        <el-radio-button label="/tokens">Tokens</el-radio-button>
      </el-radio-group>
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      infoPath: this.$route.path
    }
  },
  watch: {
    infoPath(newVal, oldVal) {
      this.$router.push(newVal)
    }
  }
})
</script>
<style lang="less">
#app {
  font-family: Kanit, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fafafa;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.hLpnfN {
  background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
  text-align: left;
}
@media screen and (min-width: 576px) {
  .hLpnfN {
    padding: 20px 60px;
  }
}
@media screen and (max-width: 576px) {
  .hLpnfN {
    padding: 20px 20px;
  }
}
</style>
