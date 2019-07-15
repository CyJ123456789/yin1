<template>
  <div class="juzheng">
    <ul>
      <li>OUT1</li>
      <li>OUT2</li>
      <li>OUT3</li>
      <li>OUT4</li>
    </ul>
    <div class="table">
      <p>
        <span>MIC1</span>
        <span>MIC2</span>
        <span>LINE1</span>
        <span>LINE2</span>
        <span>自动混音</span>
      </p>
      <table border="2px" id="table">
        <tr v-for="(item,index) in varchart" @click="">
          <th v-for="(item1,index1) in item">
            <img :src="img_url" @click="click($event,index,index1)" alt="">
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import blure1 from '../assets/bluer.png'
  import focus1 from '../assets/focus.png'
  export default {
    name: "ju-page",
    data(){
      return{
        varchart:[
          [{"value":1,bool:false},{"value":2,bool:false},{"value":3,bool:false},{"value":4,bool:false},{"value":5,bool:false}],
          [{"value":1,bool:false},{"value":2,bool:false},{"value":3,bool:false},{"value":4,bool:false},{"value":5,bool:false}],
          [{"value":1,bool:false},{"value":2,bool:false},{"value":3,bool:false},{"value":4,bool:false},{"value":5,bool:false}],
          [{"value":1,bool:false},{"value":2,bool:false},{"value":3,bool:false},{"value":4,bool:false},{"value":5,bool:false}]
        ],
        img_url:blure1,
        img1_url:focus1,
        IP:'',
        response:[]
      }
    },
    methods: {
      click(e,a,b){
        var c=a+100;
        if(this.varchart[a][b].bool){
          this.varchart[a][b].bool=false;
          e.target.src=this.img_url;
        }else{
          this.varchart[a][b].bool=true;
          e.target.src=this.img1_url;
        }
        var content=[];
        for(var i=0;i<this.varchart[a].length;i++){
          if(this.varchart[a][i].bool==true){
            if(i==4){
              content.push(`<Input channel="96" mute="0">0</Input>`)
            }else{
              content.push(`<Input channel="${i}" mute="0">0</Input>`)
            }
          }
        }
        if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
          for(var t=0;t<this.varchart.length;t++){
            for(var n=0;n<this.varchart[t].length;n++){
              if(this.varchart[t][n].bool==true){
                if(n==0){
                  this.response.MatrixMixer[t].input0bandG={"channel":0,"mute":0,"value":0}
                }else if(n==1){
                  this.response.MatrixMixer[t].input1bandG={"channel":1,"mute":0,"value":0}
                }else if(n==2){
                  this.response.MatrixMixer[t].input2bandG={"channel":2,"mute":0,"value":0}
                }else if(n==3){
                  this.response.MatrixMixer[t].input3bandG={"channel":3,"mute":0,"value":0}
                }else{
                  this.response.MatrixMixer[t].input8bandG={"channel":96,"mute":0,"value":0}
                }
              }else{
                if(n==0){
                  this.response.MatrixMixer[t].input0bandG=null
                }else if(n==1){
                  this.response.MatrixMixer[t].input1bandG=null
                }else if(n==2){
                  this.response.MatrixMixer[t].input2bandG=null
                }else if(n==3){
                  this.response.MatrixMixer[t].input3bandG=null
                }else{
                  this.response.MatrixMixer[t].input8bandG=null
                }
              }
            }
          }
          localStorage.setItem('response',JSON.stringify(this.response))
          let silence=`<MatrixMixer channel="${c}" mute="0">${content.join('')}</MatrixMixer>`
          let encrypted=this.coding(silence)
          this.$.ajax({
            url: `http://${this.IP}`,
            data:{control:1,commd:encrypted},
            type: "POST",
            dataType:'json',
            error:(err)=>{
              let IP=this.IP
              let silence1=`<MatrixMixer channel="${c}" mute="0">${content.join('')}</MatrixMixer>`
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
                      console.log("問題解決了")
                      console.log(err)
                    }
                  })
                },1500)
              }
            }
          })
        }
      }
    },
    created(){
      if(document.querySelector('.img20').src!='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBMzlEQTUzNDUyRkFFNjExODU5NUM5Q0VGOEZEOTVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEY5ODlGMUY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEY5ODlGMEY2Q0UxMUU4QjY2QUEwNTZGRTBFNzREQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFjODk2NC1iMWQ1LTNiNDAtYWQwOC00OGE1NDk0Mzg5NmQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNzI0ZDkyZS1mNjljLTExZTgtYjQyOC04ODE1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'){
        if(localStorage.getItem('response')!=undefined){
          this.response=JSON.parse(localStorage.getItem('response'))
          console.log(this.response.MatrixMixer)
          for(var h=0;h<4;h++){
            if(this.response.MatrixMixer[h].input0bandG==undefined){
              this.varchart[h][0].bool=false
            }else{
              this.varchart[h][0].bool=true
            }
            if(this.response.MatrixMixer[h].input1bandG==undefined){
              this.varchart[h][1].bool=false
            }else{
              this.varchart[h][1].bool=true
            }
            if(this.response.MatrixMixer[h].input2bandG==undefined){
              this.varchart[h][2].bool=false
            }else{
              this.varchart[h][2].bool=true
            }
            if(this.response.MatrixMixer[h].input3bandG==undefined){
              this.varchart[h][3].bool=false
            }else{
              this.varchart[h][3].bool=true
            }
            if(this.response.MatrixMixer[h].input8bandG==undefined){
              this.varchart[h][4].bool=false
            }else{
              this.varchart[h][4].bool=true
            }
          }
        }
      }
    },
    mounted(){
      this.IP=localStorage.getItem('ip')
      for(var d=0;d<this.varchart.length;d++){
        for(var z=0;z<this.varchart[d].length;z++){
          if(this.varchart[d][z].bool==true){
            document.getElementById("table").rows[d].cells[z].firstElementChild.src=this.img1_url;
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/simple6.less";
</style>
