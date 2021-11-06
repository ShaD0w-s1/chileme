<template>
  <div class="content">
    <van-icon class="content__iconfont" :name="decideIcon" />
    <div class="content__describe">
      <div class="content__describe__name">{{ppp.name}}</div>
      <div v-if="ppp.type === 'shop' " class="content__describe__score">
        <span class="content__describe__score__text">评分{{ppp?.score}}</span>
        <span class="content__describe__score__text">配送¥{{ppp?.cost}}</span>
        <span class="content__describe__score__text">{{ppp?.range}}Km</span>
      </div>
    </div>
    <div v-if="ppp.num" class="content__number">约{{ppp.num}}条结果</div>
  </div>
</template>

<script>
import 'vant/es/icon/style'
import Icon from 'vant/es/icon'
import { computed } from 'vue'

const decideIconEffect = (props) => {
  const decideIcon = computed(()=> {
    if (props?.ppp?.type === 'list') {
      return "search"
    } else {
      return "shop-o"
    }
  })
  return { decideIcon }
}

export default {
  name:'serachLista',
  props:['ppp'],
  components: {
    [Icon.name]: Icon
  },
  setup(props) {
    const { decideIcon } = decideIconEffect(props)
    return { decideIcon }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: relative;
  align-items: flex-start;
  padding: .16rem .12rem;
  font-size: .16rem;
  border-bottom: 0.01rem solid #F1F1F1;
    &__iconfont {
     margin-right: .12rem;
     font-size: .20rem;
  }
    &__describe {
    flex: 1;
    &__name {

    }
    &__score {
      margin-top: .16rem;
      font-size: .14rem;
      &__text {
        margin-right: .16rem;
      }
    }
  }
     &__number {
    
  }
}
</style>

  