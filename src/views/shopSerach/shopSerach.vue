<template>
  <div class="wrapper">
      <div class="title">
      <Back class="title__back"/>
      <van-search class="title__search" v-model="inputContent"  placeholder="请输入搜索关键词" shape="round"  />
      <van-button class="title__btn" type="primary" size="small" round>搜索</van-button>
      </div>
    <router-view class="view" />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
 
import 'vant/es/search/style'
import 'vant/es/button/style'

import Search from 'vant/es/search'
import Button from 'vant/es/button'
import Back from '@/components/Back'

// const serachWaTchEffect = () => {
//   const watchhandle = watchEffect()
//   return { watchhandle }
// }

const serachWatch= (parms) => {
    const router = useRouter()
    const sWatch = watch(parms, (count)=>{
      if (count){
        console.log('yes')
        router.push({'path':'/shopSerach/serachlist'})
      } else {
        console.log('no')
        router.push({'path':'/shopSerach/'})
      }
    }, {
      immediate:true
    })
  return { sWatch }
}

export default {

  components:{
    [Search.name]: Search,
    [Button.name]: Button,
    Back
  },
  
  setup(){
    const inputContent = ref('')
    // const { watchhandle } = serachWaTchEffect()
    const { sWatch } = serachWatch(inputContent)
    return { inputContent , sWatch }
  }
}
</script>

<style lang="scss" scoped>

.title{
  display: flex;
  z-index: 99;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;

  &__back {
    margin-left: 0.18rem
  }
  &__search {
    flex: 1;
  }
  &__btn {
    margin-right: 0.18rem;
    width: .6rem;
  }
}

.view {
  padding-top: 0.54rem;
}
</style>
