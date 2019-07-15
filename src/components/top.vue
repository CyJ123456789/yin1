<template>
 <div class="navtop">
   <p></p>
   <ul id="u1">
     <router-link  :to="{name:item.name}" class="a" v-for="(item,index) in toplist" :key="index" @click.native='colorShow($event)'>{{item.text}}</router-link>
   </ul>
   <ol class="u1">
     <li class="showAlert1" @click="alert(data[0])">连接</li>
     <li class="showAlert2" @click="alert(data[1])">设置</li>
   </ol>
 </div>
</template>

<script>
    import connect from "./call/connector"
    export default {
        name: "top",
        data(){
          return{
            toplist:[
              {"name":'index',"text":'首页'},
              {"name":'int',"text":'输入'},
              {"name":'hun',"text":'自动混音'},
              {"name":'yanbiqi',"text":'掩蔽器'},
              {"name":'xiaojiao',"text":'啸叫抑制'},
              {"name":'zaosheng',"text":'噪声抑制'},
              {"name":'juzheng',"text":'矩阵'},
              {"name":'out',"text":'输出'},
            ],
            data:["lianjie","shezhi"]
          }
        },
        methods:{
          colorShow(e){
            let as=document.querySelectorAll('.a');
            for(let i=0;i<as.length;i++){
              as[i].style.color="#fff"
            }
            e.target.style.color="#08a2f9";
          },
          alert(data){
            console.log(data)
            connect.$emit('phone7',data)
          },
        },
        mounted(){
          document.querySelectorAll('.a')[0].style.color="#08a2f9";
          connect.$on('phone',function(msg){
            let as=document.querySelectorAll('.a');
            for(let i=0;i<as.length;i++){
              as[i].style.color="#fff"
            }
            if(msg=="shuru"){
              document.querySelectorAll('.a')[1].style.color="#08a2f9";
            }else if(msg=="shuchu"){
              document.querySelectorAll('.a')[7].style.color="#08a2f9";
            }else if(msg=="zidonghunyin"){
              document.querySelectorAll('.a')[2].style.color="#08a2f9";
            }else if(msg=="yanbiqi"){
              document.querySelectorAll('.a')[3].style.color="#08a2f9";
            }else if(msg=="xiaojiaoyizhi"){
              document.querySelectorAll('.a')[4].style.color="#08a2f9";
            }else if(msg=="zaoshengyizhi"){
              document.querySelectorAll('.a')[5].style.color="#08a2f9";
            }else{
              document.querySelectorAll('.a')[6].style.color="#08a2f9";
            }
          })
        }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration:none;
    out-line: none;
    color: #fff;
  }
  div.navtop{
    width: 100%;
    height: 15%;
    position: relative;
    background-color: #2E2D33;
    p {
      width: 100%;
      height: 1px;
    }
    ul {
      list-style-type: none;
      width: 65%;
      background-color: #2F2E33;
      margin: 0 auto;
      margin-top: 40px;
      display: flex;
      box-shadow: -5px 0 5px #1F1E23, 0px 0px 1px #fff, 0 10px 10px #1F1E23, 6px 0 0px #1F1E23;
      justify-content: space-around;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      li {
        color: #fff;
        font-size: 1.1rem;
      }
    }
    .l1{
      color: #08a2f9;
    }
    ol.u1 {
      list-style-type: none;
      position: absolute;
      width: 13%;
      height: 30px;
      top: 50px;
      left: 87%;
      box-shadow: none;
      display: flex;
      li {
        width: 50px;
        height: 30px;
        line-height: 30px;
        font-size: .8rem;
        border: 1px solid #100f10;
        border-top: 1px solid #626163;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        margin-left: 10px;
      }
    }
    p.p1 {
      width: 10%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 75px;
      z-index: 2;
      left: 87%;
      span {
        color: #fff;
        font-size: .8rem;
      }
    }
  }
</style>
