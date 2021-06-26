<template>
    <div>
        <h2>
<!--            自助充值系统-->
<!--            href="https://beian.miit.gov.cn/#/Integrated/index"-->
<!--            <p>自动充值:<a href="#" target="_blank" @click="toHome">充值链接</a></p>-->

<!--            <p> 先进入购买网址：<a href="#" target="_blank" @click="toHome">https://www.5230.xyz</a></p>-->
            <p>
<!--                选择套餐，付款完毕，返回确认，“查看详情”有新的链接-->
                <br/>
<!--                如有问题-->
                请联系客服QQ：612870 进行人工购买
                <br/>
<!--                <span style="color: red;">（建议用浏览器进入购买网址，支付能自动跳转到支付宝，否则得截图扫码）</span>-->
            </p>
        </h2>
    </div>
</template>

<script>
    export default {
        name: "MarkingRecord",
        methods: {
            toHome(){
                window.open('https://5230.xyz',"_blank")
                // window.location.href = 'https://5230.xyz'
            }
        }
    }
</script>

<style scoped>

</style>
