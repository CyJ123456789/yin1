<template>
  <div class="footer1">
    <ul class="left">
      <li>
        <p @click="mute($event,0)" class="jinYin">静音</p>
        <div class="content1">
          <div  class="p1" id="contrast">
            <progress class="pr" :value="peak1" max="100" ></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12"   :min="-100" v-model="value1" direction='vertical' @drag-end="end(0,value1)"  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value1}}</span>
          </div>
        </div>
        <p class="tongdao">MIC1</p>
      </li>
      <li>
        <p @click="mute($event,1)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak2" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12" :min="-100" v-model="value2" direction='vertical' @drag-end="end(1,value2)"  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value2}}</span>
          </div>
        </div>
        <p class="tongdao">MIC2</p>
      </li>
      <li>
        <p @click="mute($event,2)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak3" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12" :min="-100" v-model="value3" direction='vertical' @drag-end="end(2,value3)" height-slider="280px" :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value3}}</span>
          </div>
        </div>
        <p class="tongdao">LINE1</p>
      </li>
      <li>
        <p @click="mute($event,3)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak4" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12"  :min="-100" v-model="value4" direction='vertical' @drag-end="end(3,value4)"  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value4}}</span>
          </div>
        </div>
        <p class="tongdao">LINE2</p>
      </li>
    </ul>
    <div class="center">
      <div class="theme">

      </div>
    </div>
    <ul class="left">
      <li>
        <p @click="mute($event,100)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak5" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12"  :min="-100" v-model="value5" @drag-end="end(100,value5)" direction='vertical'  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value5}}</span>
          </div>
        </div>
        <p class="tongdao">OUT1</p>
      </li>
      <li>
        <P @click="mute($event,101)" class="jinYin">静音</P>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak6" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12" :min="-100" v-model="value6" @drag-end="end(101,value6)" direction='vertical' :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value6}}</span>
          </div>
        </div>
        <p class="tongdao">OUT2</p>
      </li>
      <li>
        <p @click="mute($event,102)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak7" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12" :min="-100" v-model="value7" @drag-end="end(102,value7)" direction='vertical'  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value7}}</span>
          </div>
        </div>
        <p class="tongdao">OUT3</p>
      </li>
      <li>
        <p @click="mute($event,103)" class="jinYin">静音</p>
        <div class="content1">
          <div class="p1">
            <progress class="pr" :value="peak8" max="100"></progress>
            <img src="../assets/yinliang3.png" alt="">
          </div>
          <div class="p2">
            <img src="../assets/yinliang4.png" alt="">
            <vue-slider :max="12" :min="-100" v-model="value8" @drag-end="end(103,value8)" direction='vertical'  :dot-size="30" height="90%" width="auto">
              <template slot="tooltip" slot-scope="tooltip" >
                <img src="../assets/slide.png" alt="" style="display: none">
              </template>
            </vue-slider>
            <span style="display: block;color: #fff;width: 100%;text-align: center;margin-top: 5px">{{value8}}</span>
          </div>
        </div>
        <p class="tongdao">OUT4</p>
      </li>
    </ul>
  </div>
</template>

