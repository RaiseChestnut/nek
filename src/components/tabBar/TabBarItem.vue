<template>
    <div id="tab_bar_item" @click="itemClick">
        <div v-if="!isVShow">
            <slot name="img"></slot>
        </div>
        <div v-else>
            <slot name="img_active"></slot>
        </div>
        <div :class="{active:isVShow}">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        default() {
          return ''
        }
      }
    },
    computed: {
      isVShow() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped lang="scss">
#tab_bar_item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #787878;
    img{
        width: 24px;
    }
}
    .active{
        color: var(--blue);
    }
</style>