<template>
    <div>
        <top-bar title="审批一" :back-show="true"></top-bar>
        <scroll class="content">
            <container>
                <create-form></create-form>
                <one-stage-approval-form></one-stage-approval-form>
                <submission></submission>
            </container>
        </scroll>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import CreateForm from "../components/CreateForm";
  import OneStageApprovalForm from "../components/OneStageApprovalForm";
  import Submission from "../components/Submission";
  import Container from "../components/Container";
  import Scroll from "../components/Scroll";

  export default {
    name: "OneStageApproval",
    components: {Scroll, Container, Submission, OneStageApprovalForm, CreateForm, TopBar}
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