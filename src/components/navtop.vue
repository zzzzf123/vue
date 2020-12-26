<template>
 <div class="body">
    <div v-if=" username == null" style="float:left">
      <router-link to="/" class="nav_text_left" >游客 , 请登录</router-link>
      <router-link to="/register" class="nav_text_left" style="margin-left:20px" >注册</router-link>
    </div>
    <div v-if=" username != null" style="float:left">
      <span class="nav_text_left" style="color:green">欢迎您! {{username}}</span>
      <a class="nav_text_left" style="margin-left:10px" @click="loginOut()">退出登录</a>
    </div>



    <div  class="nav_text_right" ><icon name="heart" style="color:#000;padding-right:5px;height:14px"/><a style="color:#000">收藏夹</a></div>
    <div  class="nav_text_right" ><icon name="shopping-cart" style="color:#000;padding-right:5px;height:14px"/><router-link to="/home/shoppingcart" class="aa">购物车</router-link></div>
    <div  class="nav_text_right" ><icon name="user" style="color:#000;padding-right:3px;height:14px"/><a  style="color:#000">个人中心</a></div>
    <div  class="nav_text_right" ><router-link to="/home" class="aa" >商城首页</router-link></div>
 </div>
</template>

<script>
 export default {
   name: 'navtop',
   props: {
   },
   components: {

   },
   data () {
     return {
       username : '',

     }
   },
   methods: {
      loginOut(){
        localStorage.removeItem("username")
        this.$router.go(0)
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   },
   filters: {

   },
   created(){
     this.username = localStorage.getItem('username')
     console.log(this.username)
   }
 }
</script>

<style>
.aa{
  color: red;
}
.body{
  margin-top: 5px;
  text-align: left;
}

.nav_text_left{
  font-size: 14px;
  color: red;
  font-weight: bold;
}
.nav_text_right{
  font-size: 14px;
  color: red;
  font-weight: bold;
  float: right;
  margin-left: 10px;
}
</style>