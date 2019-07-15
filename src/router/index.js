import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/indexPage'
import juZheng from '../components/juPage'
import Int from '../components/intPage'
import Hun from '../components/hunPage'
import yanBiQi from '../components/yanPage'
import xiaoJiao from '../components/xiaoPage'
import zaoSheng from '../components/zaoPage'
import Out from '../components/outPage'
Vue.use(Router)

/*  声明的全局变量 */
import G from '../components/call/bollean'
Vue.use(G);

/*  声明全局函数 */
Vue.prototype.coding=function (data) {
  let num=data.length
  let key='f244ea1dbfe89a2a835a'
  let num1=key.length
  let encrypted=''
  if(num>num1){
    let num3=Math.ceil(num/num1)
    key=key.repeat(num3);
  }
  for(let i=0;i<num;i++){
    encrypted += String.fromCharCode(data.charCodeAt(i)^key.charCodeAt(i));
  }
  return encrypted
}

/*  获取后台数据函数的封装  */
Vue.prototype.getData=function (res) {
  if(res!=undefined||res!=''||res!=null){
    let num=res.length
    let key='f244ea1dbfe89a2a835a';
    let num1=key.length
    let encrypted=''
    if(num>num1){
      let num3=Math.ceil(num/num1)
      key=key.repeat(num3);
    }
    for(let i=0;i<num;i++){
      encrypted += String.fromCharCode(res.charCodeAt(i)^key.charCodeAt(i));
    }
    let last=encrypted.lastIndexOf("}")
    encrypted=JSON.parse(encrypted.slice(0,last+1))
    return encrypted
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/intPage',
      name: 'int',
      component:Int,
    },
    {
      path: '/hunPage',
      name: 'hun',
      component:Hun
    },
    {
      path: '/juPage',
      name: 'juzheng',
      component:juZheng
    },
    {
      path: '/yanPage',
      name: 'yanbiqi',
      component:yanBiQi
    },
    {
      path: '/xiaoPage',
      name: 'xiaojiao',
      component:xiaoJiao
    },
    {
      path: '/zaoPage',
      name: 'zaosheng',
      component:zaoSheng
    },
    {
      path: '/outPage',
      name: 'out',
      component:Out
    },
  ]
})

