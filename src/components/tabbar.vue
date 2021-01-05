<template>
    <div>
        <van-tabbar v-model="active" active-color="#ff5076" inactive-color="#666" style=" margin-top:20px;height: 50px">
            <van-tabbar-item
                    v-for="(item,index) in tabbars"
                    :key="index"
                    @click="tab(index,item.name)"
            >
                <span :class="currIndex == index ? active:''">{{item.title}}</span>
                <template slot="icon" slot-scope="props">
                    <img :src="props.active ? item.activeIco : item.normalIco">
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Loading,Tab,Tabs,Search,Tabbar,TabbarItem,Button  } from 'vant'
    export default {
        components: {
            [Loading.name]: Loading,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Search.name]: Search,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Button.name]: Button
        },
        data(){
            return {
                code: '',
                currIndex: '',
                active: 0,
                tabbars: [
                    {
                        name: "HomePage",
                        title: "首页",
                        normalIco: require('@/assets/home_ico.png'),
                        activeIco: require('@/assets/home_ico_active.png'),
                        active: 0
                    },
                    {
                        name: "My",
                        title: "我的",
                        normalIco: require('@/assets/my_ico.png'),
                        activeIco: require('@/assets/my_ico_active.png'),
                        active: 1
                    }
                ],
            }
        },
        methods: {
            tab(index, val) {
                console.log("val:",val)
                this.code = sessionStorage.getItem("code");
                this.currIndex = index;
                this.$router.push({name : val,query: {code : this.code}});
            }
        },
        created(){
            // this.$router.push('/homePage')
        }
    };
</script>
