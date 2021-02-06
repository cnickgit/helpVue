<template>
    <div>
        <h2> 最新通知： <p>打标流程、需要提供的证据，都参照下面的链接，整理好后发给客服
            <a href="#" @click="toHome">请点击链接</a>

        </p></h2>
    </div>
</template>

<script>
    export default {
        name: "Mark",
        methods: {
            toHome(){
                window.open('https://docs.qq.com/doc/DRXhtQ2l1VmhFWWFj',"_blank")
                // window.location.href = 'https://5230.xyz'
            }
        }
    }
</script>

<style scoped>

</style>
