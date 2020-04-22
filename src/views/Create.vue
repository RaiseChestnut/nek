<template>
    <div>
        <top-bar title="新建合理化建议" :back-show="true"></top-bar>
        <scroll class="content">
            <container>
                <create-form></create-form>
                <Submission></Submission>
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

  export default {
    name: "Create",
    components: {Scroll, Container, Submission, CreateForm, TopBar}
  }
</script>

<style scoped>
    .content {
        position: absolute;
        top: 46px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
    }
</style>