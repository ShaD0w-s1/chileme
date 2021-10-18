<template>
  <div class="warper">
    <div class="position">
      <div class='position__header'>
        <span >当前定位</span>
      </div>
      <span class="iconfont">&#xe619;</span>
      <span class="position__text">{{position}}</span>
      <span class='position__button' @click="refreshPosition">重新定位</span>
  </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

import { getPositionEffect } from '@/effects/positionEffect'

const refreshPositionEffect = () => {
  const store = useStore()
  const refreshPosition = () =>{
    store.dispatch('Position/setPosition')
  }

  return { refreshPosition }
}

export default {
    name:'Position',
    setup() {
        const { position } = getPositionEffect()
        const { refreshPosition } = refreshPositionEffect()
        return { position, refreshPosition }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';

.warper {
  
}

.position {
  position: relative;
  padding: .18rem .16rem .18rem .16rem;
  margin: .18rem;
  border-radius: .04rem;
  background-color: $bgColor;
  &__header {
    margin-bottom: .12rem ;
    font-size: .12rem;
  }
  &__button {
    position: absolute;
    right: .16rem;
    bottom: .18rem;
  }
}

</style>