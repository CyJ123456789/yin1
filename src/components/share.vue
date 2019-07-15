<template>
 <ul class="u1">
   <li v-for="(item,index) in centerlist">
     <p @click="btnJump($event)">
       <span>{{item}}</span>
     </p>
   </li>
   <p class="p1" @click="btnJump($event)">
     <span>矩阵</span>
   </p>
 </ul>
</template>

<script>
    import connect from "./call/connector"
    export default {
      name: "share",
      data () {
        return {
          centerlist:["自动混音","掩蔽器","啸叫抑制","噪音抑制",]
        }
      },
      methods:{
        btnJump(e){
          if(e.target.innerHTML=="自动混音"){
            connect.$emit('phone',"zidonghunyin")
            this.$router.push({name:'hun'})
          }else if(e.target.innerHTML=="掩蔽器"){
            connect.$emit('phone',"yanbiqi")
            this.$router.push({name:'yanbiqi'})
          }else if(e.target.innerHTML=="啸叫抑制"){
            connect.$emit('phone',"xiaojiaoyizhi")
            this.$router.push({name:'xiaojiao'})
          }else if(e.target.innerHTML=="噪音抑制"){
            connect.$emit('phone',"zaoshengyizhi")
            this.$router.push({name:'zaosheng'})
          }else{
            connect.$emit('phone',"")
            this.$router.push({name:'juzheng'})
          }
        }
      }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .u1{
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding-top: 10px;
    p.p1{
      width: 90%;
      height: 43%;
      position: relative;
      margin: 0 auto;
      background: url("../assets/centerbig.png");
      background-size: 100% 100%;
      span{
        color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 30%;
        box-sizing: border-box;
      }
    }
    li{
      width: 100%;
      height: 12%;
      margin-bottom: 3px;
      p{
        width: 90%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        background: url("../assets/centersmall.png") no-repeat;
        background-size: 100% 100%;
        span{
          position: absolute;
          height: 100%;
          box-sizing: border-box;
          padding-top: 2%;
          width: 100%;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
</style>
