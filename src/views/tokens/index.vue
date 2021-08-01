<template>
  <div class="tokens container">
    <WatchList />
    <AllTokens />
  </div>
</template>

<script>
import WatchList from './components/watchList/index.vue'
import AllTokens from './components/tokens/index.vue'
export default {
  name: 'tokens',
  components: {
    WatchList,
    AllTokens
  }
}
</script>
