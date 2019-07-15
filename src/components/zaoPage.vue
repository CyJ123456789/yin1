<template>
    <div class="zaosheng">
      <div class="yiZhi">
        <span>抑制水平(dB):</span>
        <select size="1" id="slected" @change="getNumber(num2)" v-model="num2">
          <option v-for="(item,index) in pullList" :value="item" style="height: 10px">{{item}}</option>
        </select>
      </div>
      <div class="zao1">
        <div class="col-lg-12 control-section">
          <div class="slider-content-wrapper">
            <div class="slider_container" style="position: relative">
              <p style="position: absolute;top:20px;left: -55px;color: #fff">关闭</p>
              <p style="position: absolute;top:20px;left: 90px;width: 40px;color: #fff">开启</p>
              <ejs-slider id="gradient_slide" min=0 max=1 value=0 type='MinRange' v-model="num1"></ejs-slider>
            </div>
          </div>
        </div>
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
        name: "zao-page",
        data(){
          return{
            pullList:['6','9','12','15','18'],
            num1:1,
            num2:6,
            IP:'',
            response:[]
          }
        },
        methods:{
          getNumber(value){
            if(this.num1==1){
              if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
                this.response.channel[8].NR=this.num2
                localStorage.setItem('response',JSON.stringify(this.response))
                let silence=`<Channel no="96" NR="${this.num2}">0</Channel>`
                let encrypted=this.coding(silence)
                this.$.ajax({
                  url: `http://${this.IP}`,
                  data:{control:1,commd:encrypted},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    let IP1=this.IP
                    let silence1=`<Channel no="96" NR="${this.num2}">0</Channel>`
                    let encryped1=this.coding(silence1)
                    if(err.statusText=="error"){
                      console.log("出错了")
                      setTimeout(()=>{
                        this.$.ajax({
                          url: `http://${IP1}`,
                          data:{control:1,commd:encryped1},
                          type: "POST",
                          dataType:'json',
                        })
                      },1500)
                    }
                  }
                })
              }
            }
          }
        },
        watch:{
          num1:function (val,oldVal) {
            if(val==0){
              if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
                this.response.channel[8].NR=0
                localStorage.setItem('response',JSON.stringify(this.response))
                let silence=`<Channel no="96" NR="0">0</Channel>`
                let encrypted=this.coding(silence)
                this.$.ajax({
                  url: `http://${this.IP}`,
                  data:{control:1,commd:encrypted},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    let IP2=this.IP
                    let silence2=`<Channel no="96" NR="0">0</Channel>`
                    let encryped2=this.coding(silence2)
                    if(err.statusText=="error"){
                      console.log("出错了")
                      setTimeout(()=>{
                        this.$.ajax({
                          url: `http://${IP2}`,
                          data:{control:1,commd:encryped2},
                          type: "POST",
                          dataType:'json',
                        })
                      },1500)
                    }
                  }
                })
              }
            }else{
              if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
                this.response.channel[8].NR=this.num2
                localStorage.setItem('response',JSON.stringify(this.response))
                let silence=`<Channel no="96" NR="${this.num2}">0</Channel>`
                let encrypted=this.coding(silence)
                this.$.ajax({
                  url: `http://${this.IP}`,
                  data:{control:1,commd:encrypted},
                  type: "POST",
                  dataType:'json',
                  error:(err)=>{
                    let IP3=this.IP
                    let silence3=`<Channel no="96" NR="${this.num2}">0</Channel>`
                    let encryped3=this.coding(silence3)
                    if(err.statusText=="error"){
                      console.log("出错了")
                      setTimeout(()=>{
                        this.$.ajax({
                          url: `http://${IP3}`,
                          data:{control:1,commd:encryped3},
                          type: "POST",
                          dataType:'json',
                        })
                      },1500)
                    }
                  }
                })
              }
            }
          }
        },
        created(){
         this.IP=localStorage.getItem('ip')
         if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
           if(localStorage.getItem('response')!=undefined){
             this.response=JSON.parse(localStorage.getItem('response'))
             this.num2=this.response.channel[8].NR
             if(this.num2!=0){
               this.num1=1
             }else{
               this.num1=0
               this.num2=6
             }
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
  div.zaosheng{
    width: 100%;
    height: 37%;
    position: relative;
    .control{
      display: flex;
      position: absolute;
      top: 85%;
      left: 44.5%;
      span{
        margin-right: 40px;
        color: #fff;
      }
    }
    .yiZhi{
      position: absolute;
      top:20%;
      left: 41%;
      width: 20%;
      span{
        color: #fff;
        font-size: .9rem;
      }
      select{
        width:25%;
      }
    }
    /*.choose{

      position: absolute;
      left: 45%;
      top:20%;
      option{

      }
    }*/
    div.zao1{
      position: absolute;
      top:60%;
      left: 45%;
    }
  }
  .slider-content-wrapper {
    width: 2%;
    margin: 0 auto;
    min-width:60px;
  }
  .slider-labeltext {
    text-align: left;
    font-weight: 500;
    font-size: 13px;
    padding-bottom: 10px;
  }
  #gradient_slide .e-handle {
    height:30px;
    width: 30px;
    border-radius: 50%;
    background: url("../assets/core.png");
    border: none;
    background-size:100% 100%;
    border-radius: 0;
    margin-top: 4%;
    top: calc(50% - 10px);
    margin-left:-12px;
  }
  #gradient_slide .e-handle:active{
    transform: scale(1);
  }
  #gradient_slide .e-range {
    height: 20px;
    top: calc(50% - 3px);
    border-radius:10px;
    background-color: #08a2f9;
  }
  #gradient_slide .e-slider-track {
    height: 20px;
    top: calc(50% - 4px);
    border-radius: 10px;
  }
</style>
