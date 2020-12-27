<template>
 <div>
    <Table :columns="columns" :data="data1" style="margin:0% 5%"></Table>
    <div style="height:50px;widht:100%;background:#eee;margin:0% 5%;line-height:50px;font-size:16px;text-align:left;padding-left:10px;margin-top:10px">
        <span>全选</span><Checkbox v-model="allselect" style="margin-left:10px" @on-change="getAll()"></Checkbox>
        <a href="" style="color:#000;margin-left:20px" @click="clearCart()">清空购物车</a>

        <button style="height:50px;width:100px;background:red;float:right;border:none;color:#fff" @click="paycart()">去结算</button>
        <span style="float:right;padding-right:20px" >已选 {{isselect}} 件商品，合计  ￥{{sum}} 元</span>

    </div>
 </div>
</template>

<script>
 export default {
    
   name: 'ShoppingCart',
   props: {
   },
   components: {

   },
   data () {
     return {
         isselect:0,
         allselect:false,
         sum:0,
         columns:[
            {
                title:'选择',
                key:'choose',
                render:(h,params) =>{
                    return h('checkbox',{
                        props:{
                            value:params.row.isact
                        },
                        on:{
                            'on-change':()=>{
                                params.row.isact = !params.row.isact
                        
                                this.getSum(params.row)
                            }
                        }
                    })
                },
                width:'100px'
             },{
                title:'商品信息',
                key:'info',
                render:(h,params) =>{
                    return h('div',{
                        attrs:{
                            style:'display:flex'
                        }
                    },[
                        h('img',{
                            attrs:{
                                src:require('../../assets/'+(params.row.url)+'.jpg'),
                                style:'width:160px;height:160px;margin:20px 0px;text-align:left'
                            }
                        }),
                        h('span',{
                            attrs:{
                                style:'margin:20% 10px'
                            }
                        },params.row.color),
                        h('span',{
                            attrs:{
                                style:'margin:20% 10px'
                            }
                        },params.row.type),                        
 
                    ])
                },
                width:'500px'
            },{
                title:'单价',
                key:'prices',
                render:(h,params) => {
                    return h('span',{},'￥'+params.row.prices)
                }
            },{
                title:'数量',
                key:'number',
                //              <Button @click="btnMinute">-</Button>
              //<Input type="text" value="0"  v-model="count" style="width:35px;"/>
              ///<Button @click="btnAdd">+</Button>
                render:(h,params) => {
                    return h('div',[
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnMinute(params.row.url)
                                }
                            }
                        },'-'),
                        h('i-input',{
                            props:{
                                 type:'text',
                                 value:params.row.number
                            },
                            attrs:{
                                style:'width:35px'
                            }
                        }),
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnAdd(params.row.url)
                                }
                            }
                        },'+'),                        
                    ])
                }
            },{
                title:'金额',
                key:'money',
                render:(h,params) => {
                    return h('span',{},'￥'+params.row.prices*params.row.number)
                }
            },{
                title:'操作',
                key:'operate',
                render:(h,params) => {
                    return h('a',{
                        on:{
                            click:()=>{
                                this.deleteitem(params.row.url)
                            }
                        }
                    },'删除')
                }
            }],
         data1:[]
     }
   },
   methods: {
       deleteitem(id){
           const list = JSON.parse(localStorage.getItem("cart"||"[]"))
           const newlist = []
           for (let i = 0; i < list.length; i++) {
               if(list[i].url != id){
                   newlist.push(list[i])
               }
           }
           localStorage.setItem("cart", JSON.stringify(newlist));

           this.data1=JSON.parse(localStorage.getItem("cart") || "[]")

       },
       paycart(){
            let username=localStorage.getItem("username")
            if(username == null){
                this.$Message.error({
                    content: '您没有登录',
                    duration: 2,
                    closable: true
                })
            }
            else if(this.sum==0){
                this.$Message.error({
                    content: '您没有选择东西',
                    duration: 2,
                    closable: true
                })
            }
            else{
                const newlist = []
                for (let i = 0; i < this.data1.length; i++) {
                    if(this.data1[i].isact==false)
                    newlist.push(this.data1[i])  
                }
                this.allselect=false
                localStorage.setItem("cart", JSON.stringify(newlist));
                this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
                this.$Message.success({
                    content: '购买成功',
                    duration: 10,
                    closable: true
                })
            }
        },
        getSum(id){

            for (let i = 0; i < this.data1.length; i++) {
               if(this.data1[i].url == id.url){
                   this.data1[i].isact = !this.data1[i].isact
               }  
            }
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].isact == true){
                    this.isselect++
                    this.sum =this.sum + this.data1[i].prices * this.data1[i].number
                }else{
                    this.isselect--
                    this.sum = this.sum - this.data1[i].prices * this.data1[i].number
                }
                
            }
            console.log(this.data1)
        },
        getAll(){
            console.log(this.allselect)
            for (let i = 0; i < this.data1.length; i++) {
                this.data1[i].isact = this.allselect
            }
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].isact == true){
                    this.isselect++
                    this.sum =this.sum + this.data1[i].prices * this.data1[i].number
                }else{
                    this.isselect--
                    this.sum = this.sum - this.data1[i].prices * this.data1[i].number
                }
                
            }
            
        },
        clearCart(){
            localStorage.removeItem('cart')
            this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
        },
        btnAdd (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url == id){
                    this.data1[i].number++
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },
        btnMinute (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url == id){
                    if(this.data1[i].number>1){
                        this.data1[i].number--
                    }
                    
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },

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
       let cartdata=JSON.parse(localStorage.getItem("cart") || "[]")
       let username=localStorage.getItem("username")
       for (let i = 0; i < cartdata.length; i++) {
           if(cartdata[i].username == username){
               this.data1.push(cartdata[i])
           } 
       }
    //    console.log(this.data1)
   }
 }
</script>

<style scoped lang='scss'>

</style>