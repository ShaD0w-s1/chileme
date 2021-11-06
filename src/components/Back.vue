<template>
  <div class="back iconfont" @click="handleBackClick">&#xe6f2;</div>
</template>

<script>
import { useRouter } from 'vue-router'

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}

export default {
  name:'Back',
  setup() {
    const handleBackClick = useBackRouterEffect()
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
.back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
</style>