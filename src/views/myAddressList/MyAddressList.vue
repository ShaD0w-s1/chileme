<template>
  <div class="wrapper">
    
    <div class="shell">
      <div class='title'>
        <Back class="title__back" />
        <div class="title__text">管理收货地址</div>
        <div class="title__add" @click="handleAddClick">新建</div>
      </div>
      <div class="search">
        <span class="iconfont">&#xe62d;</span>
        <span class="search__text">山姆会员商店优惠商品</span>
      </div>
    </div>
    <div class="container">
      <Position/>
      <Address
      v-for="address in addressList"
      :key="address._id"
      :address="address"
      @click="() => handleUpdateClick(address._id)"
    />
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import Position from '../../components/position'
import Address from '../../components/Address'
import useCommonAddressEffect from '../../effects/addressEffect'
import Back from '@/components/Back'



export default {
  name: 'MyAddressList',
  components: { Address, Position, Back },
  setup() {
    const store = useStore()
    const router = useRouter()
    const { addressList } = toRefs(store.state.CartList)
    const { getAddressList } = useCommonAddressEffect()
    getAddressList(true)
    const handleBackClick = () => { router.back() }
    const handleAddClick = () => { router.push({ name: 'UpsertAddress'}) }
    const handleUpdateClick = (addressId)=> {router.push(`/upsertAddress/${addressId}`)}
    return { addressList, handleBackClick, handleAddClick, handleUpdateClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $dark-bgColor;
}
.shell {
  position:fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 1rem;
  background: $bgColor;
}
.title {
  display: flex;
  line-height: .44rem;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__back {
    width: .2rem;
    margin-left: .18rem;
    font-size: .2rem;
    color: #B6B6B6;
  }
  &__text {
    flex: 1;
    text-align: center;
  }
  &__add {
    margin-right: .2rem;
    font-size: .14rem;
  }
}
.search {
  margin: .12rem .12rem .12rem .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

.container{
  padding-top: 1rem;
}
</style>