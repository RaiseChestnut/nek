import {request} from "./index";

/** 获取token**/
export function getToken(data) {
  return request({
    method: "post",
    url: '/auth/realms/activiti/protocol/openid-connect/token',
    data
  })
}

/** 流程定义**/
export function processDefinitions() {
  return request({
    url: '/nalco-rb-rs/v1/process-definitions'
  })
}

/** 开始一个新的流程**/
export function startProcess() {
  return request({
    method: 'post',
    url: 'nalco-rb-rs/v1/process-instances',
    data: {
      "processDefinitionKey": "process-7543178f-6a6a-4d01-8ae6-2ff7c81e3e01",
      "payloadType": "StartProcessPayload",
      "commandType": "StartProcessInstanceCmd",
    }
  })
}

/** 流程参数**/
export function startProcessWithVariables(id) {
  return request({
    method: 'get',
    url: `nalco-rb-rs/v1/process-instances/${id}/variables`,
    data: {
      "processDefinitionKey": "process-7543178f-6a6a-4d01-8ae6-2ff7c81e3e01",
      "payloadType": "StartProcessPayload",
      "commandType": "StartProcessInstanceCmd",
    }
  })
}

/** 请求待办列表**/
export function getTask(option = {page: 0, size: 10}) {
  return request({
    headers: {"Accept": "*/*"},
    url: `nalco-rb-rs/v1/tasks`
  })
}

/** 请求某个具体任务**/
export function getTaskItem(id) {
  return request({
    url: `nalco-rb-rs/v1/tasks/${id}`
  })
}

/** 任务提交接口**/
export function complete(id,data) {
  return request({
    method: 'post',
    headers: {"Content-Type": "application/json"},
    url: `/nalco-rb-rs/v1/tasks/${id}/complete`,
    data
  })
}

/** 任务指派**/
export function claim(id, option = '') {
  return request({
    method: 'post',
    url: `/nalco-rb-rs/v1/tasks/${id}/claim/${option}`
  })
}