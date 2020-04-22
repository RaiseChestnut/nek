<template>
    <div>
        <van-button class="btn" icon="passed" @click="onsubmit" type="info">提交</van-button>
        <van-button class="btn" icon="close" @click="$router.back()" type="default">返回</van-button>
    </div>
</template>

<script>
  export default {
    name: "Submission",
    methods: {
      onsubmit() {
        this.$emit('onsubmit')
      },
      oncancel() {
        this.$emit('oncancel')
      }
    }
  }
</script>

<style scoped>
    div {
        text-align: center;
    }

    .btn {
        margin: 0 24px;
    }
</style>