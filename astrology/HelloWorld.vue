<template>
  <div class="hello">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>已有账号 请登录</h2>
    <ul>
      <div id="searchbox-container">
        <div id="searchbox">
          <input id="searchbox-input" placeholder="请输入用户名">
        </div>
      </div>
      <br>
      <div id="searchbox-container">
        <div id="searchbox">
          <input id="searchbox-input" placeholder="请输入密码">
        </div>
      </div>
    </ul>
    <ul>
      <input type="submit" id="submit" value="登陆">
    </ul>
    <h3>快速注册，成为我们的用户吧！</h3>
    <ul>
      <li>
        <img src="./assets/wechat.png">
      </li>
      <li>
        <img src="./assets/weibo.png">
      </li>
      <li>
        <img src="./assets/qq.png">
      </li>
      <li>
        <img src="./assets/twitter.png">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到Astrology'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 14px;
  
}
a {
  color: #42b983;
}
#searchbox-container {
    margin: 0 auto 0 auto;
    width: var(--content-width);
}
#searchbox {
    background-color: #D3D3D3;
    border-radius: 22px;
    cursor: text;
    font-size: 18px;
    height: 36px;
    line-height: 36px;
    margin: 0 auto;
    max-width: 300px;
    opacity: 1;
    position: relative;
}
#searchbox-input {
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    margin: 0 auto;
    padding-inline-start: 20px;
    position: absolute;
    top: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
}
#submit {
  background-color: #4CAF50;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: middle;
}
</style>
