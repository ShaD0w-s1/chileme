import { createStore } from 'vuex'

import  CartList from './modules/cartList'
import  Position  from './modules/position'
import  getters from './getter'


const store = createStore({
  modules:{
    CartList,
    Position,
  },
  getters
})    

export default store