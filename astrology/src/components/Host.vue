<template>
  <div class="host">
    <ul>
      <li><a href="#host">主页</a></li>
      <li><a href="#fortune" @click="go">运势</a></li>
      <li><a href="https://www.astrology.com/">新闻</a></li>
      <li><a href="#about" @click="zo">关于</a></li>
      <li style="float: right"><a href="#search" @click="to">查生日</a></li>
    </ul>
    <div id="title"><h2>十二星座运势</h2></div>
    <div class="content">
      <div id="content-line">
        <a href="#shuiping" id="box" @click="ao" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/shuiping.png">
          <p>水瓶</p>
          <p>1.20-2.18</p>
        </a>
        <a href="#shuangyu" id="box" @click="bo">
          <img src="./assets/shuangyu.png">
          <p>双鱼</p>
          <p>2.19-3.20</p>
        </a>
        <a href="#baiyang" id="box" @click="co">
          <img src="./assets/baiyang.png">
          <p>白羊</p>
          <p>3.21-4.19</p>
        </a>
        <a href="#jinniu" id="box" @click="xo">
          <img src="./assets/jinniu.png">
          <p>金牛</p>
          <p>4.20-5.20</p>
        </a>
      </div>
      <div id="content-line">
        <a href="#shuangzi" id="box" @click="eo" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/shuangzi.png">
          <p>双子</p>
          <p>5.21-6.20</p>
        </a>
        <a href="#juxie" id="box" @click="fo">
          <img src="./assets/juxie.png">
          <p>巨蟹</p>
          <p>6.21-7.22</p>
        </a>
        <a href="#shizi" id="box" @click="yo">
          <img src="./assets/shizi.png">
          <p>狮子</p>
          <p>7.23-8.22</p>
        </a>
        <a href="#chunv" id="box" @click="ho">
          <img src="./assets/chunv.png">
          <p>处女</p>
          <p>8.23-9.22</p>
        </a>
      </div>
      <div id="content-line">
        <a href="#tiancheng" id="box" @click="io" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/tiancheng.png">
          <p>天秤</p>
          <p>9.23-10.22</p>
        </a>
        <a href="#tianxie" id="box" @click="jo">
          <img src="./assets/tianxie.png">
          <p>天蝎</p>
          <p>10.23-11.21</p>
        </a>
        <a href="#sheshou" id="box" @click="ko">
          <img src="./assets/sheshou.png">
          <p>射手</p>
          <p>11.22-12.21</p>
        </a>
        <a href="#mojie" id="box" @click="lo">
          <img src="./assets/mojie.png">
          <p>摩羯</p>
          <p>12.22-1.19</p>
        </a>
      </div>
    </div>
    <div id="footer"><h3 style="font-weight: normal; font-size: 14px">@copyright 星座资讯</h3></div>
  </div>
</template>

<script>
export default {
  name: 'Host',
  data () {
    return {
      msg: '欢迎来到Astrology'
    }
  },
  methods:{
   ao(){
    this.$router.push({path:'/Fortune', query:{msgg:'水瓶座'}});
   },
   bo(){
    this.$router.push({path:'/Fortune', query:{msgg:'双鱼座'}});
   },
   co(){
    this.$router.push({path:'/Fortune', query:{msgg:'白羊座'}});
   },
   xo(){
    this.$router.push({path:'/Fortune', query:{msgg:'金牛座'}});
   },
   eo(){
    this.$router.push({path:'/Fortune', query:{msgg:'双子座'}});
   },
   fo(){
    this.$router.push({path:'/Fortune', query:{msgg:'巨蟹座'}});
   },
   yo(){
    this.$router.push({path:'/Fortune', query:{msgg:'狮子座'}});
   },
   ho(){
    this.$router.push({path:'/Fortune', query:{msgg:'处女座'}});
   },
   io(){
    this.$router.push({path:'/Fortune', query:{msgg:'天秤座'}});
   },
   jo(){
    this.$router.push({path:'/Fortune', query:{msgg:'天蝎座'}});
   },
   ko(){
    this.$router.push({path:'/Fortune', query:{msgg:'射手座'}});
   },
   lo(){
    this.$router.push({path:'/Fortune', query:{msgg:'摩羯座'}});
   },
   to(){
    this.$router.push('/search')
   },
   zo(){
  		this.$router.push('/about')
  	},
   go(){
    this.$router.push('/Fortune')
   }
  }
}
</script>

<style scoped>
p {
    margin: 3px 0;
    font-size: 14px;
    font-weight: bold;
}
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
#title {
    height: 50px;
    position: relative;
    border-top: 1px;
    border-bottom: 1px;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
    margin: 30px 20px 0 20px;
    padding: 10px 0 14px 0;
    padding-inline-start: 20px;
    background-color: #f0f5f9;
    text-align: left;
}
.content {
    position: relative;
    background-color: #f8f8f8;
    margin: 0 20px;
    padding: 0;
}
.content img {
    width: 50%;
    height: 100%;
}
#box {
    width: 25%;
    text-align: center;
    color: #484848;
    float: left;
    display: block;
    padding: 20px 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    height: 100%;
    text-decoration: none;
}
#footer {
    padding: 10px;
    text-align: center;
    margin-top: 550px;
}
</style>
