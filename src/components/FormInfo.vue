<template>
    <div id="forminfo">{{info}}</div>
</template>

<script>
  export default {
    name: "FormInfo",
    props: {
      info: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
#forminfo{
    color:  #606266;
    font-size: 14px;
    padding-bottom: 24px ;
}

</style>