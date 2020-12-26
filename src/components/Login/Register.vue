<template>
  <div class="context">
    
    <div class="context-nav"><h1>注册</h1></div>

    <Input prefix="md-mail" placeholder="请输入邮箱账号"  style="width:370px;margin-bottom:15px" size="large" v-model="emailvalue" />
    <Input prefix="md-lock" placeholder="设置密码" type="password" style="width:370px;margin-bottom:15px" size="large" v-model="passwordvalue"/>
    <Input prefix="md-lock" placeholder="确认密码" type="password" style="width:370px;margin-bottom:15px" size="large" v-model="passwordvalue2"/>
    <Input prefix="md-phone-portrait" placeholder="请输入手机号"  style="width:370px;margin-bottom:15px" size="large" v-model="phoneNumber"/>

    <div>
        <Checkbox v-model="single" style="float:left;margin-left:40px">点击表示您同意商城 《服务协议》 </Checkbox>
        <router-link to="/login" style="color:#000;float:right;margin-right:40px">登录</router-link>
    </div>
        
    <Button type="success" long style="width:370px;margin-top:30px;" size="large" @click="registerSubmit()">注册</Button>

  </div>
</template>
<script>
 export default {
   name: 'register',
   props: {
   },
   components: {

   },
   data () {
     return {
        single:false, //是否统一协议
        emailvalue: '' ,//邮箱账号
        passwordvalue: '', // 密码
        passwordvalue2: '', //确认密码
        phoneNumber:'',//手机号码
     }
   },
   methods: {
    //注册表单校验
    registerSubmit(){
      let emailzz = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱校验正则表达式
      let passwordzz = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ //密码校验正则表达式
      let phonezz = /^1[3|4|5|7|8][0-9]{9}$/ //手机号码正则表达式
      let flag = 1 //符合标准标识


      if(!emailzz.test(this.emailvalue)){
        this.$Message.error('请输入正确的邮箱!');
        flag = 0
      }
      if(!passwordzz.test(this.passwordvalue)){
        this.$Message.error('密码必须包含数字和字母,且在6~16位之间');
        flag = 0
      }
      if(!this.password == this.passwordvalue2){
        this.$Message.error('两次密码不一样');
        flag = 0
      }
      if(!phonezz.test(this.phoneNumber)){
        this.$Message.error('请输入正确的手机号码');
        flag = 0
      }

      if(this.single == false){
        flag = 0
        this.$Message.error('请勾选用户协议');
      }


      if(flag == 1){
        this.$Message.info('注册成功');
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