<template>
<div>
 <div style="float:left;margin-top:20px;width:100%">
     <img :src="require('../../assets/'+(this.$route.query.id)+'.jpg')" width="25%" height="25%" style="float:left;margin-left:100px;border:1px #000 solid">
     <div style="text-align:left;padding:0 20px 20px 20px;float:left;width:60%">
         <h2>{{itemdesc}}</h2>
         <div style="background:#eee;height:150px;font-size:16px;font-weight:bold;line-height:50px;padding-left:20px;">
             <div><span>产品活动:</span><span style="color:red;margin-left:15px">{{itemDiscount}}</span></div>
             <div><span>活动价: </span><span style="color:red;margin-left:28px">￥{{itemPrice}}</span></div>
             <div><span>原价: </span><span style="color:red;margin-left:43px">￥{{itemFullPrice}}</span></div>
         </div>
         <div style="display:flex;padding-top:15px;"><span>配送至: </span><v-distpicker province="广东省" city="广州市" area="海珠区" style="height:50px"></v-distpicker></div>

         <div style="background:#eee; height:30px;text-align:center;padding-top:5px;"><Row><Col span="8">月销量：{{sales}}</Col><Col span="8">累计销量：{{fullSales}}</Col><Col span="8">累计评价：{{fullPL}}</Col></Row> </div>
          <div style="display:flex;font-size:16px;margin:10px 0px">
            <div style="margin-top:5px">颜色：</div>
            <RadioGroup style="display:flex" v-model="itemColor">
                <div v-for="(item,i) in colorlist" :key="i">
                  <Radio :label="item.name" border ></Radio>
                </div>
            </RadioGroup>
            <!-- <Button v-for="(item,i) in colorlist" :key="i"  @click="selectColor(item.name)" :class="[isActive?'yangshi1':'yangshi2']">{{item.name}}</Button> -->
          </div>
          <div style="display:flex;font-size:16px;margin:10px 0px" > 
            <div  style="margin-top:5px">类型：</div>
            <RadioGroup style="display:flex" v-model="itemType">
                <div v-for="(item,i) in typelist" :key="i">
                  <Radio :label="item.name" border ></Radio>
                </div>
            </RadioGroup>
            <!-- <Button v-for="(item,i) in typelist" :key="i" style="margin-right:10px" @click="selectType(item.name)">{{item.name}}</Button> -->
          </div>
          
          <div style="display:flex;font-size:16px;margin:10px 0px 30px 0px">
            <div style="margin-top:5px">数量：</div>
            <div style="display:flex">    
              <Button @click="btnMinute">-</Button>
              <Input type="text" value="0"  v-model="count" style="width:35px;"/>
              <Button @click="btnAdd">+</Button>
            </div>
          </div>
          <button style="background:pink;width:160px;height:50px;border:1px red solid;color:red;font-size:16px;margin-left:50px;">立即购买</button>
          <button style="background:red;width:160px;height:50px;border:none;color:#fff;font-size:16px;margin-left:20px;" @click="addItem()">加入购物车</button>
     </div>
    
 </div>
 <div style="clear:both"></div>
 <Divider></Divider>
 <div style="text-align:left;margin-left:100px;display:flex">
   <HotItem/>
    <Tabs  style="width:70%;border:1px #fff solid;margin-left:50px;padding:10px">
        <TabPane label="宝贝详情" name="name1">
          <div v-for="(item,i) in imglist" :key="i" style="margin:0;padding:0">
            <img :src="require('../../assets/详情-'+item.imgurl+'.jpg')" alt="" >
          </div>
          
        </TabPane>
        <TabPane label="全部评价" name="name2">暂无数据</TabPane>
        <TabPane label="猜你喜欢" name="name3">暂无数据</TabPane>
    </Tabs>
 </div>
</div>
 
</template>

<script>
import axios from 'axios'
import HotItem from './HotItem.vue'
 export default {
   name: 'ItemBody',
   props: {
   },
   components: {
      HotItem
   },
   data () {
     return {
       itemdesc:'',
       itemDiscount :'',
       itemPrice:'',
       itemFullPrice:'',
       itemColor:'',
       itemType:'',
       sales:'',
       fullSales:'',
       fullPL:'',
       count:1,
       stock:999,
       colorlist:[],
       typelist:[],
       imglist:[]
     }
   },
   methods: {
     btnAdd () {
      this.count++
      },
     btnMinute () {
       if(this.count>1){
        this.count--
       }
      
      },
      addItem(){
        if(this.itemdesc != '暂无数据'){
          var templist = JSON.parse(localStorage.getItem("cart") || "[]");
          var username = localStorage.getItem("username")
          var flag = 1
          const item = {'url':this.$route.query.id,'desc':this.itemdesc,'prices':this.itemPrice,'number':this.count,'color':this.itemColor,'type':this.itemType,'isact':false,'username':username}
          
          for (let index = 0; index < templist.length; index++) {

            if(templist[index].url == item.url&&templist[index].type == item.type&&templist[index].color == item.color){
              templist[index].color = item.color
              templist[index].type = item.type
              templist[index].desc = item.desc
              templist[index].prices = item.prices
              templist[index].number = item.number
              flag = 0
            }
          }
          if(flag == 1 ){
            console.log(1111)
            templist.push(item)
          }
          
          

          console.log(templist)

          localStorage.setItem("cart", JSON.stringify(templist));
        }
        
      },
      selectColor(item){
        this.itemColor = item
      },
      selectType(item){
        this.itemType = item
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
    axios.post('/getItemInfo',this.$route.query.id).then(res => {
        this.itemdesc=res.data.itemDesc,
        this.itemDiscount=res.data.itemDiscount,
        this.itemPrice=res.data.itemPrice,
        this.itemFullPrice=res.data.itemFullPrice,
        this.sales=res.data.sales,
        this.fullSales=res.data.fullSales,
        this.fullPL=res.data.fullPL,
        this.imglist = res.data.itemImg
        this.colorlist = res.data.itemColor
        this.typelist = res.data.itemType
    })
   }
 }
</script>

<style>
 .distpicker-address-wrapper select{
     padding:0;
     height: 20px;
 }
 .onselect{
   background:red
 }

 .yangshi1 {
    background: rgb(16, 228, 228);
 }

 .yangshi2 {
    background: rgb(1, 8, 8);
 }

</style>