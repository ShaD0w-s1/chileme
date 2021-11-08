import { createStore } from 'vuex'

import CartList from './modules/cartList'
import Position  from './modules/position'
import User from './modules/user'
import getters from './getter'


const store = createStore({
  modules:{
    CartList,
    Position,
    User
  },
  getters
})    

export default store