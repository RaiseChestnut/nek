<template>
    <div class="viewPort">
        <div class="infoList"
             ref="infoList"
             @click="listClick"
             @touchstart="listTouchStart" x
             @touchend='listTouchEnd'
             @touchmove=listTouchMove>
            <div class="info_type_icon">
                <img src="~assets/img/info/warehouse.png" alt="">
            </div>
            <div class="info_content">
                <div class="top_box">
                    <span class="info_title">仓库</span>
                    <span class="info_date">2020-10-10</span>
                </div>
                <p class="info_detail">流程：(王大锤)领料申请单（非BOM物料）-王大锤-2020-10-10</p>
            </div>
        </div>
        <div class="del" ref="del">
            删除
        </div>
    </div>
</template>

<script>
  export default {
    name: "InfoList",
    data() {
      return {
        startX: null,
        moveX: null,
        endX: null,
        listStyle: ''
      }
    },
    computed: {},
    methods: {
      listTouchStart(e) {
        this.startX = e.changedTouches[0].pageX
        this.listStyle = this.$refs.infoList.style
        // console.log(this.$refs.infoList.style.transform)
      },
      listTouchMove(e) {
        this.moveX = e.changedTouches[0].pageX
        this.changeX(this.startX - this.moveX)
        return this.startX - this.moveX
      },
      listTouchEnd(e) {
        this.endX = e.changedTouches[0].pageX
        if (this.listTouchMove(e) <= 30) {
          this.changeX(0, true)
        }else {
          this.changeX(this.$refs.del.clientWidth, true)
        }
      },
      changeX(distance, bool = false) {
        if (bool) {
          this.listStyle.transition = 'all 0.2s linear'
        } else {
          this.listStyle.transition = 'none'
        }
        if (distance <= this.$refs.del.clientWidth) {
          this.listStyle.transform = `translateX(-${distance}px)`
        }
      },
      listClick() {
        this.changeX(0, true)
      }
    }
  }
</script>

<style scoped lang="scss">
    .viewPort {
        position: relative;
    }

    .del {
        top: 0;
        right: 0;
        background-color: red;
        position: absolute;
        width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        font-size: 1.2rem;
    }

    .infoList {
        width: 100%;
        position: relative;
        z-index: 100;
        display: flex;
        align-items: center;
        padding: 0.5rem 1.2rem;
        background-color: #fff;
        border-bottom: 1px solid #f3f3f3;
        transition: none;

        .info_content {
            margin-left: 1.2rem;
            flex: 1;
            overflow: hidden;

            .top_box {
                display: flex;
                justify-content: space-between;

                .info_title {
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                .info_date {
                    color: #787878;
                }
            }

            .info_detail {
                width: 100%;
                color: #6c757d;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }


</style>