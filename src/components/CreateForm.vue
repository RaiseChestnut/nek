<template>
    <el-form ref="form" :model="data.variables" :disabled="$route.name !== 'create'&&$route.name !== 'repair'" label-width="80px">
        <form-info :info="$route.name==='create'?'新建合理化建议':'新建维修单'"></form-info>
        <el-form-item label="提出人">
            <el-input v-model="data.variables.createPerson" placeholder="请填写提出人"></el-input>
        </el-form-item>
        <el-form-item label="直接主管">
            <el-input v-model="data.variables.team" placeholder="请填写直接主管"></el-input>
        </el-form-item>
        <el-form-item label="提出时间">
            <el-input v-model="data.variables.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="主题">
            <el-input v-model="data.variables.theme" placeholder="请填写主题"></el-input>
        </el-form-item>
        <el-form-item label="现状描述">
            <el-input type="textarea" v-model="data.variables.now" placeholder="请填写现状描述"></el-input>
        </el-form-item>
        <el-form-item label="建议方案">
            <el-input type="textarea" v-model="data.variables.advise" placeholder="请填写建议方案"></el-input>
        </el-form-item>
        <el-form-item label="提案类别">
            <el-select style="width: 100%" v-model="data.variables.type" placeholder="请选择提案类别">
                <el-option label="安全" value="sad"></el-option>
                <el-option label="质量" value="213"></el-option>
                <el-option label="效率" value="123"></el-option>
                <el-option label="成本" value="12412"></el-option>
                <el-option label="5s" value="42131"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <van-uploader v-model="fileList" multiple/>
        </el-form-item>

    </el-form>

</template>
<script>
  import FormInfo from "./FormInfo";

  export default {
    components: {
      FormInfo
    },
    data() {
      return {
        data: {
          "payloadType":"CompleteTaskPayload",
          "variables":{
            createPerson: '123',
            team: '123',
            date: `123`,
            theme: '123',
            now: 'asd',
            advise: '123',
            type: '123'
          }
        },
        fileList: [
          // {url:''}
        ],
      }
    },
    methods: {}
  }
</script>
