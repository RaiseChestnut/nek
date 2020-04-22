<template>
    <van-nav-bar style="background-color:#26a2ff; width: 100vw;">
        <span slot="left" class="left" v-if="backShow" @click="$router.back()">
            <van-icon color="#fff"
                      name="arrow-left"/></span>
        <span slot="title" class="center">{{title}}</span>
    </van-nav-bar>
</template>

<script>
  export default {
    name: "TopBar",
    props: {
      title: {
        type: String,
        default() {
          return ''
        }
      },
      backShow: {
        type: Boolean,
        default() {
          return false;
        }
      }
    }
  }
</script>

<style scoped>
    .left {
        color: #fff;
    }

    .center {
        color: #fff;
    }
</style>