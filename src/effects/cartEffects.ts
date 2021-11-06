import { computed } from 'vue'
import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = (shopId:any) => {
  const store = useStore()
  const cartList = store.state.CartList.cartList;
  const changeCartItemInfo = (shopId:any, productId:any, productInfo:any, num:any) => {
    store.commit('CartList/changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList:any = {}
    for(const i in productList) {
      const product = productList[i]
      if(product.count > 0 ) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result:any = { total: 0, price: 0, allChecked: true}
    if(productList) {
       for(const i in productList) {
         const product = productList[i]
         result.total += product.count
         if(product.check) {
           result.price += (product.count * product.price)
         }
         if(product.count > 0 && !product.check) {
           result.allChecked = false
         }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  return { cartList, shopName, productList, calculations, changeCartItemInfo }
}