<template>
    <div class="feed_back_form">
        <FormInfo info="请你为本次服务做出评价"></FormInfo>
        <p>主题：{{msg}}</p>
        <p>当前状态：<font style="color: red">已完成</font></p>

        <p class="flex">评价：<i class="el-icon-star-on" @click="onCount(index)" :class="{active:index <= starIndex}"
                              v-for="(item,index) in 5"></i></p>
        <submission></submission>
    </div>
</template>

<script>
  import FormInfo from "./FormInfo";
  import Submission from "./Submission";

  export default {
    name: "FeedBackForm",
    data() {
      return {
        starIndex: 0,
        msg: '水管报修'
      }
    },
    components: {Submission, FormInfo},
    methods: {
      onCount(index) {
        this.starIndex = index
      }

    }
  }
</script>

<style scoped>


    .el-icon-star-on {
        color: #999999;
        font-size: 3rem;
    }

    .active {
        color: #ffe55c;
    }

    p {
        font-size: 1.2rem;
        margin: 1rem 0;

    }

    .flex {
        display: flex;
        align-items: center;
    }
</style>