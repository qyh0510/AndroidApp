<template>
  <div class="fortune">
    <ul>
      <li><a href="#host" @click="back">主页</a></li>
      <li><a href="#fortune">运势</a></li>
      <li><a href="https://www.astrology.com/">新闻</a></li>
      <li><a href="#about" @click="zo">关于</a></li>
      <li style="float: right; padding: 6px 8px 0 0"><input type=button value="返回" @click="back" onclick=history.go(-1)></li>
    </ul>
    <div class="head">
        <div style="padding-top: 20px; padding-bottom: 10px; padding-inline-start: 8px">
            <h2 style="float: left; margin-block-start: 5px">查看运势</h2>
        </div>
        <div class="time">
            <input v-on:click="reverseMessage1(msgg)" type="button" value="今日" style="border-right: 1px solid #7f9eb2;">
            <input v-on:click="reverseMessage2(msgg)" type="button" value="明日" style="border-right: 1px solid #7f9eb2">
            <input v-on:click="reverseMessage3(msgg)" type="button" value="本周" style="border-right: 1px solid #7f9eb2">
            <input v-on:click="reverseMessage4(msgg)" type="button" value="本月" style="border-right: 1px solid #7f9eb2">
            <input v-on:click="reverseMessage5(msgg)" type="button" value="本年" style="border-right: 0">
        </div>
    </div>
    <div class="content">
        <div id="title">{{msgg}}{{mss}}</div>
        <p class="date">{{datetime}}</p>
        <div class="data">
            <img class="img" v-show="msgg =='水瓶座'" src="./assets/shuiping.png"/>
            <img class="img" v-show="msgg =='双鱼座'" src="./assets/shuangyu.png"/>
            <img class="img" v-show="msgg =='白羊座'" src="./assets/baiyang.png"/>
            <img class="img" v-show="msgg =='金牛座'" src="./assets/jinniu.png"/>
            <img class="img" v-show="msgg =='双子座'" src="./assets/shuangzi.png"/>
            <img class="img" v-show="msgg =='巨蟹座'" src="./assets/juxie.png"/>
            <img class="img" v-show="msgg =='狮子座'" src="./assets/shizi.png"/>
            <img class="img" v-show="msgg =='处女座'" src="./assets/chunv.png"/>
            <img class="img" v-show="msgg =='天秤座'" src="./assets/tiancheng.png"/>
            <img class="img" v-show="msgg =='天蝎座'" src="./assets/tianxie.png"/>
            <img class="img" v-show="msgg =='射手座'" src="./assets/sheshou.png"/>
            <img class="img" v-show="msgg =='摩羯座'" src="./assets/mojie.png"/>
            <div class="histogram">
                <div>
                    <b>综合</b>
                    <p><span style="width:80%"></span></p>
                    <strong>{{all}}</strong>
                </div>
                <div>
                    <b>健康</b>
                    <p><span style="width:95%"></span></p>
                    <strong>{{health}}</strong>
                </div>
                <div>
                    <b>爱情</b>
                    <p><span style="width:64%"></span></p>
                    <strong>{{love}}</strong>
                </div>
                <div>
                    <b>财富</b>
                    <p><span style="width:87%"></span></p>
                    <strong>{{money}}</strong>
                </div>
                <div>
                    <b>工作</b>
                    <p><span style="width:51%"></span></p>
                    <strong>{{work}}</strong>
                </div>
            </div>
        </div>
        <div id="summary">{{summary}}</div>
        <div class="circle">
            <div>{{color}}<p>幸运色</p></div>
            <div>{{number}}<p>幸运数字</p></div>
            <div>{{QFriend}}<p>速配星座</p></div>
        </div>
    </div>
    <div id="footer"><h3 style="font-weight: normal; font-size: 14px">@copyright 星座资讯</h3></div>
  </div>
</template>

