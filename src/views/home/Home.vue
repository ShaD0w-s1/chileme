<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
export default {
  name: 'Home',
  components: { StaticPart, Nearby }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
