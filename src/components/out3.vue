<template>
  <div class="out3">
    <div class="band1">
      <p class="controlBand">
        <span @click="minus3" class="num">-</span>
        <span style="color: #fff">频带{{band1+1}}</span>
        <span @click="plus3" class="num">+</span>
      </p>
      <div style="width: 110px;margin-left: 40%;margin-top: 10px">
        <div class="col-lg-12 control-section">
          <div class="slider-content-wrapper1">
            <div class="slider_container" style="position: relative;height: 40px">
              <div class="slider-labeltext slider_userselect" style="position: absolute;top:40%;left: -60px;color:#fff;font-size: .7rem">频率(Hz)</div>
              <p v-if="band1==0" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P1}}</p>
              <p v-else-if="band1==1" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P2}}</p>
              <p v-else-if="band1==2" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P3}}</p>
              <p v-else-if="band1==3" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P4}}</p>
              <p v-else-if="band1==4" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P5}}</p>
              <p v-else-if="band1==5" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P6}}</p>
              <p v-else-if="band1==6" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{P7}}</p>
              <p style="position: absolute;top:0;left: 110%">
                <img src="../assets/plus.png" @click="plus4" style="position: absolute;top: 10px;left: 0">
                <img src="../assets/minus.png" @click="minus4" style="position: absolute;top: 25px;left: 0">
              </p>
              <ejs-slider v-if="band1==0" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P1" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==1" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P2" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==2" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P3" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==3" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P4" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==4" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P5" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==5" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P6" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==6" id="gradient_slide30" min=20 max=20000 type='MinRange' v-model="P7" v-on:changed="jiesuan1"></ejs-slider>
            </div>
            <div class="slider_container" style="position: relative;height: 40px">
              <div class="slider-labeltext slider_userselect" style="position: absolute;top:40%;left: -60px;color:#fff;font-size: .7rem">增益(dB)</div>
              <p style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{xiaoye[band1]}}</p>
              <ejs-slider id="gradient_slide30" min=-30 max=15 type='MinRange' v-model="xiaoye[band1]" v-on:changed="jiesuan1"></ejs-slider>
            </div>
            <div class="slider_container" style="position: relative;height: 40px">
              <div class="slider-labeltext slider_userselect" style="position: absolute;top:40%;left: -60px;color:#fff;font-size: .7rem">OCT</div>
              <p v-if="band1==0" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O1}}</p>
              <p v-else-if="band1==1" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O2}}</p>
              <p v-else-if="band1==2" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O3}}</p>
              <p v-else-if="band1==3" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O4}}</p>
              <p v-else-if="band1==4" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O5}}</p>
              <p v-else-if="band1==5" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O6}}</p>
              <p v-else-if="band1==6" style="position: absolute;top:0;left: 45%;color: #fff;font-size: .7rem">{{O7}}</p>
              <p style="position: absolute;top:0;left: 110%">
                <img src="../assets/plus.png" @click="plus5" style="position: absolute;top: 10px;left: 0">
                <img src="../assets/minus.png" @click="minus5" style="position: absolute;top: 25px;left: 0">
              </p>
              <ejs-slider v-if="band1==0" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O1" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==1" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O2" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==2" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O3" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==3" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O4" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==4" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O5" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==5" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O6" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==6" id="gradient_slide30" min=0.01 max=4 step="0.01" type='MinRange' v-model="O7" v-on:changed="jiesuan1"></ejs-slider>
            </div>
            <div class="slider_container" style="position: relative;height: 10px;width: 60px;margin-left: 15px">
              <p style="position: absolute;top:20px;left: -55px;color: #fff">关闭</p>
              <p style="position: absolute;top:20px;left: 90px;width: 40px;color: #fff;">开启</p>
              <ejs-slider v-if="band1==0" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open1" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==1" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open2" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==2" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open3" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==3" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open4" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==4" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open5" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==5" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open6" v-on:changed="jiesuan1"></ejs-slider>
              <ejs-slider v-else-if="band1==6" id="gradient_slide31" min=0 max=1  type='MinRange' v-model="open7" v-on:changed="jiesuan1"></ejs-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center2">
      <div class="move">
        <hr>
        <p class="p20">
          <span class="span1">1</span>
        </p>
        <p class="p21">
          <span class="span2">2</span>
        </p>
        <p class="p22">
          <span class="span3">3</span>
        </p>
        <p class="p23">
          <span class="span4">4</span>
        </p>
        <p class="p24">
          <span class="span5">5</span>
        </p>
        <p class="p25">
          <span class="span6">6</span>
        </p>
        <p class="p26">
          <span class="span7">7</span>
        </p>
      </div>
      <ul class="u8">
        <li>18</li>
        <li>12</li>
        <li>6</li>
        <li>0</li>
        <li>-6</li>
        <li>-12</li>
        <li>-18</li>
        <li>-21</li>
        <li>-27</li>
        <li>-33</li>
      </ul>
      <ul class="u7">
        <li v-for="(item,index) in vchart">
          <span v-for="(item1,index1) in item">
          </span>
        </li>
      </ul>
      <ul class="u9">
        <li style="box-sizing: border-box;padding-left: 1%">20</li>
        <li>1.4k</li>
        <li>2.8k</li>
        <li>4.3k</li>
        <li>5.7k</li>
        <li>7.1k</li>
        <li>8.5k</li>
        <li>9.9k</li>
        <li>11.4k</li>
        <li>12.8k</li>
        <li>14.2k</li>
        <li>15.6k</li>
        <li>17k</li>
        <li>18.5k</li>
        <li>20k</li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
    Vue.use(SliderPlugin);
    import { enableRipple } from '@syncfusion/ej2-base';
    enableRipple(true);
    export default {
        name: "out3",
        data(){
          return{
            vchart:[
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
            ],
            P1:1800, P2:4876,P3:7583,P4:10144,P5:12300,P6:15374,P7:17742,
            Z1:0,Z2:0,Z3:0,Z4:0,Z5:0,Z6:0,Z7:0,
            O1:0.05,O2:0.05,O3:0.05,O4:0.05,O5:0.05,O6:0.05,O7:0.05,
            open1:0,open2:0,open3:0,open4:0,open5:0,open6:0,open7:0,
            tongdao5:100,
            xiaoye:[0,0,0,0,0,0,0],
            index:0,
            band1:0,
            IP:'',
            response:[]
          }
        },
        watch:{
          xiaoye:{
            handler(val,oldVal){
              this.Z1=val[0];
              this.Z2=val[1];
              this.Z3=val[2];
              this.Z4=val[3];
              this.Z5=val[4];
              this.Z6=val[5];
              this.Z7=val[6];
            },
            deep: true,
          },
          P1(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p20').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p20').offsetWidth>20){
                let width=document.querySelector('.p20').offsetWidth
                document.querySelector('.p20').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p20').style.left="96.4%";
              }
            }else{
              document.querySelector('.p20').style.left=`${h}%`;
            }
          },
          Z1(val,oldVal){
            if(val<=0){
              document.querySelector('.p20').style.transform="rotate(180deg)";
              document.querySelector('.span1').style.transform="rotate(180deg)";
              document.querySelector('.p20').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p20').style.transform="rotate(0deg)";
              document.querySelector('.span1').style.transform="rotate(0deg)";
              document.querySelector('.p20').style.height=val*1.5+"%";
            }
          },
          O1(val,oldVal){
            document.querySelector('.p20').style.width=(20+val*1.7)+"px"
            document.querySelector('.span1').style.width=(20+val*1.7)+"px"
            document.querySelector('.span1').style.height=(20+val*1.7)+"px"
            document.querySelector('.span1').style.lineHeight=(20+val*1.7)+"px"
          },
          P2(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p21').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p21').offsetWidth>20){
                let width=document.querySelector('.p21').offsetWidth
                document.querySelector('.p21').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p21').style.left="96.4%";
              }
            }else{
              document.querySelector('.p21').style.left=`${h}%`;
            }
          },
          Z2(val,oldVal){
            if(val<=0){
              document.querySelector('.p21').style.transform="rotate(180deg)";
              document.querySelector('.span2').style.transform="rotate(180deg)";
              document.querySelector('.p21').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p21').style.transform="rotate(0deg)";
              document.querySelector('.span2').style.transform="rotate(0deg)";
              document.querySelector('.p21').style.height=val*1.5+"%";
            }
          },
          O2(val,oldVal){
            document.querySelector('.p21').style.width=(20+val*1.7)+"px"
            document.querySelector('.span2').style.width=(20+val*1.7)+"px"
            document.querySelector('.span2').style.height=(20+val*1.7)+"px"
            document.querySelector('.span2').style.lineHeight=(20+val*1.7)+"px"
          },
          P3(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p22').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p22').offsetWidth>20){
                let width=document.querySelector('.p22').offsetWidth
                document.querySelector('.p22').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p22').style.left="96.4%";
              }
            }else{
              document.querySelector('.p22').style.left=`${h}%`;
            }
          },
          Z3(val,oldVal){
            if(val<=0){
              document.querySelector('.p22').style.transform="rotate(180deg)";
              document.querySelector('.span3').style.transform="rotate(180deg)";
              document.querySelector('.p22').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p22').style.transform="rotate(0deg)";
              document.querySelector('.span3').style.transform="rotate(0deg)";
              document.querySelector('.p22').style.height=val*1.5+"%";
            }
          },
          O3(val,oldVal){
            document.querySelector('.p22').style.width=(20+val*1.7)+"px"
            document.querySelector('.span3').style.width=(20+val*1.7)+"px"
            document.querySelector('.span3').style.height=(20+val*1.7)+"px"
            document.querySelector('.span3').style.lineHeight=(20+val*1.7)+"px"
          },
          P4(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p23').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p23').offsetWidth>20){
                let width=document.querySelector('.p23').offsetWidth
                document.querySelector('.p23').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p23').style.left="96.4%";
              }
            }else{
              document.querySelector('.p23').style.left=`${h}%`;
            }
          },
          Z4(val,oldVal){
            if(val<0){
              document.querySelector('.p23').style.transform="rotate(180deg)";
              document.querySelector('.span4').style.transform="rotate(180deg)";
              document.querySelector('.p23').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p23').style.transform="rotate(0deg)";
              document.querySelector('.span4').style.transform="rotate(0deg)";
              document.querySelector('.p23').style.height=val*1.5+"%";
            }
          },
          O4(val,oldVal){
            document.querySelector('.p23').style.width=(20+val*1.7)+"px"
            document.querySelector('.span4').style.width=(20+val*1.7)+"px"
            document.querySelector('.span4').style.height=(20+val*1.7)+"px"
            document.querySelector('.span4').style.lineHeight=(20+val*1.7)+"px"
          },
          P5(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p24').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p24').offsetWidth>20){
                let width=document.querySelector('.p24').offsetWidth
                document.querySelector('.p24').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p24').style.left="96.4%";
              }
            }else{
              document.querySelector('.p24').style.left=`${h}%`;
            }
          },
          Z5(val,oldVal){
            if(val<0){
              document.querySelector('.p24').style.transform="rotate(180deg)";
              document.querySelector('.span5').style.transform="rotate(180deg)";
              document.querySelector('.p24').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p24').style.transform="rotate(0deg)";
              document.querySelector('.span5').style.transform="rotate(0deg)";
              document.querySelector('.p24').style.height=val*1.5+"%";
            }
          },
          O5(val,oldVal){
            document.querySelector('.p24').style.width=(20+val*1.7)+"px"
            document.querySelector('.span5').style.width=(20+val*1.7)+"px"
            document.querySelector('.span5').style.height=(20+val*1.7)+"px"
            document.querySelector('.span5').style.lineHeight=(20+val*1.7)+"px"
          },
          P6(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p25').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p25').offsetWidth>20){
                let width=document.querySelector('.p25').offsetWidth
                document.querySelector('.p25').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p25').style.left="96.4%";
              }
            }else{
              document.querySelector('.p25').style.left=`${h}%`;
            }
          },
          Z6(val,oldVal){
            if(val<0){
              document.querySelector('.p25').style.transform="rotate(180deg)";
              document.querySelector('.span6').style.transform="rotate(180deg)";
              document.querySelector('.p25').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p25').style.transform="rotate(0deg)";
              document.querySelector('.span6').style.transform="rotate(0deg)";
              document.querySelector('.p25').style.height=val*1.5+"%";
            }
          },
          O6(val,oldVal){
            document.querySelector('.p25').style.width=(20+val*1.7)+"px"
            document.querySelector('.span6').style.width=(20+val*1.7)+"px"
            document.querySelector('.span6').style.height=(20+val*1.7)+"px"
            document.querySelector('.span6').style.lineHeight=(20+val*1.7)+"px"
          },
          P7(val,oldVal){
            let h=val/210
            if(val==20){
              document.querySelector('.p26').style.left="0";
            }else if(val==20000){
              if(document.querySelector('.p26').offsetWidth>20){
                let width=document.querySelector('.p26').offsetWidth
                document.querySelector('.p26').style.left=96.4-(width-20)*.2+"%"
              }else{
                document.querySelector('.p26').style.left="96.4%";
              }
            }else{
              document.querySelector('.p26').style.left=`${h}%`;
            }
          },
          Z7(val,oldVal){
            if(val<0){
              document.querySelector('.p26').style.transform="rotate(180deg)";
              document.querySelector('.span7').style.transform="rotate(180deg)";
              document.querySelector('.p26').style.height=-(val*1.6)+"%";
            }else {
              document.querySelector('.p26').style.transform="rotate(0deg)";
              document.querySelector('.span7').style.transform="rotate(0deg)";
              document.querySelector('.p26').style.height=val*1.5+"%";
            }
          },
          O7(val,oldVal){
            document.querySelector('.p26').style.width=(20+val*1.7)+"px"
            document.querySelector('.span7').style.width=(20+val*1.7)+"px"
            document.querySelector('.span7').style.height=(20+val*1.7)+"px"
            document.querySelector('.span7').style.lineHeight=(20+val*1.7)+"px"
          },
        },
        methods:{
          jiesuan1(){
            if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
              this.response.ParameterEQ[this.index].band0.frequency=this.P1
              this.response.ParameterEQ[this.index].band1.frequency=this.P2
              this.response.ParameterEQ[this.index].band2.frequency=this.P3
              this.response.ParameterEQ[this.index].band3.frequency=this.P4
              this.response.ParameterEQ[this.index].band4.frequency=this.P5
              this.response.ParameterEQ[this.index].band5.frequency=this.P6
              this.response.ParameterEQ[this.index].band6.frequency=this.P7
              this.response.ParameterEQ[this.index].band0.value=this.Z1*10
              this.response.ParameterEQ[this.index].band1.value=this.Z2*10
              this.response.ParameterEQ[this.index].band2.value=this.Z3*10
              this.response.ParameterEQ[this.index].band3.value=this.Z4*10
              this.response.ParameterEQ[this.index].band4.value=this.Z5*10
              this.response.ParameterEQ[this.index].band5.value=this.Z6*10
              this.response.ParameterEQ[this.index].band6.value=this.Z7*10
              this.response.ParameterEQ[this.index].band0.width=this.O1*100
              this.response.ParameterEQ[this.index].band1.width=this.O2*100
              this.response.ParameterEQ[this.index].band2.width=this.O3*100
              this.response.ParameterEQ[this.index].band3.width=this.O4*100
              this.response.ParameterEQ[this.index].band4.width=this.O5*100
              this.response.ParameterEQ[this.index].band5.width=this.O6*100
              this.response.ParameterEQ[this.index].band6.width=this.O7*100
              this.response.ParameterEQ[this.index].band0.bypass=-(this.open1-1)
              this.response.ParameterEQ[this.index].band1.bypass=-(this.open2-1)
              this.response.ParameterEQ[this.index].band2.bypass=-(this.open3-1)
              this.response.ParameterEQ[this.index].band3.bypass=-(this.open4-1)
              this.response.ParameterEQ[this.index].band4.bypass=-(this.open5-1)
              this.response.ParameterEQ[this.index].band5.bypass=-(this.open6-1)
              this.response.ParameterEQ[this.index].band6.bypass=-(this.open7-1)
              localStorage.setItem('response',JSON.stringify(this.response))
              let silence=`<ParameterEQ channel="${this.tongdao5}" no="2" bypass="0"><Band no="0" frequency="${this.P1}" width="${this.O1*100}" bypass="${-(this.open1-1)}">${this.Z1*10}</Band><Band no="1" frequency="${this.P2}" width="${this.O2*100}" bypass="${-(this.open2-1)}">${this.Z2*10}</Band><Band no="2" frequency="${this.P3}" width="${this.O3*100}" bypass="${-(this.open3-1)}">${this.Z3*10}</Band><Band no="3" frequency="${this.P4}" width="${this.O4*100}" bypass="${-(this.open4-1)}">${this.Z4*10}</Band><Band no="4" frequency="${this.P5}" width="${this.O5*100}" bypass="${-(this.open5-1)}">${this.Z5*10}</Band><Band no="5" frequency="${this.P6}" width="${this.O6*100}" bypass="${-(this.open6-1)}">${this.Z6*10}</Band><Band no="6" frequency="${this.P7}" width="${this.O7*100}" bypass="${-(this.open7-1)}">${this.Z7*10}</Band></ParameterEQ>`
              let encrypted=this.coding(silence)
              this.$.ajax({
                url:`http://${this.IP}`,
                data:{control:1,commd:encrypted},
                type: "POST",
                dataType:'json',
                error:(err)=>{
                  let silence1=`<ParameterEQ channel="${this.tongdao5}" no="2" bypass="0"><Band no="0" frequency="${this.P1}" width="${this.O1*100}" bypass="${-(this.open1-1)}">${this.Z1*10}</Band><Band no="1" frequency="${this.P2}" width="${this.O2*100}" bypass="${-(this.open2-1)}">${this.Z2*10}</Band><Band no="2" frequency="${this.P3}" width="${this.O3*100}" bypass="${-(this.open3-1)}">${this.Z3*10}</Band><Band no="3" frequency="${this.P4}" width="${this.O4*100}" bypass="${-(this.open4-1)}">${this.Z4*10}</Band><Band no="4" frequency="${this.P5}" width="${this.O5*100}" bypass="${-(this.open5-1)}">${this.Z5*10}</Band><Band no="5" frequency="${this.P6}" width="${this.O6*100}" bypass="${-(this.open6-1)}">${this.Z6*10}</Band><Band no="6" frequency="${this.P7}" width="${this.O7*100}" bypass="${-(this.open7-1)}">${this.Z7*10}</Band></ParameterEQ>`
                  let encrypted1=this.coding(silence1)
                  let IP1=this.IP
                  console.log(err)
                  if(err.statusText=="error"){
                    console.log("出错了")
                    setTimeout(()=>{
                      this.$.ajax({
                        url:`http://${IP1}`,
                        data:{control:1,commd:encrypted1},
                        type: "POST",
                        dataType:'json',
                      })
                    },1500)
                  }
                }
              })
            }
          },
          plus3(){
            if(this.band1<6){
              this.band1+=1
            }
          },
          minus3(){
            if(this.band1>0){
              this.band1-=1
            }
          },
          plus4(){
            if(this.band1==0){
              if(this.P1<20000){
                this.P1+=1
              }
            }else if(this.band1==1){
              if(this.P2<20000){
                this.P2+=1
              }
            }else if(this.band1==2){
              if(this.P3<20000){
                this.P3+=1
              }
            }else if(this.band1==3){
              if(this.P4<20000){
                this.P4+=1
              }
            }else if(this.band1==4){
              if(this.P5<20000){
                this.P5+=1
              }
            }else if(this.band1==5){
              if(this.P6<20000){
                this.P6+=1
              }
            }else{
              if(this.P7<20000){
                this.P7+=1
              }
            }
          },
          minus4(){
            if(this.band1==0){
              if(this.P1>20){
                this.P1-=1
              }
            }else if(this.band1==1){
              if(this.P2>20){
                this.P2-=1
              }
            }else if(this.band1==2){
              if(this.P3>20){
                this.P3-=1
              }
            }else if(this.band1==3){
              if(this.P4>20){
                this.P4-=1
              }
            }else if(this.band1==4){
              if(this.P5>20){
                this.P5-=1
              }
            }else if(this.band1=5){
              if(this.P6>20){
                this.P6-=1
              }
            }else{
              if(this.P7>20){
                this.P7-=1
              }
            }
          },
          minus5(){
            if(this.band1==0){
              if(this.O1>0.01){
                this.O1=(this.O1-0.01).toFixed(2)
              }
            }else if(this.band1==1){
              if(this.O2>0.01){
                this.O2=(this.O2-0.01).toFixed(2)
              }
            }else if(this.band1==2){
              if(this.O3>0.01){
                this.O3=(this.O3-0.01).toFixed(2)
              }
            }else if(this.band1==3){
              if(this.O4>0.01){
                this.O4=(this.O4-0.01).toFixed(2)
              }
            }else if(this.band1==4){
              if(this.O5>0.01){
                this.O5=(this.O5-0.01).toFixed(2)
              }
            }else if(this.band15){
              if(this.O6>0.01){
                this.O6=(this.O6-0.01).toFixed(2)
              }
            }else{
              if(this.O7>0.01){
                this.O7=(this.O7-0.01).toFixed(2)
              }
            }
          },
          plus5(){
            if(this.band1==0){
              if(this.O1<3.39){
                this.O1=(this.O1+0.01).toFixed(2)
              }
            }else if(this.band1==1){
              if(this.O2<3.39){
                this.O2=(this.O2+0.01).toFixed(2)
              }
            }else if(this.band1==2){
              if(this.O3<3.39){
                this.O3=(this.O3+0.01).toFixed(2)
              }
            }else if(this.band1==3){
              if(this.O4<3.39){
                this.O4=(this.O4+0.01).toFixed(2)
              }
            }else if(this.band1==4){
              if(this.O5<3.39){
                this.O5=(this.O5+0.01).toFixed(2)
              }
            }else if(this.band1==5){
              if(this.O6<3.39){
                this.O6=(this.O6+0.01).toFixed(2)
              }
            }else{
              if(this.O7<3.39){
                this.O7=(this.O7+0.01).toFixed(2)
              }
            }
          }
        },
        created(){
          this.IP=localStorage.getItem('ip')
          this.tongdao5=localStorage.getItem('gallery1')
          if(this.tongdao5==100){
            this.index=8
          }else if(this.tongdao5==101){
            this.index=9
          }else if(this.tongdao5==102){
            this.index=10
          }else{
            this.index=11
          }
          if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1NGUwYzgzYjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TOdPDAAAF1UlEQVR42qxXy2tcVRj/zrmvmclMMkkfUxKxC43PlRRxY9U6qam4EVdt6kIKShcWLS4URKwrBZ9QsCpU3PTxB1Rs2k7T16ZIUZBKxa6sDSRpmslkJvO4L3/fuffO3Jm5jVV64OSc3HPO9/ve3zdiplSitYYgoWFMSk3brWtaEfsCJg5EcMH3yXVdnnOO65Y81z2C/bRPvrsWXX0NQKHr+k7DMD4yLWs8ZVmEPTGolBKnIsT1yfM8Bi7Ytj3VaDanWs3mn9h/6DjOcZ85u1tgTWpjhmn8kMlkJtLpDFmmSWBCAfJMGgzOM+M41Gy1xuv11aOrq6t77Jb9muu5N9cEhpQs0ZZ0Ov1jNpstAFgBKtX+y4iY4vusGdaQZVoT1Wr1Sr1efwkauQLp+4EZFI+eHBgYOA3QIYArIpFK/8uIzMEz9IlSrVbbDtX/HIHrscujAD0xODioQHul9G2bKhfPUPVCiRpXfyV3cYGkbpC+cRNZ449S9pkiZZ8ukoC0ShAwzJKHDAzh0wlI/4TjOrPqnL0aNhVQ6+l8Pl9k9faCVi6coYWvPyX35g3SKHBoqbQUMsU2ZinG7qeRve9Q9tntXe/Z62FvKpfLZ7FOwOa+ZBWblrkL6i2mUqkuUN9zae7QZzT7/j4igJpAMoFoAdnsmfxNzP5Ftz54ixYPfQ5O3C7VM21gPA+sKcaUsKMG1R6IHCk+5r/9kspHv1eEDYAabSBS0win2Z5C3akdO0y3v/uq24tBmzEYC3tdwg6TCJnxXkeqzEzT0tHDbeKGBm/NZkkbGiYtmwv+D4F46iJwGDNkkMFr5051IkYo5wVw5kFg7pBIDlMcp10qhiPNH/yEDPZ05lYipIZHSGwaIzm6mQirN7wOOQ2xzfZWoB0GjPD/8sGPFa24yhkLmDsl4m2iV8WVmZPkLcyRBgIaiGmZNAkAU2GU7Ps2k10YIyc/Qk4qTa6nsqYCZ4VpnAsYmJV3a55qoNWrcmBuZ1UXerNR9WJJeW9EQCBspJkibyBH9voN5GSy5BoWudAEg3rhlNQB5z2/bVwq9cU4MDfqUbDHR+Pab2HIBAQ01yGyG0S1Gr4skF+tktdskER65DCSfhBOMgyz9h7fnWtXu2uAUNkR5kvIve7iIpnUiVWtXievXAYhPGLJGXRpiWi1riTGZxXLvFf+qUA5aPDh9kJietWTUiL0T8JphamUVExq5dvkN+o41JWkDCo85w6VrXvtOxciuTrp6zYQ/V3rvgwQWV1RokXSEXXKsojtu4QY2ZBcVPyEcmk+8FC7jsRPo9ARa+zjb3g1Hnm8jz5jStTQud6D7NaichCvnYcDMYPwCmYEFv/WoRy84bcWCkdC7Z6XSOBnuIDHR27bDtLWF9RjxYDfKQQqWcggVPRwH4H6cWb5D2ikt032ScuYEi3K8V5gLm0j+94jl8MhDBWXgibGo45tRQywDeoHd3mfffNd0DL7KhUwj0n0SCdRoK/3qiMHTnM79wDcV+CuHwP3O5JFgEor4R2+a+Ft+rnJPjUzFmNKNGYOeqQDzEnvWLd3P2Ve2U0OiNmh9DYzwhJFzISMBHcCJo2Xd9HgG2/35wdgMBZjikvnL1BuMCeG88Ml0zS3JcV17fwpWv7mC/Jnbyi7Rokl7sU8BRqBgdf3Q9IXEj251WrNLJWXiiuVFV+cK52lVDpF+aH8KAr1L5xHk+KOq8zquWmqo/1x/vid/FtBMLATGg8/RtbWCaXaqPXpHbDrPLc+5eXybKPeaLc+qkij9XkK6zRy6RDdwwEVL6PlmUTrc5lbILQ+Smtq02g0aGVl5TJa0SL/KriHoHNMk2kzhhu2RDLmbSg+NapUKlewboFqZvzkHwF3Nfgt02BaIU2F0c6CnWTjqwPYgZaXl29iLcIZXgXH1/+HlNf5LdMIaSnaiQ19Gxy1l+2A1W+2mkfQIx1Hu/IiOoddsP0EvH7jHSSc54wEgGMImZ/wE8aFiqnVbLXVGx//CDAAGxDwJWM8e/oAAAAASUVORK5CYII='){
            if(localStorage.getItem('response')!=undefined){
              this.response=JSON.parse(localStorage.getItem('response'))
              this.P1=this.response.ParameterEQ[this.index].band0.frequency
              this.P2=this.response.ParameterEQ[this.index].band1.frequency
              this.P3=this.response.ParameterEQ[this.index].band2.frequency
              this.P4=this.response.ParameterEQ[this.index].band3.frequency
              this.P5=this.response.ParameterEQ[this.index].band4.frequency
              this.P6=this.response.ParameterEQ[this.index].band5.frequency
              this.P7=this.response.ParameterEQ[this.index].band6.frequency
              this.Z1=this.response.ParameterEQ[this.index].band0.value/10
              this.Z2=this.response.ParameterEQ[this.index].band1.value/10
              this.Z3=this.response.ParameterEQ[this.index].band2.value/10
              this.Z4=this.response.ParameterEQ[this.index].band3.value/10
              this.Z5=this.response.ParameterEQ[this.index].band4.value/10
              this.Z6=this.response.ParameterEQ[this.index].band5.value/10
              this.Z7=this.response.ParameterEQ[this.index].band6.value/10
              this.xiaoye[0]=this.response.ParameterEQ[this.index].band0.value/10
              this.xiaoye[1]=this.response.ParameterEQ[this.index].band1.value/10
              this.xiaoye[2]=this.response.ParameterEQ[this.index].band2.value/10
              this.xiaoye[3]=this.response.ParameterEQ[this.index].band3.value/10
              this.xiaoye[4]=this.response.ParameterEQ[this.index].band4.value/10
              this.xiaoye[5]=this.response.ParameterEQ[this.index].band5.value/10
              this.xiaoye[6]=this.response.ParameterEQ[this.index].band6.value/10
              this.O1=this.response.ParameterEQ[this.index].band0.width/100
              this.O2=this.response.ParameterEQ[this.index].band1.width/100
              this.O3=this.response.ParameterEQ[this.index].band2.width/100
              this.O4=this.response.ParameterEQ[this.index].band3.width/100
              this.O5=this.response.ParameterEQ[this.index].band4.width/100
              this.O6=this.response.ParameterEQ[this.index].band5.width/100
              this.O7=this.response.ParameterEQ[this.index].band6.width/100
              this.open1=-(this.response.ParameterEQ[this.index].band0.bypass-1)
              this.open2=-(this.response.ParameterEQ[this.index].band1.bypass-1)
              this.open3=-(this.response.ParameterEQ[this.index].band2.bypass-1)
              this.open4=-(this.response.ParameterEQ[this.index].band3.bypass-1)
              this.open5=-(this.response.ParameterEQ[this.index].band4.bypass-1)
              this.open6=-(this.response.ParameterEQ[this.index].band5.bypass-1)
              this.open7=-(this.response.ParameterEQ[this.index].band6.bypass-1)
            }
          }
        }

    }
