<template>
  <div class="wrapper">
    <serach-lista v-for="item in test" :key="item.name" :ppp="item" />
  </div>
</template>

<script>
import { reactive } from 'vue'

import serachLista from '@/components/SerachList'

export default {
  name:'serachList',
  components:{ serachLista },
  setup() {
    const test = reactive([
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'shop', name:'四海游龙', score:'4.8', cost:'10.0', range:'3.1'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'shop', name:'四海游龙', score:'4.8', cost:'10.0', range:'3.1'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'shop', name:'四海游龙', score:'4.8', cost:'10.0', range:'3.1'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'list', name:'四海游龙', num:'9999'},
      {type:'shop', name:'四海游龙', score:'4.8', cost:'10.0', range:'3.1'},
    ])
    return { test }
  },
}
</script>

<style lang="scss" scoped>

</style>