<template>
  <div class="about">
    <ul>
      <li><a href="#host" @click="go">主页</a></li>
      <li><a href="#fortune" @click="to">运势</a></li>
      <li><a href="https://www.astrology.com/">新闻</a></li>
      <li><a href="#about">关于</a></li>
      <li style="float: right; padding: 6px 8px 0 0"><input type=button value="返回"  @click="back" onclick=history.go(-1)></li>
    </ul>
    <div class="head">
        <div style="padding-top: 20px; padding-bottom: 10px; padding-inline-start: 8px">
            <h2 style="float: left; margin-block-start: 5px">关于我们</h2>
        </div>
    </div>
    <div class="content">
        <div id="title">2017级软件工程</div>
        <p id="name">陈雨欣&emsp;201711143007</p>
        <p id="name">齐奕晖&emsp;201711143001</p>
        <p id="name">罗冰聪&emsp;201711143019</p>
        <p id="name">莫桂金&emsp;201711143021</p>
    </div>
    <div id="footer"><h3 style="font-weight: normal; font-size: 14px">@copyright 星座资讯</h3></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: '欢迎来到Astrology'
    }
  },
  methods:{
   go(){
    this.$router.push('/Host')
   },
   back(){
  		this.$router.push('/Host')
    },
   to(){
    this.$router.push('/Fortune')
   }
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
    background: #253939; 
    padding-top: 20px;
    padding-bottom: 6px;
    border-radius: 10px;
}
#title, #name {
    font-size: 24px;
    text-align: center;
    color: #fff;
}
#name {
    font-size: 18px;
    text-align: center;
    color: #fff;
}
.date {
    text-align: center;
    color: #fff;
    margin-top: 8px;
}
#footer {
    padding-top: 10px;
    text-align: center;
    margin-top: 10px;
}
</style>