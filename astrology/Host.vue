<template>
  <div class="host">
    <ul>
      <li><a class="active" href="#host">主页</a></li>
      <li><a href="#news">运势</a></li>
      <li><a href="#contact">新闻</a></li>
      <li><a href="#about">关于</a></li>
      <li style="float: right"><input type="text" placeholder="搜索..."></li>
    </ul>
    <div id="title"><h2>十二星座运势</h2></div>
    <div id="content">
      <div id="content-line">
        <a href="#shuiping" id="box" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/wechat.png">
          <p>水瓶</p>
          <p>1.20-2.18</p>
        </a>
        <a href="#shuangyu" id="box">
          <img src="./assets/wechat.png">
          <p>双鱼</p>
          <p>2.19-3.20</p>
        </a>
        <a href="#baiyang" id="box">
          <img src="./assets/wechat.png">
          <p>白羊</p>
          <p>3.21-4.19</p>
        </a>
        <a href="#jinniu" id="box">
          <img src="./assets/wechat.png">
          <p>金牛</p>
          <p>4.20-5.20</p>
        </a>
      </div>
      <div id="content-line">
        <a href="#shuangzi" id="box" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/wechat.png">
          <p>双子</p>
          <p>5.21-6.20</p>
        </a>
        <a href="#juxie" id="box">
          <img src="./assets/wechat.png">
          <p>巨蟹</p>
          <p>6.21-7.22</p>
        </a>
        <a href="#shizi" id="box">
          <img src="./assets/wechat.png">
          <p>狮子</p>
          <p>7.23-8.22</p>
        </a>
        <a href="#chunv" id="box">
          <img src="./assets/wechat.png">
          <p>处女</p>
          <p>8.23-9.22</p>
        </a>
      </div>
      <div id="content-line">
        <a href="#tiancheng" id="box" style="border-left: 1px solid #e8e8e8">
          <img src="./assets/wechat.png">
          <p>天秤</p>
          <p>9.23-10.22</p>
        </a>
        <a href="#tianxie" id="box">
          <img src="./assets/wechat.png">
          <p>天蝎</p>
          <p>10.23-11.21</p>
        </a>
        <a href="#sheshou" id="box">
          <img src="./assets/wechat.png">
          <p>射手</p>
          <p>11.22-12.21</p>
        </a>
        <a href="#mojie" id="box">
          <img src="./assets/wechat.png">
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
  }
}
</script>

<style scoped>
p {
    margin: 3px 0;
    font-size: 15px;
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
    padding: 6px;
    border: none;
    margin-top: 10px;
    margin-right: 16px;
    font-size: 14px;
    border-radius: 6px;
}
#title {
    height: 50px;
    position: relative;
    border-top: 1px;
    border-bottom: 1px;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
    margin: 100px 200px 0 200px;
    padding: 10px 0 14px 0;
    padding-inline-start: 20px;
    background-color: #f0f5f9;
    text-align: left;
}
#content {
    position: relative;
    background-color: #f8f8f8;
    margin: 0 200px;
    padding: 0;
}
#box {
    width: 25%;
    text-align: center;
    color: #484848;
    float: left;
    display: block;
    padding: 10px 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    height: 130px;
    text-decoration: none
}
#footer {
    padding: 10px;
    text-align: center;
    margin-top: 500px;
}
</style>
