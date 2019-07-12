<template>
  <div class="fortune">
    <ul>
      <li><a class="active" href="#host">主页</a></li>
      <li><a href="#fortune">运势</a></li>
      <li><a href="#news">新闻</a></li>
      <li><a href="#about">关于</a></li>
      <li style="float: right; padding: 6px 8px 0 0"><input type=button value="返回" onclick=history.go(-1)></li>
    </ul>
    <div class="head">
        <div style="padding-top: 20px; padding-bottom: 10px; padding-inline-start: 8px">
            <h2 style="float: left; margin-block-start: 5px">查看运势</h2>
        </div>
        <div class="time">
            <input type="button" value="今日" style="border-right: 1px solid #7f9eb2;">
            <input type="button" value="明日" style="border-right: 1px solid #7f9eb2">
            <input type="button" value="本周" style="border-right: 1px solid #7f9eb2">
            <input type="button" value="本月" style="border-right: 1px solid #7f9eb2">
            <input type="button" value="本年" style="border-right: 0">
        </div>
    </div>
    <div class="content">
        <div id="title">水瓶座今日运势</div>
        <p class="date">2019年07月10日</p>
        <div class="data">
            <img class="img" src="./assets/shuiping.png">
            <div class="histogram">
                <div>
                    <b>综合</b>
                    <p><span style="width: 80%"></span></p>
                    <strong>80%</strong>
                </div>
                <div>
                    <b>健康</b>
                    <p><span style="width: 70%"></span></p>
                    <strong>70%</strong>
                </div>
                <div>
                    <b>爱情</b>
                    <p><span style="width: 60%"></span></p>
                    <strong>60%</strong>
                </div>
                <div>
                    <b>财富</b>
                    <p><span style="width: 90%"></span></p>
                    <strong>90%</strong>
                </div>
                <div>
                    <b>工作</b>
                    <p><span style="width: 75%"></span></p>
                    <strong>75%</strong>
                </div>
            </div>
        </div>
        <div id="summary">有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，
        常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰
        或询问，也不想让某些想法曝光，个性变得有些隐晦。</div>
        <div class="circle">
            <div>古铜<p>幸运色</p></div>
            <div>8<p>幸运数字</p></div>
            <div>天秤座<p>速配星座</p></div>
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
      msg: '欢迎来到Astrology'
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