<script>

    import vueSlider from 'vue-slider-component';
    import connect from "./call/connector"
    export default {
        name: "footPage",
        data () {
          return {
            jingyin:[false,false,false,false,false,false,false,false],
            value1: -100,
            value2:-100,
            value3:-100,
            value4:-100,
            value5:-100,
            value6:-100,
            value7:-100,
            value8:-100,
            peak1:20,
            peak2:20,
            peak3:30,
            peak4:40,
            peak5:50,
            peak6:60,
            peak7:70,
            peak8:90,
            temp:0,
            temp1:0,
            i:0,
            i1:0,
            judge:false,
            IP:'',
            biaozhi:false,
            clearTime:0,
            prHeight:'',
            num3:0,
            tabView: "simple1",
            navlist:["首页","输入","自动混音","啸叫抑制","嗓音抑制","矩阵","输出","电平","掩蔽器"],
            result:[],
            time1:'',
          }
        },
        mounted(){
          setInterval(()=>{
            let  prs=document.querySelectorAll('.pr')
            this.prHeight=parseInt(document.querySelector('#contrast').offsetHeight*.82)+"px"
            for(var z=0;z<prs.length;z++){
              prs[z].style.width=this.prHeight
            }
          },100)
          connect.$on('phone10',(msg)=> {
            if (msg == "我是谁") {
              this.temp=0
              this.IP = ''
              this.judge = false
            }else{
              this.IP = msg
              this.judge = true
              clearInterval(this.time1)
              localStorage.setItem('ip', this.IP);
              this.biaozhi=true
            }
            if(this.IP==""){

            }else{
              connect.$emit('phone30',this.judge)
              connect.$emit('phone20',"连接成功")
              let time2=setInterval(()=>{
                if(this.clearTime>3){
                  clearInterval(time2)
                  this.clearTime=0
                }else{
                  this.$.post(
                    `http://${this.IP}`,
                    {control:2},
                    (result)=>{
                      if(this.num3==2){
                        let result20=this.getData(result)
                        this.result=result20
                        console.log(result20)
                        let jinButtons=document.querySelectorAll(".jinYin")
                        this.value1=result20.LevelControl[0].value
                        this.value2=result20.LevelControl[1].value
                        this.value3=result20.LevelControl[2].value
                        this.value4=result20.LevelControl[3].value
                        this.value5=result20.LevelControl[9].value
                        this.value6=result20.LevelControl[10].value
                        this.value7=result20.LevelControl[11].value
                        this.value8=result20.LevelControl[12].value
                        if(result20.channel[0].mute==1){
                          this.jingyin[0]=true
                          jinButtons[0].style.color="red"
                        }
                        if(result20.channel[1].mute==1){
                          this.jingyin[1]=true
                          jinButtons[1].style.color="red"
                        }
                        if(result20.channel[2].mute==1){
                          this.jingyin[2]=true
                          jinButtons[2].style.color="red"
                        }
                        if(result20.channel[3].mute==1){
                          this.jingyin[3]=true
                          jinButtons[3].style.color="red"
                        }
                        if(result20.channel[9].mute==1){
                          this.jingyin[4]=true
                          jinButtons[4].style.color="red"
                        }
                        if(result20.channel[10].mute==1){
                          this.jingyin[5]=true
                          jinButtons[5].style.color="red"
                        }
                        if(result20.channel[11].mute==1){
                          this.jingyin[6]=true
                          jinButtons[6].style.color="red"
                        }
                        if(result20.channel[12].mute==1){
                          this.jingyin[7]=true
                          jinButtons[7].style.color="red"
                        }
                        localStorage.setItem('response',JSON.stringify(result20))
                      }
                      this.num3+=1
                    }
                  )
                }
                this.clearTime++
              },50)
             this.time1=setInterval(()=>{
                this.$.ajax({
                  url:`http://${this.IP}`,
                  data:{control:4},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    if(this.IP==""){
                      connect.$emit('phone40',"断开连接")
                      clearInterval(this.time1)
                      this.biaozhi=0
                    }else{
                      let encrypted=this.getData(err.responseText)
                      this.peak1=encrypted.Meter[0].Rms+64;
                      this.peak2=encrypted.Meter[1].Rms+64;
                      this.peak3=encrypted.Meter[2].Rms+64;
                      this.peak4=encrypted.Meter[3].Rms+64;
                      this.peak5=encrypted.Meter[9].Rms+64;
                      this.peak6=encrypted.Meter[10].Rms+64;
                      this.peak7=encrypted.Meter[11].Rms+64;
                      this.peak8=encrypted.Meter[12].Rms+64;
                      this.temp=1;
                      this.i=0;
                    }
                  },
                })
                if(this.temp==1){
                  connect.$emit('phone20',"连接成功")
                }else{
                  connect.$emit('phone40',"断开连接")
                }
                this.i++;
               // this.temp=0
                if(this.i==25){
                  this.temp=0;
                  if(this.i==200){
                    this.i=0
                  }
                 // this.i=0;
                }
              },200);
            }
          })
        },
        methods:{
          mute(e,int){
            let tongdao=0;
            if(int==100){
              tongdao=4
            }else if(int==101){
              tongdao=5
            }else if(int==102){
              tongdao=6
            }else if(int==103){
              tongdao=7
            }else{
              tongdao=int
            }
            if(this.judge){
              if(this.jingyin[tongdao]){
                e.target.style.color="#fff";
                this.jingyin[tongdao]=false;
                let silence=`<Channel no="${int}" mute="0">0</Channel>`
                let encrypted=this.coding(silence)
                this.$.ajax({
                  url: `http://${this.IP}`,
                  data:{control:1,commd:encrypted},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    console.log(err)
                    let IP=this.IP
                    let silence1=`<Channel no="${int}" mute="0">0</Channel>`
                    console.log(silence1)
                    let encryped1=this.coding(silence1)
                    if(err.statusText=="error"){
                      console.log("出错了")
                      setTimeout(()=>{
                        this.$.ajax({
                          url: `http://${IP}`,
                          data:{control:1,commd:encryped1},
                          type: "POST",
                          dataType:'json',
                          error:(err)=>{
                            console.log(silence1)
                            console.log("问题解决")
                            console.log(err)
                          }
                        })
                      },1500)
                    }
                  }
                })
              }else{
                let silence=`<Channel no="${int}" mute="1">0</Channel>`
                let encrypted=this.coding(silence)
                e.target.style.color="red";
                this.$.ajax({
                  url:`http://${this.IP}`,
                  data:{control:1,commd:encrypted},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    let silence2=`<Channel no="${int}" mute="1">0</Channel>`
                    console.log(silence2)
                    let encrypted2=this.coding(silence2)
                    let ip=this.IP
                    console.log(err)
                    if(err.statusText=="error"){
                      console.log("出错了")
                      setTimeout(()=>{
                        this.$.ajax({
                          url:`http://${ip}`,
                          data:{control:1,commd:encrypted2},
                          type: "POST",
                          dataType:'json',
                          error:(err)=>{
                            console.log(silence2)
                            console.log("问题解决")
                            console.log(err)
                          }
                        })
                      },1500)
                    }
                  }
                })
                this.jingyin[tongdao]=true;
              }
            }
          },
          end(data,value){
            let silence=`<LevelControl channel="${data}">${value}</LevelControl>`
            let encrypted=this.coding(silence)
            this.$.ajax({
              url:`http://${this.IP}`,
              data:{control:1,commd:encrypted},
              type: "POST",
              dataType:'json',
              error:(err)=>{
                let IP1=this.IP
                let silence3=`<LevelControl channel="${data}">${value}</LevelControl>`
                let encrypted3=this.coding(silence3)
                console.log(err)
                if(err.statusText=="error"){
                  console.log("出错了")
                  setTimeout(()=>{
                    this.$.ajax({
                      url:`http://${IP1}`,
                      data:{control:1,commd:encrypted3},
                      type: "POST",
                      dataType:'json',
                    })
                  },1500)
                }
              }
            })
          },
        },
        components:{
          vueSlider
        }
    }
</script>

<style lang="less">
  @import "../assets/css/footer.less";
  *{
    margin: 0;
    padding: 0;
  }
  .vue-slider-component{
    position: absolute;
    top:-2px;
    left: 22%;
    width: 43px;
    height: 200px;
    div.vue-slider{
      background-color: #000;
      .vue-slider-always{
        background-color: transparent;
        border: none;
        .vue-slider-dot-handle{
          background-color: transparent;
          background-image: url('../assets/slide.png');
          background-size:100% 100%;
          width: 30px;
          height:35px;
          border-radius: 10px;
          border: none;
          margin-left: -10px;
          margin-top: -3px;
        }
      }
    }
  }
</style>
