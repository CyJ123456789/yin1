<template>
    <div class="index">
      <ul class="left">
        <li v-for="(item,index) in list">
          <p class="p1" @click="pageSkip1({'gallery':index,'name':item.ditong})">
            <img src="../assets/duijiao.png" alt="">
            <span class="sp1">
              <img src="../assets/btn.png" alt="">
              <span>{{item.ditong}}</span>
            </span>
          </p>
          <p @click="pageSkip1({'gallery':index,'name':item.gaotong})">
            <img src="../assets/jiaodui.png" alt="">
            <span class="sp1">
              <img src="../assets/btn.png" alt="">
              <span>{{item.gaotong}}</span>
            </span>
          </p>
          <p @click="pageSkip1({'gallery':index,'name':item.junheng})">
            <img src="../assets/heng.png" alt="">
            <span class="sp1">
              <img src="../assets/btn.png" alt="">
              <span>{{item.junheng}}</span>
            </span>
          </p>
          <p @click="pageSkip1({'gallery':index,'name':item.yaxian})">
            <img src="../assets/heng.png" alt="">
            <span class="sp1">
              <img src="../assets/btn.png" alt="">
              <span>{{item.yaxian}}</span>
            </span>
          </p>
        </li>
      </ul>
      <div class="center">
        <component :is="tabView"></component>
      </div>
      <ul class="left">
        <li v-for="(item,index) in list1">
          <p class="p1">
            <img src="../assets/duijiao.png" alt="">
            <span class="sp1">
            <img src="../assets/btn.png" alt="">
          </span>
          </p>
          <p>
            <img src="../assets/jiaodui.png" alt="">
            <span class="sp1">
            <img src="../assets/btn.png" alt="">
          </span>
          </p>
          <p @click="pageSkip2(index)">
            <img src="../assets/heng.png" alt="">
            <span class="sp1">
            <img src="../assets/btn.png" alt="">
            <span>{{item.junheng}}</span>
          </span>
          </p>
          <p>
            <img src="../assets/heng.png" alt="">
            <span class="sp1">
            <img src="../assets/btn.png" alt="">
          </span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    import share from "./share.vue";
    import connect from "./call/connector"
    export default {
        name: "index-page",
        data () {
          return {
            tabView: "share",
            list:[
              {"serial":"","ditong":"低通滤波","gaotong":"高通滤波","junheng":"参量均衡","yaxian":"自动增益"},
              {"serial":"","ditong":"低通滤波","gaotong":"高通滤波","junheng":"参量均衡","yaxian":"自动增益"},
              {"serial":"","ditong":"","gaotong":"","junheng":"","yaxian":""},
              {"serial":"","ditong":"","gaotong":"","junheng":"","yaxian":""},
            ],
            list1:[
              {"serial":"","ditong":"","gaotong":"","junheng":"参量均衡","yaxian":""},
              {"serial":"","ditong":"","gaotong":"","junheng":"参量均衡","yaxian":""},
              {"serial":"","ditong":"","gaotong":"","junheng":"参量均衡","yaxian":""},
              {"serial":"","ditong":"","gaotong":"","junheng":"参量均衡","yaxian":""},
            ]
          }
        },
        methods:{
          pageSkip1(data){
            if(data.name!=""){
              connect.$emit('phone',"shuru")
              this.$router.push({name:'int',query:{id:data}});
            }
          },
          pageSkip2(data1){
            connect.$emit('phone',"shuchu")
            this.$router.push({name:'out',query:{id:data1}});
          }
        },
        components: {
          share
        }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  div.index{
    background-color: #2d2c32;
    height: 37%;
    display: flex;
    ul.left{
      list-style-type: none;
      display: flex;
      text-align: center;
      width: 45%;
      height: 100%;
      li{
        width: 24%;
        height: 100%;
        margin-right: 6px;
        p{
          position: relative;
          margin-top: 1.4px;
          width: 100%;
          height: 24.5%;
          background-color: yellow;
          img{
            width: 100%;
            height: 100%;
          }
          span.sp1{
            position: absolute;
            bottom: 0;
            left: 1%;
            width:98%;
            height: 35px;
            img{
              width: 95%;
              height: 30px;
            }
            span{
              width: 100%;
              height: 30px;
              line-height: 30px;
              text-align: center;
              position: absolute;
              top: 0;
              left: 0;
              color: #fff;
            }
          }
        }
      }
    }
    div.center{
      width: 10%;
      height: 100%;
      margin-right: .5%;
      border: 2px solid #19181c;
      border-radius: 10px;
    }

  }
</style>
