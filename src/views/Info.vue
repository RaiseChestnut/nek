<template>
    <div>
        <top-bar title="信息"></top-bar>
        <info-list v-for="item in 10"></info-list>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import InfoList from "../components/InfoList";

  export default {
    name: "Info",
    components: {InfoList, TopBar}
  }
</script>

<style scoped>

</style>