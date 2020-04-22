<template>
    <div id="event_list">
        <!--标题-->
        <span class="title">{{title}}
            <span class="info">
                {{datas.length }}
            </span>
        </span>
        <!--/标题-->
        <!--遍历每一条-->
        <span v-for="(item,index) in datas"
              class="event_item"
              @click="progressClick(item.type,item.id)"
              v-if="noHide||index<3">
            任务id：{{item.entry.id}} 创建日期：{{item.entry.createdDate}}
<!--              {{item.title}}:{{item.info}}-->
        </span>
        <!--/遍历每一条-->
        <!--查看全部和隐藏-->
        <p class="loadMore"
           v-if="hide"
           @click="loadMore">
            {{text=noHide?'[收起]':'[查看全部]'}}
        </p>
        <!--/查看全部和隐藏-->
    </div>
</template>

<script>


  export default {
    name: "EventList",
    props: {
      title: {
        type: String,
        default() {
          return ""
        }
      },
      datas: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        /** 默认不隐藏**/
        noHide: false
      }
    },
    computed: {
      hide() {
        /** 判断数组长度是否大于 3   大于 3 则显示【查看全部】 【收起】 按钮**/
        return this.datas.length > 3
      }
    },
    mounted() {
      // console.log(this.hide)
    },
    methods: {
      loadMore() {
        /** 根据 noHide 判断切换按钮中的文字信息**/
        this.noHide = !this.noHide
      },
      progressClick(type, id) {
        console.log(id)
        if(type){
          this.$router.push(`/${type}/${id}`)
        }

      }
    }
  }
</script>

<style scoped lang="scss">
    #event_list {
        padding: 1.2rem 1rem;
        color: #333;
        border-bottom: 1px solid #f3f3f3;
        /*background-color: #f7f7f7;*/

        .title {
            font-weight: bold;
            font-size: 1.5rem;
            position: relative;
            margin-bottom: 100px;

            .info {
                position: absolute;
                top: 0px;
                left: 110%;
                min-width: 16px;
                padding: 0 3px;
                color: #fff;
                font-weight: 500;
                font-size: 1rem;
                line-height: 14px;
                text-align: center;
                background-color: #ee0a24;
                border: 1px solid #fff;
                border-radius: 16px;
            }
        }

        .event_item {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin: 1rem 0;
            font-size: 1.3rem;
        }

        .loadMore {
            text-align: right;
        }
    }
</style>