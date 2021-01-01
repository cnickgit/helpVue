<template>
  <div>
    <van-row  style="margin-top: 40px;">
      <van-col type="flex" justify="center" span="24"><span style="margin-left: 18px">编号:{{my.id}}</span> </van-col>
    </van-row>
    <van-row class="zt" type="flex" justify="center" style="margin-top: 30px;">
      <van-col span="6"><span style="margin-left: 30px;color: #ffcd54;">{{my.prescription}}</span></van-col>
      <van-col span="6"><span style="margin-left: 30px">{{my.prescription - my.remainingTimes}}</span></van-col>
      <van-col span="6"><span style="margin-left: 10px">{{my.remainingTimes}}</span></van-col>
      <van-col span="6"><span style="margin-left: 10px;color: red">普通</span></van-col>
    </van-row>
    <van-row type="flex" justify="center" style="margin-top: 20px;">
      <van-col span="6"><span style="margin-left: 18px">可查询总数</span></van-col>
      <van-col span="6"><span style="margin-left: 18px">已查询</span></van-col>
      <van-col span="6"><span style="margin-left: 10px">剩余</span></van-col>
      <van-col span="6"><span style="margin-left: 10px">计费模式</span></van-col>
    </van-row>
    <h3 style="margin-top: 40px;"><span style="margin-left: 40px">有效截止日期: {{my.endTime == null ? '不限时间' : my.endTime}}</span></h3>
  </div>
</template>

<script>
    import { Col, Row, Cell, CellGroup, Icon, Image as VanImage } from 'vant';
    export default {
        name: "my.vue",
        components:{
            [Col.name]: Col,
            [Row.name]: Row,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Icon.name]: Icon,
            [VanImage.name]: VanImage
        },
        data(){
          return {
            my:{}
          }
        },
        methods: {
          getTokenById(){
            let code = sessionStorage.getItem("code");
            this.$axios.get("/myRecord?id="+code).then(res => {
              if(res.data.code === 200){
                this.my = res.data.data;
              }
              console.log("res:",res)
            })
          }
        },
        created() {
            this.getTokenById();
        }
    }
</script>

<style scoped>
  .zt span{
    font-size: 0.25rem;
    font-weight: bold;
  }
</style>
