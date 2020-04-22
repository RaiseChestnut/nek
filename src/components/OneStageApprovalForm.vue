<template>
    <el-form ref="form" :model="form" :disabled="$route.name !=='approval_1'" label-width="80px">
        <form-info info="审核一"></form-info>
        <el-form-item label="审批意见">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="是否采纳">
            <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="是否需要MOC">
            <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>

<script>
  import FormInfo from "./FormInfo";

  export default {
    name: "OneStageApprovalForm",
    components: {FormInfo},
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>