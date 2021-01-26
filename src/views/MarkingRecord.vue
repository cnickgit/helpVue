<template>
    <div>
        <h2> 最新通知：
<!--            href="https://beian.miit.gov.cn/#/Integrated/index"-->
            <p>自动充值:<a href="#" target="_blank" @click="toHome">充值链接</a></p>
            <p>客服QQ：612870</p>
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
