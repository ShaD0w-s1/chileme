import { useStore } from 'vuex'
import { get } from '../utils/request'

const useCommonAddressEffect = () => {
  const store = useStore()

  const getAddressList = async (forceUpdate:any) => {
    const addressList = store.state.CartList.addressList;
    if(forceUpdate || !addressList.length) {
      const result:any = await get('/api/user/address')
      if(result?.data?.length) {
        store.commit('CartList/changeAddressList', result.data)
      }
    }
  }

  return { getAddressList }
}

export default useCommonAddressEffect