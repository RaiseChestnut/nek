<template>
    <div class="app_list">
        <p class="title">流程应用</p>
        <div class="list_box">
            <div class="app_item" @click="$router.push({name:'create'})">
                <img src="~assets/img/app/tian.png" alt="">
                <span>合理化建议</span>
            </div>
            <div class="app_item" @click="$router.push({name:'repair'})">
                <img src="~assets/img/app/xinjian.png" alt="">
                <span>一键报修</span>
            </div>
            <div class="app_item">
                <img src="~assets/img/app/daiban.png" alt="">
                <span>待办事件</span>
            </div>
            <div class="app_item">
                <img src="~assets/img/app/wancheng.png" alt="">
                <span>已办流程</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AppList",
    methods:{

    }
  }
</script>

<style scoped lang="scss">
    .app_list {
        margin-top: 2rem;
        padding: 0 1.2rem 1.2rem;
        border-bottom: 1px solid #f3f3f3;

        .title {
            color: #787878;
            font-weight: bold;
            font-size: 1.2rem;

        }
        .list_box {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .app_item {
                margin-top: 1rem;
                min-width: 25%;
                display: flex;
                flex-direction: column;
                justify-items: center;
                align-items: center;

                span {
                    margin-top: 0.5rem;
                    color: #787878;
                }
            }
        }
    }
</style>