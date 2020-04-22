<template>
    <div id="tab_bar">
        <tab-bar-item path="/home">
            <img slot="img" src="~assets/img/tab_bar/home.svg" alt="">
            <img slot="img_active" src="~assets/img/tab_bar/home_active.svg" alt="">
            <div slot="text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/app">
            <img slot="img" src="~assets/img/tab_bar/app.svg" alt="">
            <img slot="img_active" src="~assets/img/tab_bar/app_active.svg" alt="">
            <div slot="text">应用</div>
        </tab-bar-item>
        <tab-bar-item path="/info">
            <img slot="img" src="~assets/img/tab_bar/info.svg" alt="">
            <img slot="img_active" src="~assets/img/tab_bar/info_active.svg" alt="">
            <div slot="text">消息</div>
        </tab-bar-item>
        <tab-bar-item path="/my">
            <img slot="img" src="~assets/img/tab_bar/my.svg" alt="">
            <img slot="img_active" src="~assets/img/tab_bar/my_active.svg" alt="">
            <div slot="text">我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";

  export default {
    name: "TabBar",
    components: {
      TabBarItem

    }
  }
</script>

<style scoped>
    #tab_bar {
        /*background: var(--blue);*/
        height: 49px;
        display: flex;
        position: fixed;
        bottom: 0;
        background: #fff;
        left: 0;
        right: 0;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    }

</style>