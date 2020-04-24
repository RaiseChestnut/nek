<template>
    <div class="wrapper" ref="wrapper">
        <div class="content" ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        probeType: 3
      })
      this.scroll.on('scroll',()=>{

      })
    },
    methods: {

    }
  }
</script>

<style scoped>
.wrapper{
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
</style>