</script>

<style lang="less">
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  *{
    margin: 0;
    padding: 0;
  }
  div.out3{
    width: 100%;
    height: 100%;
    display: flex;
    .band1{
      width: 30%;
      height: 100%;
      .controlBand{
        width: 60%;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        margin-left:25%;
        display: flex;
        justify-content: space-around;
        background: url("../assets/band.png") no-repeat;
        background-size:100% 100%;
        .num{
          color: #08a2f9;
          font-size: 2rem;
          margin-top: -5px;
        }
      }
    }
    /*.left2{
      width: 20%;
      height: 100%;
      padding-left: 5%;
      position: relative;
      display: flex;
      justify-content: space-between;
      .num9{
        position: absolute;
        width: 17%;
        top: 31%;
        left:27%;
      }
      .num5{
        position: absolute;
        width: 17%;
        top:82%;
        left:27%;
      }
      .num6{
        position: absolute;
        width: 17%;
        top: 31%;
        left:75%;
      }
      .num7{
        position: absolute;
        width: 17%;
        top: 82%;
        left:75%;
      }
    }*/
    .center2{
      width:50%;
      height: 100%;
      margin-top: .7%;
      position: relative;
      .move{
        width: 89.7%;
        height:86.5%;
        position: absolute;
        top: 0%;
        left: 8.2%;
        p{
          position:absolute;
          transform-origin: center bottom;
          width: 20px;
          height: 0;
          bottom: 59.5%;
          span{
            display: block;
            margin-top: -13px;
            width: 20px;
            height: 20px;
            border-radius:50%;
            text-align: center;
            line-height: 20px;
          }
        }
        .p20{
          left:9%;
          background: url("../assets/int3-img/zhu1.png");
          background-size: 100% 100%;
          .span1{
            background: url("../assets/int3-img/bit1.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .p21{
          left:20%;
          background: url("../assets/int3-img/zhu2.png");
          background-size: 100% 100%;
          .span2{
            background: url("../assets/int3-img/bit2.png");
            background-size: 100% 100%;
          }
        }
        .p22{
          left:34%;
          background: url("../assets/int3-img/zhu3.png");
          background-size: 100% 100%;
          .span3{
            background: url("../assets/int3-img/bit3.png");
            background-size: 100% 100%;
          }
        }
        .p23{
          left:45%;
          background: url("../assets/int3-img/zhu4.png");
          background-size: 100% 100%;
          .span4{
            background: url("../assets/int3-img/bit4.png");
            background-size: 100% 100%;
          }
        }
        .p24{
          left: 59%;
          background: url("../assets/int3-img/zhu5.png");
          background-size: 100% 100%;
          .span5{
            background: url("../assets/int3-img/bit5.png");
            background-size: 100% 100%;
          }
        }
        .p25{
          left: 70%;
          background: url("../assets/int3-img/zhu6.png");
          background-size: 100% 100%;
          .span6{
            background: url("../assets/int3-img/bit6.png");
            background-size: 100% 100%;
          }
        }
        .p26{
          left: 82%;
          background: url("../assets/int3-img/zhu7.png");
          background-size: 100% 100%;
          .span7{
            background: url("../assets/int3-img/bit7.png");
            background-size: 100% 100%;
          }
        }
        hr{
          background-color: #08a2f9;
          height: 1.5px;
          border: none;
          width: 100%;
          position:absolute;
          top:39.5%;
          left: 0;
        }
      }
      .u8{
        height: 100%;
        position: absolute;
        top:4%;
        left: 3%;
        list-style-type: none;
        li{
          color: #fff;
          text-align: right;
          height: 8%;
          border-top:1.7px solid transparent;
        }
      }
      .u7{
        width: 90%;
        height: 86%;
        margin-left: 8%;
        list-style-type: none;
        border-right: 1.3px solid #79848b;
        border-bottom: 1.3px solid #79848b;
        li{
          width: 100%;
          height:10%;
          display: flex;
          span{
            width:3.5%;
            height: 100%;
            border-top: 1.3px solid #79848b;
            border-left:1.3px solid #79848b;
          }
        }
      }
      .u9{
        width: 100%;
        list-style-type: none;
        display: flex;
        margin-left: 6%;
        li{
          color: #fff;
          width: 6%;
          border: 1px solid transparent;
          border-left: 2px solid transparent;
        }
      }
    }
    /*.right2{
      width: 20%;
      height: 100%;
      position: relative;
      .num4{
        position: absolute;
        top: 0;
        left: 62%;
      }
      .num8{
        position: absolute;
        width:19%;
        top:29%;
        left: 30%;
      }
      .num10{
        position: absolute;
        width:19%;
        top:78%;
        left: 30%;
      }
      .num11{
        position: absolute;
        top:29%;
        left:95%;
        width: 19%;
      }
    }*/
  }
  #gradient_slide30 .e-handle {
    height:15px;
    width: 15px;
    background: url("../assets/core.png");
    background-size:100% 100%;
    border: none;
    background-color: #000;
    top: calc(50% - 10px);
    margin-left:-8px;
    margin-top: 3px;
  }
  #gradient_slide30 .e-handle:active{
    transform: scale(1);
  }
  #gradient_slide30 .e-range {
    height:6px;
    top: calc(50% - 3px);
    border-radius:10px;
    background-color: #08a2f9;
  }
  #gradient_slide30 .e-slider-track {
    height: 6px;
    top: calc(50% - 4px);
    border-radius: 10px;
  }
  #gradient_slide31 .e-handle {
    height:30px;
    width: 30px;
    background: url("../assets/core.png");
    background-size:100% 100%;
    border: none;
    background-color: #000;
    top: calc(50% - 10px);
    margin-left:-12px;
    margin-top: 3px;
  }
  #gradient_slide31 .e-handle:active{
    transform: scale(1);
  }
  #gradient_slide31 .e-range {
    height:20px;
    top: calc(50% - 3px);
    border-radius:10px;
    background-color: #08a2f9;
  }
  #gradient_slide31 .e-slider-track {
    height: 20px;
    top: calc(50% - 4px);
    border-radius: 10px;
  }
</style>