<script>
export default {
  name: 'Fortune',
  data () {
    return {
      msg: '欢迎来到Astrology',
      msgg:'',
      mss:'',
      md1:'今日运势',
      md2:'明日运势',
      md3:'本周运势',
      md4:'本月运势',
      md5:'本年运势',
      all:'0%',
      love:'0%',
      health:'0%',
      money:'0%',
      work:'0%',
      summary:'',
      color:'',
      number:'',
      QFriend:'',
      datetime:''
    }
  },
  created(){
    this.getParams()
},
  methods:{
  	back(){
  		this.$router.push('/Host')
    },
    zo(){
  		this.$router.push('/about')
  	},
    getParams(){
        var routerParams=this.$route. query.msgg
        this.msgg=routerParams
    },
    getWidthHealth: function(){
        return this.health;
        console.log(this.health);
    },
    getWidthAll: function(){
        return this.all;
    },
    getWidthLove: function(){
        return this.love;
    },
    getWidthMoney: function(){
        return this.money.split('');
    },
    getWidthWork: function(){
        return this.work;
    },
    reverseMessage1: function(msggg) {
       this.mss= this.md1
       let url = this.HOST;
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'today',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         this.summary = '';
         console.log(res);
         this.love = res.data.love;
         this.all = res.data.all;
         this.health = res.data.health;
         this.money = res.data.money;
         this.work = res.data.work;
         this.QFriend = res.data.QFriend;
         this.number = res.data.number;
         this.summary = res.data.summary;
         this.color = res.data.color;
         this.datetime = res.data.datetime;
       })
       .catch(error =>{
         console.log(error);
       })

    },

    reverseMessage2: function(msggg) {
       this.mss=this.md2
       let url = this.HOST;
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'tomorrow',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         this.summary = '';
         console.log(res);
         this.love = res.data.love;
         this.all = res.data.all;
         this.health = res.data.health;
         this.money = res.data.money;
         this.work = res.data.work;
         this.QFriend = res.data.QFriend;
         this.number = res.data.number;
         this.summary = res.data.summary;
         this.color = res.data.color;
         this.datetime = res.data.datetime;
       })
       .catch(error =>{
         console.log(error);
       })
    },

    reverseMessage3: function(msggg) {
       this.mss= this.md3
       let url = this.HOST;
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'today',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         console.log(res);
         this.love = res.data.love;
         this.all = res.data.all;
         this.health = res.data.health;
         this.money = res.data.money;
         this.work = res.data.work;
         this.QFriend = res.data.QFriend;
         this.number = res.data.number;
         this.color = res.data.color;
       })
       .catch(error =>{
         console.log(error);
       })
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'week',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         this.summary = '';
         console.log(res);
         this.datetime = res.data.date;
         if(res.data.health){
         this.summary += res.data.health;}
         if(res.data.job){
         this.summary += res.data.job;}
         if(res.data.love){
         this.summary += res.data.love;}
         if(res.data.money){
         this.summary += res.data.money;}
         if(res.data.work){
         this.summary += res.data.work;}
       })
       .catch(error =>{
         console.log(error);
       })
    },

    reverseMessage4: function(msggg) {
       this.mss= this.md4
       let url = this.HOST;
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'today',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         console.log(res);
         this.love = res.data.love;
         this.all = res.data.all;
         this.health = res.data.health;
         this.money = res.data.money;
         this.work = res.data.work;
         this.QFriend = res.data.QFriend;
         this.number = res.data.number;
         this.color = res.data.color;
       })
       .catch(error =>{
         console.log(error);
       })
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'month',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         this.summary = '';
         console.log(res);
         this.datetime = res.data.date;
         if(res.data.all){
         this.summary += res.data.all;}
         if(res.data.health){
         this.summary += res.health;}
         if(res.data.love){
         this.summary += res.data.love;}
         if(res.data.money){
         this.summary += res.data.money;}
         if(res.data.work){
         this.summary += res.data.work;}
       })
       .catch(error =>{
         console.log(error);
       })
    },

    reverseMessage5: function(msggg) {
       this.mss=this.md5
       let url = this.HOST;
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'today',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         console.log(res);
         this.love = res.data.love;
         this.all = res.data.all;
         this.health = res.data.health;
         this.money = res.data.money;
         this.work = res.data.work;
         this.QFriend = res.data.QFriend;
         this.number = res.data.number;
         this.color = res.data.color;
       })
       .catch(error =>{
         console.log(error);
       })
       this.$axios.get(url,{
         params:{
         consName:msggg,
         type:'year',
         key:'1c69f366b491fbaa0b56ee631ffc5ad7'
         }
        }
       )
       .then(res =>{
         this.summary = '';
         console.log(res);
         this.datetime = res.data.date;
         if(res.data.mima.info){
         this.summary += res.data.mima.info;}
         if(res.data.mima.text){
         this.summary += res.data.mima.text;}
         if(res.data.love){
         this.summary += res.data.love;}
         if(res.data.finance){
         this.summary += res.data.finance;}
         if(res.data.career){
         this.summary += res.data.career;}
       })
       .catch(error =>{
         console.log(error);
       })
    }
  },
  watch:{
      '$route':'getParams'
  }
}
</script>

