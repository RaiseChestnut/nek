<template>
    <div>
        <top-bar title="审批二" :back-show='true'></top-bar>
        <scroll class="content">
            <container>
                <create-form></create-form>
                <one-stage-approval-form></one-stage-approval-form>
                <two-stage-approval-form></two-stage-approval-form>
                <submission></submission>
            </container>
        </scroll>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import CreateForm from "../components/CreateForm";
  import OneStageApprovalForm from "../components/OneStageApprovalForm";
  import TwoStageApprovalForm from "../components/TwoStageApprovalForm";
  import Submission from "../components/Submission";
  import Container from "../components/Container";
  import Scroll from "../components/Scroll";


  export default {
    name: "TwoStageApproval",
    components: {Scroll, Container, CreateForm, Submission, TwoStageApprovalForm, OneStageApprovalForm, TopBar}
  }
</script>

<style scoped>
.content{
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
}
</style>