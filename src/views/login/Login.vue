<template>
  <div class="wrapper">
    <img class="wrapper__img" src='http://www.dell-lee.com/imgs/vue3/user.png' />
    <van-form v-show="true" ref="_ref" validate-trigger="onSubmit">
      <van-field v-model="username" :rules="RUsername" name="username" placeholder="请输入用户名"></van-field>
      <van-field v-model="password" :rules="RPassword" name="password" placeholder="请输入密码" type="password" ></van-field>
      <div class="wrapper__login-button" @click="handleUserLogin">登陆</div>
    </van-form>
    <!-- <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="用户名"
        v-model="username"
      />
    </div>
     <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div> -->
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <!-- <Toast v-if="show" :message="toastMessage"/> -->
  </div>
</template>

<script lang="ts">
// 导入VUE模块
import { reactive, toRefs, ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

// 导入依赖模块
import Form from 'vant/es/form'
import 'vant/es/form/style'

import Field from 'vant/es/field'
import 'vant/es/field/style'

import CellGroup from 'vant/es/cell-group'
import 'vant/es//cell-group/style'

// import type { FormInstance } from 'vant';

// 导入自定义模块
import store from '@/store/index'
// import Toast, { useToastEffect } from '../../components/Toast'

// 处理用户名登录逻辑
const userLoginEffect = () => {
  const router = useRouter()
  const _ref = ref() 
  const data = reactive({ username: '', password: '' })
  const rules = reactive({
    RUsername:[{
      required:true,
      message:'请输入用户名',
      trigger:'onBlur'
    }],
    RPassword:[{
      required:true,
      message:'请输入密码',
      trigger:'onBlur'
    }]
  })
  const handleUserLogin = async () => { // 登录动作
    try {
      await _ref.value?.validate() // 验证拦截
      await store.dispatch('User/loginByUsername', data) // 登录
      await router.push('/')
    } catch (err) {
      console.error(err)
    }
    
  }

  const { username, password } = toRefs(data)
  const { RUsername, RPassword } = toRefs(rules)
  return { _ref, username, password, RUsername, RPassword, handleUserLogin}
}

// 处理注册跳转
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default defineComponent({
  name: 'Login',
  components: { [Form.name]:Form, [Field.name]:Field, [CellGroup.name]:CellGroup },
  // 职责就是告诉你，代码执行的一个流程
  setup () {
    // const { show, toastMessage, showToast } = useToastEffect()
    const { _ref, username, password, RUsername, RPassword, handleUserLogin } = userLoginEffect()
    const { handleRegisterClick } = useRegisterEffect()

    return {
      _ref,
      username, password, RUsername, RPassword,
      handleUserLogin, handleRegisterClick,
    }
  }
}) 
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    &__content {
      margin-top: .12rem;
      line-height: .22rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: $bgColor;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>