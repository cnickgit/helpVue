<template>
    <div class="home-page">
      <van-tabs type="card">
        <van-tab title="旺旺号">
          <div class="wwtext">
            <input v-model.trim="searchName" id="aliim" type="text" placeholder="请输入旺旺号">
          </div>
          <van-button class="search-btn" round type="info" size="large" @click="search()">查询</van-button>
          <div class="wwdatp1" v-if="showWangwangDefault">
            <p>
              您近七天共查号：<span>5378</span>
            </p>
            <p>
              查出打标号：<span>350[0.88%]</span>
            </p>
            <p>
              查出降权号：<span>4274[10.74%]</span>
            </p>
            <p>
              挽回损失约：<span>¥120480.0元
              </span>
            </p>
            <p>
              昨天打标号查出比例：<span>0.66%</span>
            </p>
            <p>
              昨天降权号查出比例：<span>12.3%</span>
            </p>
			      <div style="margin-top:10px;text-align:center">
              <a href="https://docs.qq.com/doc/DRXBzS2NCVEpsREpX" target="_blank">
              <img id="shopBetter" src="http://cktool.cy1788.com/photo_mag_upload/wxqq/f3ccdd27d2000e3f9255a7e3e2c48800.jpg">
              </a>
            </div>
          </div>
          <template v-else>
            <div class="wwdata">
              <table width="100%">
                <tbody><tr>
                  <td>买家：<span id="aliimSim">{{data.aliimSim}}</span>****
                  </td>
                  <td class="smimg">实名认证： <span id="nameconform" :style="{color: data.nameconform_word_color}">{{data.nameconform_word}}</span>&nbsp; <span id="vip_level" style="color: rgb(255, 124, 0);">{{hy}} </span>&nbsp; <span id="vip_info" style="color: rgb(97, 63, 113);">{{tbhy}}</span>
                  </td>
                </tr>
                <tr>
                  <td class="smimg2">买家信誉：<span id="buyerCre" style="color: rgb(102, 102, 102);">{{data.buyerCre}}</span></td>
                  <td>注册日期：<span id="created" style="color: rgb(102, 102, 102);">{{data.created}}</span></td>
                </tr>
                <tr>
                  <td class="smimg2">商家信誉：
                    <span v-if="data.sellerCredit == '未开店'" id="sellerCredit" style="color: red;">{{data.sellerCredit}}</span>
                    <span v-if="data.sellerCredit != '未开店'" id="sellerCredit" style="color: rgb(102, 102, 102);">{{data.sellerCredit}}</span>
                  </td>
                  <td>淘龄：<span id="registDay" style="color: rgb(102, 102, 102);">{{data.registDay}}</span></td>
                </tr>
                <tr>
                  <td>性别：
                    <span v-if="data.sex != '保密'" id="sex" style="color: rgb(102, 102, 102);">{{data.sex}}</span>
                    <span v-if="data.sex == '保密'" id="sex" style="color: red;">{{data.sex}}</span>
                  </td>
                  <td>买家总周平均：<span id="buyerAvg">{{data.buyerAvg}}</span></td>
                </tr>
                <tr>
                  <td>好评率：<span id="received_rate" style="color: rgb(102, 102, 102);">{{data.received_rate}}</span></td>
                </tr>
                <tr>
                  <td colspan="2">查询时间：<span id="queryTime">{{data.queryTime}}</span></td>
                </tr>
              </tbody></table>
            </div>
            <div class="userbox3">
              <div style="text-align: right;">
                <a style="font-size: 0.1rem;text-decoration: underline;" href="http://file.cy1788.com/ckdown/video/down/jqup.rar" target="_blank">
                  PC降权提交软件（12月10日更新）
                </a>
              </div>
              <div class="userjb_t">
                用户被打标情况 <span id="sinf"> <img src="@/assets/q.png" title="
                    评价：没有实质证据证明对方是坏人，只是合作不愉快，
                      请用评价功能吧，当然，请别涉及隐私，否则可能会被剥夺举报权！
                      兔子：拿完了商家的返款就恶意退款跑了！
                      蜜獾：用各种方式威胁你给钱！狐狸：用各种方式骗你钱了！
                      鳄鱼：用工商，发票，字体，商标，假货各种方式来坑你钱了！
                      野狗：接完了单给了你差评进行要挟！
                      老鼠:用了淘客链接来拍你的单！
                      降权:被稽查系统判定虚假交易过导致商家单品降权的帐号，
                      下面的数字为照妖镜用户数，实际降权的店铺数是大于等于显示出来的数字的！" onclick="javascript:alert('兔子：拿完了商家的返款就恶意退款跑了！\n'+
                    '蜜獾：用各种方式威胁你给钱！\n'+
                    '狐狸：用各种方式骗你钱了！\n'+
                    '鳄鱼：用工商，发票，字体，商标，假货各种方式来坑你钱了！\n'+
                    '野狗：接完了单给了你差评进行要挟！\n'+
                    '老鼠:用了淘客链接来拍你的单！\n'+
                    '降权:被稽查系统判定虚假交易过导致商家单品降权的帐号，\n'+
                    '下面的数字为照妖镜用户数，实际降权的店铺数是大于等于显示出来的数字的！\n'+
                    '评价：没有实质证据证明对方是坏人，只是合作不愉快，请用评价功能吧，\n'+
                    '当然，请别涉及隐私，否则可能会被剥夺举报权！')">
                </span>
              </div>
              <ul>
                <li title="跑单兔子">
                  <div class="pop-up">兔子</div>
                  <p></p> <span v-if="data.type1 == 0" id="tz" style="color: black;">{{data.type1}}</span>
                  <span v-if="data.type1 > 0" id="tz" style="color: red;">{{data.type1}}</span>
                </li>
                <li>
                  <div class="pop-up">蜜獾</div>
                  <p></p> <span v-if="data.type2 == 0" id="mg" style="color: black;">{{data.type2}}</span>
                  <span id="mg" v-if="data.type2 > 0" style="color: red;">{{data.type2}}</span>
                </li>
                <li>
                  <div class="pop-up">狐狸</div>
                  <p></p> <span v-if="data.type3 == 0" id="hl" style="color: black;">{{data.type3}}</span>
                  <span v-if="data.type3 > 0" id="hl" style="color: red;">{{data.type3}}</span>
                </li>
                <li>
                  <div class="pop-up">鳄鱼</div>
                  <p></p> <span v-if="data.type4 == 0" id="ey" style="color: black;">{{data.type4}}</span>
                  <span id="ey" v-if="data.type4 > 0" style="color: red;">{{data.type4}}</span>
                </li>
                <li>
                  <div class="pop-up">野狗</div>
                  <p></p> <span v-if="data.type5 == 0" id="yg" style="color: black;">{{data.type5}}</span>
                  <span v-if="data.type5 > 0" id="yg" style="color: red;">{{data.type5}}</span>
                </li>
                <li>
                  <div class="pop-up">老鼠</div>
                  <p></p> <span v-if="data.type6 == 0" id="ls" style="color: black;">{{data.type6}}</span>
                  <span v-if="data.type6 > 0" id="ls" style="color: red;">{{data.type6}}</span>
                </li>
                <li>
                  <div class="pop-up">降权</div>
                  <p></p> <span v-if="data.downNum == 0" id="downNum" style="color: black;">{{data.downNum}}</span>
                  <span v-if="data.downNum > 0" id="downNum" style="color: red;">{{data.downNum}}</span>
                </li>
              </ul>
              <div class="user_bottom ub of">
                <p>
                  好评：<span v-if="data.goodNum == 0" id="goodNum" class="fr" style="color: black;">{{data.goodNum}}</span>
                  <span v-if="data.goodNum > 0" id="goodNum" class="fr" style="color: red;">{{data.goodNum}}</span>
                </p>
                <p>
                  差评：<span v-if="data.badNum == 0" id="badNum" class="fr" style="color: black;">{{data.badNum}}</span>
                  <span v-if="data.badNum > 0" id="badNum" class="fr" style="color: red;">{{data.badNum}}</span>
                </p>
                <p>
                  证明：<span v-if="data.proveNum == 0" id="proveNum" class="fr" style="color: black;">{{data.proveNum}}</span>
                  <span v-if="data.proveNum > 0" id="proveNum" class="fr" style="color: red;">{{data.proveNum}}</span>
                </p>
              </div>
              <div class="user_bottom of">
                <p>
                  本周查过商家：<span class="cor2 fr" id="nearWeekShop">{{data.nearWeekShop}}</span>
                </p>
                <p>
                  上周查过商家：<span class="cor2 fr" id="lastWeekShop">{{data.lastWeekShop}}</span>
                </p>
              </div>
            </div>
            <a class="wwbtn7" target="_blank" href="https://docs.qq.com/doc/DRXBzS2NCVEpsREpX"><i></i>店铺运营诊断</a>
            <a class="wwbtn3"><i></i>信誉区间查询</a>
          </template>
        </van-tab>
        <van-tab title="微信/QQ">
          <div class="wwtext">
            <input v-model.trim="mark" id="wxorqq" type="text" placeholder="请输入微信/QQ">
          </div>
          <van-button class="search-btn" round type="info" size="large" @click="searchMark()">查询</van-button>
          <template v-if="showWeixinDefault">
            <div class="wwdatp1">
              <p>
                微信/QQ打标总数：<span>468.33W</span>
              </p>
              <p>
                昨日新增：<span>984</span>
              </p>
              <p>
                昨天打标微信号查出比例：<span>9.49%</span>
              </p>
              <p>
                昨天打标QQ号查出比例：<span>0.0%</span>
              </p>
              <div style="margin-top:10px;text-align:center"><a href="https://docs.qq.com/doc/DRXBzS2NCVEpsREpX" target="_blank"><img id="shopBetter" src="http://cktool.cy1788.com/photo_mag_upload/wxqq/f3ccdd27d2000e3f9255a7e3e2c48800.jpg"></a></div>
            </div>
          </template>
          <div class="wwdatp2">
            <p>
              <i>友情提醒：</i>本查询含51所有数据
            </p>
          </div>
          <div v-if="!showWeixinDefault" class="userbox4">
            <div class="userjb_t">用户被打标情况</div>
            <ul>
              <li>
                <div class="pop-up">骗子狐狸</div>
                <p>
                  <img src="@/assets/huli.png">
                </p> <span id="hlwx" style="color: red; font-weight: bold">{{markObj.hlwx}}</span>
              </li>
              <li>
                <div class="pop-up">打假鳄鱼</div>
                <p>
                  <img src="@/assets/eyu.png">
                </p> <span id="eywx" style="color: rgb(102, 102, 102);">{{markObj.eywx}}</span>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="淘客">
          <div class="ckTkLeft">
            <div class="ckTkteaDiv bor">
              <textarea class="ckTktea" onkeyup="this.value=this.value.replace(/[^\r\n0-9]/g,'');"></textarea>
            </div>
            <p class="ckTk-text">输入多个订单号请换行，最多输入10个</p>
            <a class="ckTkcZBtn tc">查找</a>
          </div>
          <div class="ckTkRight">
            <table>
              <thead>
                <tr>
                  <td width="70%">订单号</td>
                  <td width="30%">是否淘客</td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </van-tab>
      </van-tabs>
      <div v-show="showLoading" class="loading">
        <div class="loadimg">
          <img src="@/assets/loading.gif">
        </div>
      </div>
    </div>
