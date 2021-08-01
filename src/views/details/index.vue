<template>
  <div class="details container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Overview</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tokens' }">Tokens</el-breadcrumb-item>
      <el-breadcrumb-item>{{ token }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: this.$route.params.token
    }
  },
  mounted() {
    console.log(this.token)
  }
}
</script>

<style>
</style>