<template>
    <div>
        <top-bar title="创建报修单" back-show="true"></top-bar>
        <container>
            <create-form></create-form>
            <Submission></Submission>
        </container>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import CreateForm from "../components/CreateForm";
  import Submission from "../components/Submission";
  import Container from "../components/Container";

  export default {
    name: "Repair",
    components: {Container, Submission, CreateForm, TopBar}
  }
</script>

<style scoped>

</style>