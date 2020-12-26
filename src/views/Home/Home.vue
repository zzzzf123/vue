<template>
 <div class="homebody">
   <navtop></navtop>
   <div style="clear:both"></div>
   <search style="margin:20px 10% 0 10%"></search>
   <midmenu></midmenu>
   <router-view/>
   <div>合作伙伴 联系我们 网站地址 2020 cslg-web 版权所有</div>
 </div>
</template>

<script>

import navtop from '../../components/navtop.vue'
import search from '../../components/Home/Search.vue'
import midmenu from '../../components/Home/MidMenu.vue'


 export default {
   name: 'Home',
   props: {
   },
   components: {
      navtop,
      // homemenu,
      search,
      midmenu,


   },
   data () {
     return {

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

<style>
.homebody{
  margin-left: 8%;
  margin-right:8%;
}
</style>