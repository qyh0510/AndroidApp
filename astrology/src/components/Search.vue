<template>
  <div class="host">
    <ul>
      <li><a href="#host" @click="go">主页</a></li>
      <li><a href="#fortune" @click="to">运势</a></li>
      <li><a href="https://www.astrology.com/">新闻</a></li>
      <li><a href="#about" @click="zo">关于</a></li>
    </ul>
    <div style="margin-top: 200px">
        <h2 style="text-align: middle">查生日</h2>
    </div>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
    <span>{{selVal}}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
 
    <el-select class="searchbox" v-model="value" multiple placeholder="请选择" @change="currentSel">
    <el-option
     v-for="item in options"
     :key="item.value"
     :label="item.label"
     :value="item.star">
    </el-option>
    </el-select>
    <div id="footer"><h3 style="font-weight: normal; font-size: 14px">@copyright 星座资讯</h3></div>
 </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      msg: '欢迎来到Astrology',
      options: [{
        value: '选项1',
        label: '3月21日~4月20日 春分-谷雨',
        star:'白羊座 吉星轨道:土星/金星 ♄/Ven'
       }, {
        value: '选项2',
        label: '4月21日~5月21日 谷雨-小满',
        star:'金牛座 吉星轨道:土星/金星 ⚷/Mer'
       }, {
        value: '选项3',
        label: '5月22日~6月21日 小满-夏至',
        star:'双子座 吉星轨道:土星/金星 ♅/Vul'
       }, {
        value: '选项4',
        label: '6月22日~7月23日 夏至-大暑',
        star:'巨蟹座 吉星轨道:土星/金星 ♆/Sol'
       }, {
        value: '选项5',
        label: '7月24日~8月23日 大暑-处暑',
        star:'狮子座 吉星轨道:土星/金星 ☉/Nep'
       }
       , {
        value: '选项6',
        label: '8月24日~9月23日 处暑-秋分',
        star:'处女座 吉星轨道:土星/金星 ⛢/Cae'
       }, {
        value: '选项7',
        label: '9月24日~10月23日 秋分-霜降',
        star:'天秤座 吉星轨道:土星/金星 ☿/Chi'
       }, {
        value: '选项8',
        label: '10月24日~11月22日 霜降-小雪',
        star:'天蝎座 吉星轨道:土星/金星 ♀/Sat'
       }, {
        value: '选项9',
        label: '11月23日~12月21日 小雪-冬至',
        star:'射手座 吉星轨道:土星/金星 ♁/Jup'
       }, {
        value: '选项10',
        label: '12月22日~1月20日 冬至-大寒',
        star:'摩羯座 吉星轨道:土星/金星 ♂/Cer'
       }, {
        value: '选项11',
        label: '1月21日~2月19日 大寒-雨水',
        star:'水瓶座 吉星轨道:土星/金星 ⚳/Mar'
       }, {
        value: '选项12',
        label: '2月20日~3月20日 雨水-春分',
        star:'双鱼座 吉星轨道:土星/金星 ♃/Ter'
       }
       ],
       value: '',
       dialogVisible: false,
       selVal : ''
      }
  },
  methods:{
   go(){
    this.$router.push('/Host')
   },
   to(){
    this.$router.push('/Fortune')
   },
   zo(){
  		this.$router.push('/about')
      },
   currentSel(selVal){
    this.selVal = selVal;
    this.dialogVisible = true;
   },
   See (e) {
        window.location.href = e
   },
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
    margin: 30px auto;
    max-width: 1000px;
    width: 20%;
    height: 40px;
}
#footer {
    padding: 10px;
    text-align: center;
    margin-top: 100px;
}
</style>