<template>
    <div>
        <top-bar title="应用"></top-bar>
        <app-list></app-list>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import AppList from "../components/AppList";

  export default {
    name: "App",
    components: {AppList, TopBar},
    created() {
  /**
      getToken('username=zhangsan&password=password&client_id=activiti&grant_type=password').then(res => {
        localStorage.setItem('token', res.data.access_token)
        startProcess().then(res => {
          console.log(`开启流程`, res.data.entry.id)
        })
      })
      getTask().then(res => {
        // console.log(`获取所有任务`, res.data.list.entries)
        res.data.list.entries.forEach((item,index) => {
          console.log(item.entry.id, item.entry.createdDate)

        })
      })
      getTaskItem('054c089e-8523-11ea-805d-dac36b4acb30').then(res => {
        console.log(`获取任务`, res)
      })
      complete(res.data.entry, '').then(res => {
        console.log(`任务完成`, res)
      })
      claim(res.data.entry.id, 'lisi').then(res => {
        getTask().then(res => {
          console.log(`获取所有任务`, res)
        })
      })
**/
    }
  }
</script>

<style scoped>

</style>