</template>

<script>
    import { Loading,Tab,Tabs,Search,Tabbar,TabbarItem,Button,Col, Row, Toast, Image } from 'vant'
    export default {
        name: "homePage",
        components: {
            [Loading.name]: Loading,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Search.name]: Search,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Button.name]: Button,
            [Col.name]: Col,
            [Row.name]: Row,
            [Toast.name]: Toast,
            [Image .name]: Image
        },
       data(){
          return {
              tbhy: '',
              hy: '',
              ey: require('@/assets/eyu.png'),
              huli: require('@/assets/huli.png'),
              mark: '',
              markObj: {},
              cookie: '',
              token: '',
              showWangwangDefault: true,
              showWeixinDefault: true,
              active: 0,
              searchName: '',
              showEy: false,
              showHuli: false,
              data: {},
              showLoading: false
          }
       },
       methods: {
           searchMark(){
             if(this.mark == '' || this.mark == null){
               alert("提交长度非法，请输入有效微信或QQ号！");
               return;
             }
             this.showLoading = true;
             this.$axios.get("/searchMarking?searchName="+this.mark+"&code="+this.token).then(res => {
               if(res && res.data.code === 200){
                 this.markObj = res.data.data;
                 if(res.data.data.eywx == '有'){
                   this.showEy = true
                 }
                 if(res.data.data.hlwx == '有'){
                   this.showHuli = true
                 }
                 this.showWeixinDefault = false;
                 if(res.data.data.result === 'wxnodata'){
                   this.showWeixinDefault = true;
                   alert("当前微信或QQ没有打标记录")
                 }
               }else if(res.data.data == null){
                 this.showWeixinDefault = true;
                 alert(res.data.msg)
               }
              this.showLoading = false;
             })
           },

           search(){
             if(this.searchName == '' || this.searchName == null){
               alert("提交长度非法，旺旺为2-25位，请重新提交！")
               return;
             }
             this.showLoading = true;
             this.$axios.get("/search?searchName="+this.searchName+"&code="+this.token).then(res => {
                  if(res.data.data == null){
                    this.showWangwangDefault = true;
                    alert(res.data.msg);
                  }else if(res.data.data.result != null && res.data.data.result == '账号不存在'){
                   this.showWangwangDefault = true;
                    alert("账号不存在")
                 }else{
                    this.showWangwangDefault = false;
                    this.data = res.data.data;
                    if(this.data.vip_level == '0'){
                        this.hy = '普通会员';
                    }else if(this.data.vip_level == '10'){
                        this.hy = '超级会员'
                    }
                    if(this.data.vip_info  == 'c' || this.data.vip_info == 'asso_vip'){
                        this.tbhy = ''
                    }else if(this.data.vip_info == 'vip1'){
                        this.tbhy = '淘宝V1会员'
                    }else if(this.data.vip_info == 'vip2'){
                        this.tbhy = '淘宝V2会员'
                    }else if(this.data.vip_info == 'vip3'){
                        this.tbhy = '淘宝V3会员'
                    }else if(this.data.vip_info == 'vip4'){
                        this.tbhy = '淘宝V4会员'
                    }else if(this.data.vip_info == 'vip5'){
                        this.tbhy = '淘宝V5会员'
                    }else if(this.data.vip_info == 'vip6'){
                        this.tbhy = '淘宝V6会员'
                    }
                 }
                this.showLoading = false;
             })
           },
       },
       created() {
         this.token = this.$route.query.code;
         sessionStorage.setItem("code",this.token)
            if(this.token == undefined){
              this.$router.push({ name: 'UserLogin'})
            }
       }
    }
