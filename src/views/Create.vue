<template>
    <div class="creat">
        <top-bar title="新建合理化建议" :back-show="true"></top-bar>
        <scroll class="content">
            <container>
                <create-form ref="createForm"></create-form>
                <Submission @onsubmit="onSubmit"></Submission>
            </container>
        </scroll>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import CreateForm from "../components/CreateForm";
  import Submission from "../components/Submission";
  import Container from "../components/Container";
  import Scroll from "../components/Scroll";
  import {startProcess, getTask, complete} from "../network/utils";

  export default {
    name: "Create",
    components: {Scroll, Container, Submission, CreateForm, TopBar},
    methods: {
      async onSubmit() {
        const data = this.$refs.createForm.data
        console.log(data)
        const {data: {entry: {id}}} = await startProcess()
        console.log('流程id', id)

        const {data: {_embedded: {tasks}}} = await getTask()
        for (let i = 0; i < tasks.length; i++) {
          const {id: taskId, processInstanceId} = tasks[i]
          /** 自动做任务程序
          setTimeout(() => {
            complete(taskId).then(res => {
              if (res) {
                console.log(i)
                console.log('任务数量',tasks.length)
              }
            })
          }, 1000 * i)
           **/
          if (processInstanceId.indexOf(id) !== -1) {
            console.log(`匹配完成,任务id`, taskId)
            complete(taskId,data)
            console.log('任务完成')
            break
          } else {
            console.log('匹配中')
          }
        }


        // for (let i = 0; i < entries.length; i++) {
        //   const {entry: {createdDate, id}} = entries[i]
        //   console.log(entries[i])
        //   if (createdDate.indexOf(startDate.slice(0, -9)) === 0) {
        //     console.log('找到了', id)
        //     if (id) {
        //       complete(id, '')
        //     }
        //     break
        //   }
        // }
      }
    }
  }
</script>

<style scoped>
    .creat {
        height: 100vh;
        width: 100vw;
        position: relative;
        background-color: #fff;
        z-index: 888;
    }
</style>