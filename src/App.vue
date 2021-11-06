<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

const watchChange = () => {
  const width = window.innerWidth
  const Height = window.innerHeight
  const change = watch([width,Height],(newValues, prevValues)=>{
    console.log(newValues, prevValues)
  })
  return { change }
}

export default defineComponent({
  setup() {
    const { change } = watchChange()
    return { change }
  },
})
</script>


<style lang="scss">
 a {
   color: #000;
   text-decoration: none;
 }
</style>