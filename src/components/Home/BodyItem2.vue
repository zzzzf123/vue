<template>
 <div>
    <Divider orientation="left" style="font-weight:bold;">美丽人生</Divider>
    <div style="float:left;">
        <img src="../../assets/20.jpg" alt="" width="200px" height="20%"> 
    </div>
    <div style="float:left;display:flex" v-for="(item,i) in itemList" :key="i">
        <div v-if=" i%2 == 0">
            <Card style="width:300px;height:260px;margin:0 20px 10px 20px" >
            <div style="text-align:center">
                <img :src="require('../../assets/'+item.imgurl+'.jpg')" width="70%" height="30%">
                <h3>{{itemList[i].desc}}</h3>
            </div>
            </Card>
            <Card style="width:300px;height:260px;margin:0 20px 10px 20px">
            <div style="text-align:center">
                <img :src="require('../../assets/'+(item.imgurl+1)+'.jpg')" alt="" width="70%" height="30%">
                <h3>{{itemList[i+1].desc}}</h3>
            </div>
            </Card>
        </div>
        
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        itemList:[]
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

   },
   created(){
       axios.post('/getItem','美丽人生').then(res => {
           console.log(res.data.data)
           console.log(res.data.data[0].imgurl)
           this.itemList=res.data.data
       })
   }
 }
</script>

<style scoped lang='scss'>

</style>