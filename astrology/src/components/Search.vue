<template>
  <div class="host">
    <ul>
      <li><a class="active" href="#host">主页</a></li>
      <li><a href="#fortune">运势</a></li>
      <li><a href="#news">新闻</a></li>
      <li><a href="#about">关于</a></li>
    </ul>
    <div style="margin-top: 200px">
        <h2 style="text-align: middle">查生日</h2>
    </div>
    <div class="searchbox">
        <select class="choose" id="a">
            <option value="0">出生月份</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <select class="choose" id="b">
            <option value="0">出生日期</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>
        <input type="button" value="查询" onclick="if(document.getElementById('a').value!='0' &amp;&amp; document.getElementById('b').value!='0'){window.location='/astrology/xingzuochaxun/'+document.getElementById('a').value+'-'+document.getElementById('b').value+'.aspx'} else{alert('请选择日期')}">
    </div>
    <div id="footer"><h3 style="font-weight: normal; font-size: 14px">@copyright 星座资讯</h3></div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      msg: '欢迎来到Astrology'
    }
  },
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
.searchbox {
    margin: 100px auto;
    max-width: 1000px;
}
.searchbox .choose {
    margin-right: 10%;
    border-radius: 4px;
    border: 1px solid silver;
    width: 25%;
    height: 38px;
}
.searchbox input {
    width: 10%;
    background: #519D9E;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    height: 38px;
    border: 0;
}
#footer {
    padding: 10px;
    text-align: center;
    margin-top: 100px;
}
</style>
