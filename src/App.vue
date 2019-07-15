<template>
  <div id="app">
    <hd-nav></hd-nav>
    <hr>
    <router-view class="center"/>
    <hr>
    <ft-nav class="footer"></ft-nav>
    <div class="alert1" ref="box">
      <p class="h1">
        <span class="h2">设备名称:</span>
        <input class="h3" type="text" v-model="designation" placeholder="不填也可以" >
      </p>
      <p class="h4">
        <span class="h5">IP地址:</span>
        <input class="h6" type="text" v-model="IP" placeholder="192.168.0.208">
      </p>
      <p class="h7" @click="connect1" style="text-align: center">连接</p>
    </div>
    <div class="alert2">
      <p class="n1">
        <span class="n2">设备名称:</span>
        <input type="text" class="n3" v-model="designation" placeholder="不填也可以">
      </p>
      <p class="n4">
        <span class="n5"> IP地址:</span>
        <input class="n6" type="text" v-model="IP" placeholder="192.168.0.208">
      </p>
      <p class="n7">
        <span class="n8">子网掩码:</span>
        <input type="text" class="n9" placeholder="不填也可以">
      </p>
      <p class="n10">
        <span class="n11">默认网管:</span>
        <input type="text" class="n13" placeholder="不填也可以">
      </p>
      <p class="n12" @click="change">
        更改
      </p>
    </div>
    <p class="state">
      <img :src="state2" class="img20">
    </p>
  </div>
