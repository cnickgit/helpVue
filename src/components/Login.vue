<template>
    <div>
        <div style="margin-left: 120px;margin-top: 100px;">
            <h2><span>&nbsp;&nbsp;</span>
                <p></p>
                QQ:612870

            </h2>
        </div>
        <div style="margin-top: 60px">
            <van-cell-group>
                <van-field v-model.trim="token" label="" placeholder="请输入激活码" />
            </van-cell-group>
        </div>
        <div style="margin-top: 20px;margin-left: 100px;">
            <van-row>
                <van-col span="12">
                    <van-button size="large" type="info" @click="login">登录</van-button>
                </van-col>
            </van-row>
        </div>
        <div style="margin-top: 40px;">
            <a target="_blank" style="margin-left: 100px;" href="https://beian.miit.gov.cn/#/Integrated/index"><b style="color:red;">浙ICP备2021002477号-1</b></a>
        </div>
    </div>
</template>

<script>
    import {Field, Button, Row, Cell, CellGroup, Col, Toast} from 'vant'
    export default {
        name: "Login",
        components: {
            [Button.name]: Button,
            [Field.name]: Field,
            [Row.name]: Row,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Col.name]: Col,
        },
        data(){
            return {
                token: ''
            }
        },
        methods:{
            getCookie(){
                this.$axios.get("/zyjLogin").then(res => {
                    console.log("res:",res)
                    if(res != null){
                        this.$router.push({ name: 'HomePage',query: {code: this.token}})
                    }else{
                        Toast.fail("激活码失效请联系客服")
                    }
                })
            },
            login(){
                this.enableToken();
            },
            enableToken(){
                this.$axios.get('/enableToken?code='+this.token).then((res) => {
                    console.log("data:",res.data.data)
                    if(res.data.code == 200){
                        this.$router.push({ name: 'HomePage',query: {code: this.token}})
                    }else if(res.data.code == 400){
                        Toast.fail(res.data.msg);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
