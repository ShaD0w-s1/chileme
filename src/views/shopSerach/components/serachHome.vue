<template>
  <div class="warpper">
    <div class="history">
      <div class="history__title">搜索历史</div>
      <div class="history__shell">
        <van-button  
          v-show="shower"
          v-for="item in histroyList" 
          :key="item.id" 
          class="history__button" 
          type="primary" 
          size="small" 
          round>
          {{item.name}}
        </van-button>
        <van-button @click="showList" round>
          <van-icon name="arrow-up" />
        </van-button>
      </div>
    </div>
    <div class="find"></div>

  </div>
</template>

<script>
import 'vant/es/icon/style'
import Icon from 'vant/es/icon'
import 'vant/es/button/style'
import Button from 'vant/es/button'
import { reactive, ref } from 'vue'

  const showListEffect = () => {
    let shower = ref(true)
    const showList = () => {
      shower.value = !shower.value
    }
    return {
      shower, showList
    }
  }

export default {
  name:'SerachHome',
  components:{
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  setup() {
    const histroyList = reactive([
  {name: "兰州拉面兰州拉面兰州拉面兰州拉面兰州拉面", id:'123'},
  {name: '西北拉面', id:'333'},
  {name: '西北拉面', id:'333'},
  {name: "兰州拉面兰州", id:'123'},
  {name: '西北拉面', id:'333'},
  {name: "兰州拉面兰州拉面兰州拉面兰州拉面兰州拉面", id:'123'},
  {name: '西北拉面', id:'333'},
  {name: "兰州拉面兰州拉面兰州拉面州拉面", id:'123'},
  {name: '西北拉面', id:'333'},
  {name: "兰州拉面兰州面兰州拉面", id:'123'}
])
    const { shower, showList } = showListEffect()
  return { histroyList, shower, showList }
  },
}
</script>

<style lang="scss" scoped>
.warpper {
  margin: 0 .16rem 0 .16rem;
}

.history {
  &__title {
    padding-top: .16rem;
    font-size: .16rem;
    font-weight: 600;
  }
  &__shell {
    width: 80%;
  }
  &__button {
    margin-right: .16rem;
    margin-top:.16rem;
    max-width: 1.5rem;
  }
}

::v-deep(.van-button__text) {
  max-width: 1.5rem;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
</style>