<style scoped>
ul {
    top: 0;
    left: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #253939;
    position: fixed;
    width: 100%;
    z-index: 999;
}
li {
    float: left;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
li a:hover:not(.active) {
    background-color: #253939;
}
.active {
    background-color: #5FA292;
}
li input {
    background-color: #253939;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
.head {
    position: relative;
    margin: 0 auto;
    padding: 0 auto;
    max-width: 900px;
}
.head div {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 auto;
    max-width: 900px;
    height: 40px;
}
.time {
    background-color: #9DC8C8;
}
.time input {
    float: left;
    display: block;
    width: 20%;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 0;
    border-top: 0;
    border-bottom: 1px solid #519D9E;
    height: 40px;
    line-height: 40px;
    background-color: #77AF9C;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
}
.content {
    position: relative;
    margin: 0 auto;
    padding: 0 auto;
    max-width: 900px;
    background: #fff url(./assets/star.jpeg) top center/100%;
    padding-top: 40px;
}
#title {
    font-size: 24px;
    text-align: center;
    color: #fff;
}
.date {
    text-align: center;
    color: #fff;
    margin-top: 8px;
}
.data {
    font-size: 14px;
    padding-left: 110px;
    position: relative;
    height: 220px;
    margin: 15px 10px;
}
.data img {
    position: absolute;
    background-color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    left: 30px;
    top: 50px;
    width: 150px;
    height: 150px;
}
.histogram {
    padding-top: 10px;
}
.histogram div {
    position: relative;
    height: 28px;
    color: #fff;
    padding: 0 46px 0 180px;
}
.histogram b {
    left: 120px;
    position: absolute;
    height: 28px;
    line-height: 28px;
    top: 0;
    width: 36px;
    font-weight: normal;
}
.histogram p {
    position: relative;
    top: 3px;
    height: 20px;
    background-color: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.histogram span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.histogram .health {
    position: absolute;
    left: 0;
    top: 0;
    width: expression(getWidthHealth());
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
} 
.histogram .love {
    position: absolute;
    left: 0;
    top: 0;
    width: expression(getWidthLove());
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
} 
.histogram .money {
    position: absolute;
    left: 0;
    top: 0;
    width: expression(getWidthMoney());
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
} 
.histogram .all {
    position: absolute;
    left: 0;
    top: 0;
    width: expression(getWidthAll());
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
} 
.histogram .work {
    position: absolute;
    left: 0;
    top: 0;
    width: expression(getWidthWork());
    height: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
} 
.histogram div:nth-child(1) span {
    background-color: #ff7473;
}
.histogram div:nth-child(2) span {
    background-color: #ffc952;
}
.histogram div:nth-child(3) span {
    background-color: #47b8e0;
}
.histogram div:nth-child(4) span {
    background-color: #e77e4d;
}
.histogram div:nth-child(5) span {
    background-color: #ff5f2e;
}
.histogram strong {
    right: 0;
    position: absolute;
    height: 28px;
    line-height: 28px;
    top: 0;
    width: 36px;
    font-weight: normal;
}
#summary {
    padding: 10px 20px;
    line-height: 1.8;
    color: #fff;
    width: 800px;
    margin: 0 auto;
    text-align: left;
}
.circle {
    overflow: hidden;
    height: 100px;
    position: relative;
    text-align: center;
    padding: 10px 0;
}
.circle div {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 2px solid #79bd9a;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 100px;
    line-height: 50px;
    position: relative;
    color: #79bd9a;
    font-size: 16px;
}
.circle p {
    position: absolute;
    width: 80px;
    border-radius: 0 0 38px 38px;
    height: 40px;
    line-height: 36px;
    color: #fff;
    background-color: #79bd9a;
    bottom: 0;
    font-size: 12px;
    margin-bottom: 0;
}
#footer {
    padding-top: 10px;
    text-align: center;
    margin-top: 10px;
}
</style>
