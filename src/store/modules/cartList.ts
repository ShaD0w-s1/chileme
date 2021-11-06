const setLocalCartList = (state:any) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocaCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  try {
    return JSON.parse(localStorage.cartList);
  } catch(e) {
    return {}
  }
}

export default {
  namespaced: true,

  state: {
    cartList: getLocaCartList(),
    addressList: [],
  },
  mutations: {
    changeCartItemInfo(state:any, payload:any) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList:{}
      }
      let product = shopInfo.productList[productId]
      if(!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true }
      if(product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName(state:any, payload:any) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList:{}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked(state:any, payload:any) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state:any, payload:any) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked(state:any, payload:any) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if(products) {
        for(const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    clearCartData(state:any, shopId:any) {
      state.cartList[shopId].productList = {}
    },
    changeAddressList(state:any, addressList:any) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  }
}