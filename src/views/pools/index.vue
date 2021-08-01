<template>
  <div class="pools container">
    <WatchList />
    <Pools />
  </div>
</template>

<script>
import WatchList from './components/watchList/index.vue'
import Pools from './components/pools/index.vue'
export default {
  name: 'pools',
  components: {
    WatchList,
    Pools
  }
}
</script>
