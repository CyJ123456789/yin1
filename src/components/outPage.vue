<template>
    <div class="out">
      <div class="chart">
        <out3 :channel="skip"></out3>
      </div>
      <ul>
        <p class="outIndex">
          <span class="span5">OUT{{skip1}}</span>
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
    import out3 from '../components/out3'
    export default {
        name: "out-page",
        data(){
          return{
            rightBtn:['','','参量均衡器',''],
            img1:blure2,
            img2:focus2,
            tabView: "out3",
            skip:100,
            skip1:1
          }
        },
        created(){
          if(this.$route.query.id==0){
            this.skip=100
            this.skip1=1
          }else if(this.$route.query.id==1){
            this.skip=101
            this.skip1=2
          }else if(this.$route.query.id==2){
            this.skip=102
            this.skip1=3
          }else if(this.$route.query.id==3){
            this.skip=103
            this.skip1=4
          }else{
            if(localStorage.getItem('gallery1')!=undefined){
              this.skip=localStorage.getItem('gallery1')
              this.skip1=localStorage.getItem('gallery1')-99
            }else{
              this.skip=100
              this.skip1=1
            }
          }
          localStorage.setItem('gallery1',this.skip)
        },
        mounted(){
          document.querySelectorAll('.li1')[2].firstElementChild.src=this.img2
        },
        components: {
          out3
        }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/out.less";
</style>
