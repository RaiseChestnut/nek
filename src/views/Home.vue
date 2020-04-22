<template>
    <div>
        <top-bar title="首页"></top-bar>
        <event-list title="最新通知"></event-list>
        <event-list title="待办事件"></event-list>
        <event-list title="与我相关"></event-list>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import EventList from "../components/EventList";
  export default {
    name: "Home",
    components: {EventList, TopBar}
  }
</script>

<style scoped>

</style>