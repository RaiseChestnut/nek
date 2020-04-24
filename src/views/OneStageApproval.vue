<template>
    <div id="OneApproval">
        <top-bar title="审批一" :back-show="true"></top-bar>
        <scroll class="content">
            <container>
                <create-form></create-form>
                <one-stage-approval-form ref="form"></one-stage-approval-form>
                <submission @onsubmit="onSubmit"></submission>
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
  import {complete} from "../network/utils";

  export default {
    name: "OneStageApproval",
    components: {Scroll, Container, Submission, OneStageApprovalForm, CreateForm, TopBar},
    methods: {
      onSubmit() {
        console.log(this.$refs.form.data)
        complete(id, data).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
    #OneApproval {
        height: 100vh;
        width: 100vw;
        position: relative;
        background-color: #fff;
        z-index: 999;
    }
</style>