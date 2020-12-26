<template>
  <div class="context">
    
    <div class="context-nav"><h1>登录</h1></div>

    <Input prefix="md-person" placeholder="邮箱/手机/用户名"  style="width:370px;margin-bottom:30px;margin-top:30px" size="large" v-model="username"/>
    <Input prefix="md-lock" placeholder="请输入密码" type="password" style="width:370px;margin-bottom:15px" size="large" v-model="password" />

    <div>
        <Checkbox v-model="single" style="float:left;margin-left:40px">记住密码</Checkbox>
        <router-link to="/register" style="color:#000;float:right;margin-right:40px">注册</router-link>
    </div>
        
    <Button type="success" long style="width:370px;margin-top:30px;" size="large" @click="loginSubmit()">登录</Button>

  </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'login',
   props: {
   },
   components: {

   },
   data () {
     return {
         single : false ,
         username:'',
         password:''
     }
   },
   methods: {
    loginSubmit(){
        let flag = 1 //符合标准标识
        if(this.username == '' || this.password == ''){
            this.$Message.error('用户名或密码不能为空')
            flag = 0 
        } 
        if(flag == 1){
           axios('/user').then(res => {
                if(this.username  == res.data.username && this.password == res.data.password){
                    this.$Message.success('登录成功')
                    this.$router.push({ path: '/home' })
                    localStorage.setItem('username',this.username)
                }else{
                    this.$Message.error('用户名或密码不正确')
                }
           })
        }
        
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   },
   filters: {

   }
 }
</script>

<style>
.context{

  margin:110px auto;
  background:rgb(238, 234, 234);
  height:500px;
  width:450px
}
.context-nav{
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>