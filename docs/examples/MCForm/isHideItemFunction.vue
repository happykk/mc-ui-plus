<template>
  <mc-form
    ref="FormDemo"
    v-model="formOpts.ref"
    :formOpts="formOpts"
    :widthSize="2"
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import cascaderData from "./cascaderData.json"

// 获取ref
const FormDemo = ref<HTMLElement | any>(null)
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
  FormDemo.value.selfResetFields()
}
const allRefs = ref({})
onMounted(() => {
  console.log("获取所有的ref", allRefs.value)
})
const formOpts = reactive<FormTypes.FormOpts>({
  ref: null,
  labelWidth: "140px",
  formData: {
    sex: null,
    status: null
  },
  fieldList: [
    {
      label: "性别",
      value: "sex",
      placeholder: "选择女显示状态",
      type: "select-arr",
      comp: "el-select",
      list: 'sexList',
      arrLabel: 'key',
      arrKey: 'value'
    },
    {
      label: "状态",
      value: "status",
      placeholder: "Select单选",
      type: "select-arr",
      list: 'statusList',
      comp: 'el-select',
      arrLabel: 'key',
      arrKey: 'value',
      isHideItem: data => {
        return data.sex == "1"
      }
    },
  ],
  listTypeInfo: {
    sexList: [
      { key: '女', value: 1 },
      { key: '男', value: 0 }
    ],
    statusList: [
      { key: '启用', value: 1 },
      { key: '停用', value: 0 }
    ]
  },
  operatorList: [
    { label: "提交", bind: { type: "danger" }, fun: submitForm },
    { label: "重置", bind: { type: "primary" }, fun: resetForm }
  ]
})

</script>
