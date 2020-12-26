import Mock from 'mockjs'

//模拟用户信息
Mock.mock('/user',/post|get/i,{
    'username':'zhangfang',
    'password':'092218222'
})
//模拟主页数据
Mock.mock('/getItem',/post|get/i,function(option){
    console.log(option)
    if(option.body == '美丽人生'){
        return Mock.mock({
            data:[{
                'imgurl':21,
                'desc':'Jeep吉普男鞋2020春夏透气帆布鞋高低帮潮'
            },{
                'imgurl':22,
                'desc':'2020新款长裤子男商务休闲裤男士加绒西装'
            },{
                'imgurl':23,
                'desc':'瑞士正品机械表全自动防水手表男士经典冠'
            },{
                'imgurl':24,
                'desc':'户外冲锋衣男三合一两件套冬装棉衣潮牌中'
            },{
                'imgurl':25,
                'desc':'阿迪达斯官网拖鞋2020运动鞋防滑游泳沙'
            },{
                'imgurl':26,
                'desc':'sdeer圣迪奥字母贴布几何口袋抽绳连帽短'
            },{
                'imgurl':27,
                'desc':'妮维雅男士水活畅透精华露50g水活畅透洁'
            },{
                'imgurl':28,
                'desc':'小熊煎蛋器煮蛋器蒸蛋器 电煎蛋锅迷你煎'
            }]
        })
    }
    if (option.body == '潮电酷玩') {
        return Mock.mock({
            data:[{
                'imgurl':31,
                'desc':'【原封正品】2020新款Apple/苹果 10.2英'
            },{
                'imgurl':32,
                'desc':'精影RTX2080 8G 256Bit台式机显卡8G独'
            },{
                'imgurl':33,
                'desc':'鱼巢@酷鱼S5全铝迷你机箱台式机电脑小机'
            },{
                'imgurl':34,
                'desc':'金士顿骇客神条DDR4 8g 2133 2400 2666'
            },{
                'imgurl':35,
                'desc':'腹灵MKa104s 机械键盘青轴黑轴办公K660'
            },{
                'imgurl':36,
                'desc':'技嘉SLI桥接器双显卡槽位仅支持NV100系'
            },{
                'imgurl':37,
                'desc':'小米智能头戴播放器头戴影院3D视效巨幕影'
            },{
                'imgurl':38,
                'desc':'华硕（ASUS）XONAR AE 7.1声道声卡 PC'
            }]  
        })
    }
})
//模拟详情页数据
Mock.mock('/getItemInfo',/post|get/i,function(option){
    //模拟ipad 数据
    if (option.body == 31) {
        return Mock.mock({
            //商品简介
            itemDesc:'【原封正品】2020新款Apple/苹果 10.2英寸iPad平板电脑ipad8便携式掌上电脑128G支持Apple Pencil和智能键盘',
            //商品优惠
            itemDiscount :'直降200元!',
            //商品价格
            itemPrice:6799,
            //商品原价
            itemFullPrice:6999,
            //商品颜色
            itemColor:[{name:'白色'},{name:'黑色'}],
            //商品类别
            itemType:[{name:'全新'},{name:'95新'}],
            //月销量
            sales:'120',
            //累计销量
            fullSales:'5366',
            //累计评价
            fullPL:'1100',
            //商品图片
            itemImg:[{
                'imgurl':'01',
            },{
                'imgurl':'02',
            },{
                'imgurl':'03',
            },{
                'imgurl':'04',
            },{
                'imgurl':'05',
            },{
                'imgurl':'06',
            },{
                'imgurl':'07',
            },{
                'imgurl':'08',
            },{
                'imgurl':'09',
            },{
                'imgurl':'10',
            }]
        })
        
    }
    if (option.body == 35) {
        return Mock.mock({
            //商品简介
            itemDesc:'腹灵MKa104s 机械键盘青轴黑轴办公K660茶轴红轴电脑游戏电竞复古',
            //商品优惠
            itemDiscount :'直降200元!',
            //商品价格
            itemPrice:999,
            //商品原价
            itemFullPrice:1999,
            //商品颜色
            itemColor:[{name:'白色'},{name:'黑色'}],
            //商品类别
            itemType:[{name:'套餐一'},{name:'套餐二'},{name:'套餐三'}],
            //月销量
            sales:'123',
            //累计销量
            fullSales:'4512',
            //累计评价
            fullPL:'3100',
            //商品图片
            itemImg:[{
                'imgurl':'11',
            },{
                'imgurl':'12',
            },{
                'imgurl':'13',
            },{
                'imgurl':'14',
            },{
                'imgurl':'15',
            },{
                'imgurl':'16',
            },{
                'imgurl':'17',
            },{
                'imgurl':'18',
            },{
                'imgurl':'19',
            },{
                'imgurl':'20',
            }]
        })
        
    }
    return Mock.mock({
        //商品简介
        itemDesc:'暂无数据',
        //商品优惠
        itemDiscount :'暂无数据',
        //商品价格
        itemPrice:'暂无数据',
        //商品原价
        itemFullPrice:'暂无数据',
        //商品颜色
        itemColor:[],
        //商品类别
        itemType:[],
        //月销量
        sales:'0',
        //累计销量
        fullSales:'0',
        //累计评价
        fullPL:'0',
        //商品图片
        itemImg:[]
    })
        
    
})