</template>
<script>
  import connect from "./components/call/connector"
  import link from './assets/link.png'
  import disconnect from './assets/break.png'
  export default {
    name: 'App',
    data(){
      return{
        designation:'',
        IP:'192.168.0.208',
        subnet:'',
        gateway:'',
        olIP:'',
        state1:link,
        state2:disconnect,
        response:[],
        biaozhi:false
      }
    },
    methods:{
      connect1(){
        if(document.querySelector('.img20').src=='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
          connect.$emit('phone10',this.IP)
          document.querySelector('.alert1').style.display="none"
          document.querySelector('.alert1').style.right="-270px";
        }else{
          document.querySelector('.alert1').style.display="none"
          document.querySelector('.alert1').style.right="-270px";
        }
      },
      change(){
        this.biaozhi=false
        let silence=`<Config ip_addr="${this.IP}" subnet_mask="${this.subnet}" gateway="${this.gateway}" id_name=\\"%s\\"></Config>`
        let encrypted=this.coding(silence)
        let oldIP = '';
        if(localStorage.getItem('ip')==undefined){
          oldIP = '192.168.0.208'
        }else{
          oldIP = localStorage.getItem('ip')
        }
        console.log(oldIP)
        this.$.ajax({
          url:`http://${oldIP}`,
          data:{control:1,commd:encrypted},
          type: "POST",
          dataType:'json',
          success:(res)=>{
            console.log(res)
          },
          error:(err)=>{
            console.log(err)
          }
        })
        document.querySelector('.alert2').style.right="-270px";
        document.querySelector('.alert2').style.display="none";
        connect.$emit('phone10',"我是谁")
        localStorage.setItem('ip', this.IP);
      },
      interrupt(){
        this.biaozhi=false
        document.querySelector('.img20').src=this.state2
        connect.$emit('phone10',"我是谁")
        this.response=null
        localStorage.setItem('response',this.response)
      }
    },
    created(){
      this.IP=localStorage.getItem('ip')
    },
    mounted(){
      connect.$on('phone7',function(msg){
        if(msg=="lianjie"){
          if(document.querySelector('.img20').src=='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
            document.querySelector('.alert1').style.display="block";
            document.querySelector('.alert1').style.right="0px";
          }
        }else{
          document.querySelector('.alert2').style.display="block"
          document.querySelector('.alert2').style.right="0px";
        }
      }),
      connect.$on('phone20',(msg)=>{
        document.querySelector('.img20').src=this.state1
      })
      connect.$on('phone40',(msg)=>{
        document.querySelector('.img20').src=this.state2
      })
      connect.$on('phone11',(msg)=>{
        document.querySelector('.img20').src=this.state2
        connect.$emit('phone10',"我是谁")
      })
      let h1=document.querySelector('.h1')
      let h2=document.querySelector('.h2')
      let h3=document.querySelector('.h3')
      let h4=document.querySelector('.h4')
      let h5=document.querySelector('.h5')
      let h6=document.querySelector('.h6')
      let h7=document.querySelector('.h7')
      let n1=document.querySelector('.n1')
      let n2=document.querySelector('.n2')
      let n3=document.querySelector('.n3')
      let n4=document.querySelector('.n4')
      let n5=document.querySelector('.n5')
      let n6=document.querySelector('.n6')
      let n7=document.querySelector('.n7')
      let n8=document.querySelector('.n8')
      let n9=document.querySelector('.n9')
      let n10=document.querySelector('.n10')
      let n11=document.querySelector('.n11')
      let n12=document.querySelector('.n12')
      let n13=document.querySelector('.n13')
      let alert1=document.querySelector('.alert1')
      let alert2=document.querySelector('.alert2')
      let show1=document.querySelector('.showAlert1')
      let show2=document.querySelector('.showAlert2')
      document.addEventListener('click',(e)=>{
        if(e.target!=alert1&&e.target!=show1&&e.target!=h1&&e.target!=h2&&e.target!=h3&&e.target!=h4&&e.target!=h5&&e.target!=h6&&e.target!=h7){
          e.stopPropagation()
          document.querySelector('.alert1').style.display="none"
          document.querySelector('.alert1').style.right="-270px";
        }
        if(e.target!=alert2&&e.target!=show2&&e.target!=n1&&e.target!=n2&&e.target!=n3&&e.target!=n4&&e.target!=n5&&e.target!=n6&&e.target!=n7&&e.target!=n8&&e.target!=n9&&e.target!=n10&&e.target!=n11&&e.target!=n12&&e.target!=n13){
          document.querySelector('.alert2').style.display="none"
          document.querySelector('.alert2').style.right="-270px";
        }
      })
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  html,body,#app{
    height: 100%;
  }
  #app:hover{
    cursor: pointer;
  }
  #app{
    width: 100%;
    height:100%;
    background-color: #2d2c32;
    position: relative;
    .state{
      position: absolute;
      top: 9%;
      left: 83%;
      display: flex;
      span{
        color: #fff;
        font-size: .8rem;
      }
      img{
        margin-left: 15px;
        width: 20px;
        height: 20px;
        margin-top: 0px;
      }
    }
    .duan{
      position: absolute;
      left: 93%;
      top: 25px;
      width: 50px;
      height: 30px;
      line-height: 30px;
      font-size: .8rem;
      border: 1px solid #100f10;
      border-top: 1px solid #626163;
      border-radius: 5px;
      color: #fff;
      text-align: center;
    }
    .alert1{
      width:270px;
      height: 84%;
      position: absolute;
      top: 16%;
      right: -270px;
      background-color:  #2d2c32;
      z-index:30;
      display: none;
      transition:all 0.5s;
      p{
        display: flex;
        margin-top: 30px;
        span{
          width: 70px;
          color: #fff;
          font-size: .7rem;
          text-align: right;
        }
        input{
          padding-left: 10px;
          margin-left: 10px;
          width: 120px;
        }
      }
      .h7{
        width: 60px;
        height: 30px;
        line-height: 30px;
        font-size: .8rem;
        border-radius: 5px;
        background-color: #08a2f9;
        margin: 0 auto;
        margin-top: 30px;
        box-sizing: border-box;
        padding-left: 6%;
      }
    }
    .alert2{
      width:270px;
      height: 84%;
      position: absolute;
      top:16%;
      right:-270px;
      background-color:  #2d2c32;
      z-index: 30;
      display: none;
      transition:all 0.5s;
      p{
        display: flex;
        margin-top: 30px;
        span{
          width: 70px;
          color: #fff;
          font-size: .7rem;
          text-align: right;
        }
        input{
          padding-left: 10px;
          margin-left: 10px;
          width: 120px;
        }
      }
      .n12{
        width: 60px;
        height: 30px;
        line-height: 30px;
        font-size: .8rem;
        border-radius: 5px;
        background-color: #08a2f9;
        margin: 0 auto;
        margin-top: 30px;
        box-sizing: border-box;
        padding-left: 6%;
      }
    }
  }
  .center{
    width: 100%;
    height: 37%;
  }
  .footer{
    width: 100%;
    height: 46%;
  }
</style>
