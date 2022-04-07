<template>
  <div>
      <p>LOGIN</p>
      <p>{{user.login}}</p>
      <van-button type="primary" @click="click">点我</van-button>
     
  </div>
</template>

<script>
import { Button } from 'vant'
import { get } from '@/api/login.js'
import { reactive } from '@vue/reactivity'

export default {
    name:'login',
    setup(){
        let user = reactive({
            login:'hha',
        })
        const click = async()=>{
            const mesg = await get()
            user.login = mesg.data[0].login
        }
        return {
            user,
            click
        }
    },
    components:{
         [Button.name]: Button
    }
}
</script>

<style>

</style>