</script>

<style lang="less" scoped>

  .home-page {
    /deep/ .van-tabs__nav--card {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    /deep/ .van-tabs--card>.van-tabs__wrap {
      height: 100%;
      cursor: pointer;
    }
    /deep/ .van-tabs__nav--card .van-tab {
      height: 0.57rem;
      line-height: 0.57rem;
      width: 33.33%;
      float: left;
      background: #ccc;
      color: #fff;
      font-size: 0.2rem;
      text-align: center;
      cursor: pointer;
      border-right: 1px solid #fff;
      &.van-tab--active {
        background-image: linear-gradient(to left, #ff315d, #ff7693);
      }
    }
    /deep/ .van-tabs__nav--card {
      border: none;
    }
    /deep/ .van-field__control--center {
      text-align: left;
    }
    /deep/ .van-search {
      padding: 0;
    }
    /deep/ .van-tabs__content {
      padding: 0 0.16rem 0.7rem;
    }
    /deep/ .van-search {
      border: 1px solid #ababab;
      height: 0.5rem;
      border-radius: 2.5rem;
      margin-top: 0.1rem;
      input {
        font-size: 12.48px;
      }
    }
    /deep/ .van-search__content {
      background-color: transparent;
    }
    /deep/ .search-btn {
      margin-top: 0.15rem;
      color: #fff;
      text-align: center;
      display: block;
      border-radius: 2.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      background: #ff5277;
      font-size: 0.17rem;
      cursor: pointer;
      border: none;
      box-shadow: 0 0 0.05rem 0.01rem rgba(255,82,119,.29);
    }
    .wwbtn7 {
      background-image: -webkit-linear-gradient( -90deg, rgb(255,154,55) 0%, rgb(255,190,49) 100%);
    }
    .red {
      color: #ff5277;
    }
    .content{
      margin-top: 20px;
      margin-left: 30px;
    }
  }
</style>
