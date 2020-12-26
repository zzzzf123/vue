<template>
 <div class="background">
  <navtop/>
  <router-view></router-view>
 </div>
</template>

<script>
import navtop from '../../components/navtop.vue'
// import register from '../../components/Login/Register.vue'
 export default {
   name: 'LoginRegister',
   props: {
   },
   components: {
      navtop, 
      // register
   },
   data () {
     return {
       single:false
      }
   },
   methods: {

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

<style >

.background{
  text-align: center;
  margin-left: 8%;
  margin-right:8%;
  background:url('../../assets/login-body.jpg') ;
  background-size: 100% 100%;
  height: 70%;
  position: fixed;
  width: 84%
  
}

</style>