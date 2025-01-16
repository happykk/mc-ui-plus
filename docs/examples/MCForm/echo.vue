<template>
  <mc-form ref="FormDemo" v-model="formOpts.ref" :formOpts="formOpts" :widthSize="1">
  </mc-form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
// 获取ref
const FormDemo: any = ref<HTMLElement | null>(null)
// 提交formOpts.ref 方式form表单
const submitForm = () => {
  formOpts.ref.validate(valid => {
    console.log(88, valid)
    console.log(77, formOpts.formData)
    if (!valid) return
    console.log("最终数据", formOpts.formData)
  })
}
// 提交form表单
// const submitForm = async () => {
//   const { valid, formData } = await FormDemo.value.validate()
//   console.log('formOpts.ref', formOpts.ref)
//   console.log('formOpts.formData', formData)
//   if (!valid) return
//   console.log('最终数据', formData)
// }
// 重置form表单
const resetForm = () => {
  // 清空校验
  FormDemo.value.selfResetFields()
}
const formOpts = reactive<FormTypes.FormOpts>({
  ref: null,
  formData: {
    account: "wocwin", // *用户账号
    password: null, // *用户密码
    name: null, // *用户昵称
    sex: null, // *性别: 0:男 1:女
    desc: null // 描述
  },
  fieldList: [
    {
      label: "账号",
      value: "account",
      type: "input",
      comp: "el-input",
      event: "account"
    },
    {
      label: "密码",
      value: "password",
      type: "password",
      comp: "el-input",
      bind: { "show-password": true }
    },
    { label: "昵称", value: "name", type: "input", comp: "el-input" },
    {
      
      label: "性别",
      value: "sex",
      type: "select-arr",
      comp: "el-select",
      list: "sexList",
      arrLabel: "key",
      arrKey: "value"
    },
    {
      label: "描述",
      value: "desc",
      type: "textarea",
      comp: "el-input",
      widthSize: 1
    }
  ],
  listTypeInfo: {
    sexList: [
      { key: '女', value: 1 },
      { key: '男', value: 0 }
    ]
  },
  operatorList: [
    { label: "提交", bind: { type: "danger" }, fun: submitForm },
    { label: "重置", bind: { type: "primary" }, fun: resetForm }
  ]
})
onMounted(() => {
  getData()
})
// 回显赋值
const getData = () => {
  const objShow = {
    sex: 0, // *性别: 0:男 1:女
    account: "张三",
    password: "123456",
    name: "三丫子",
    desc: "8888" // 描述
  }
  formOpts.formData = objShow
}
</script>
