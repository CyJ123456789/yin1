<template>
    <div class="int">
      <div class="cut">
        <component :is="tabView":tongdao="skip1"></component>
      </div>
      <ul>
        <p class="intIndex">
          <span class="span3">MIC{{skip2}}</span>
        </p>
        <div class="control">
          <li v-for="(item,index) in rightBtn" @click="cut($event,index+1)" class="li1">
            <img :src="img1" alt="" class="img">
            <span class="span">{{item}}</span>
          </li>
        </div>
        <img src="../assets/simple2-img/top.png" alt="" class="img2">
      </ul>
    </div>
</template>

<script>
    import blure2 from '../assets/simple2-img/img1.png'
    import focus2 from '../assets/simple2-img/focus1.png'
    import int1 from './int1'
    import int2 from './int2'
    import int3 from './int3'
    import int4 from './int4'
    import connect from "./call/connector"
    export default {
        name: "int-page",
        data(){
          return{
            rightBtn:['低通滤波','高通滤波','参量均衡','自动增益'],
            img1:blure2,
            img2:focus2,
            tabView: "int1",
            skip1:0,
            skip2:1,
          }
        },
        methods:{
          cut(a,index){
            let imgs=document.querySelectorAll(".img")
            let spans=document.querySelectorAll(".span")
            for(var i=0;i<imgs.length;i++){
              imgs[i].src=this.img1;
              spans[i].style.color="#fff"
            }
            a.currentTarget.firstElementChild.src=this.img2;
            a.currentTarget.childNodes[2].style.color="#08a2f9";
            this.tabView = `int${index}`;
          }
        },
        mounted(){
          let lis=document.querySelectorAll('.li1')
          for(let n=0;n<lis.length;n++){
            document.querySelectorAll('.li1')[n].firstElementChild.src=this.img1
            document.querySelectorAll('.li1')[n].lastElementChild.style.color="#fff"
          }
          document.querySelectorAll('.li1')[0].firstElementChild.src=this.img2
          document.querySelectorAll('.li1')[0].lastElementChild.style.color="#08a2f9"
          if(this.$route.query.id!=undefined){
            let lis=document.querySelectorAll('.li1')
            for(let u=0;u<lis.length;u++){
              document.querySelectorAll('.li1')[u].firstElementChild.src=this.img1
              document.querySelectorAll('.li1')[u].lastElementChild.style.color="#fff"
            }
            if(this.$route.query.id.name=="低通滤波"){
              document.querySelectorAll('.li1')[0].firstElementChild.src=this.img2
              document.querySelectorAll('.li1')[0].lastElementChild.style.color="#08a2f9"
              this.tabView="int1"
            }else if(this.$route.query.id.name=="高通滤波"){
              document.querySelectorAll('.li1')[1].firstElementChild.src=this.img2
              document.querySelectorAll('.li1')[1].lastElementChild.style.color="#08a2f9";
              this.tabView="int2"
            }else if(this.$route.query.id.name=="参量均衡"){
              document.querySelectorAll('.li1')[2].firstElementChild.src=this.img2
              document.querySelectorAll('.li1')[2].lastElementChild.style.color="#08a2f9";
              this.tabView="int3"
            }else if(this.$route.query.id.name=="自动增益"){
              document.querySelectorAll('.li1')[3].firstElementChild.src=this.img2
              document.querySelectorAll('.li1')[3].lastElementChild.style.color="#08a2f9";
              this.tabView="int4"
            }
          }
        },
        created(){
          if(this.$route.query.id!=undefined&&this.$route.query.id!=null){
            this.skip1=this.$route.query.id.gallery
            this.skip2=Number(this.skip1)+1
          }else{
            if(localStorage.getItem('gallery')!==undefined&&localStorage.getItem('gallery')!==null){
              console.log(localStorage.getItem('gallery'))
              this.skip2=Number(localStorage.getItem('gallery'))+1
              this.skip1=localStorage.getItem('gallery')
            }else{
              this.skip1=0
              this.skip2=1
            }
          }
          localStorage.setItem('gallery',this.skip1)
        },
        components: {
          int1,
          int2,
          int3,
          int4
        }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/int.less";
</style>
