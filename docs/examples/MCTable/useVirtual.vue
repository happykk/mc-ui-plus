<template>
  <mc-table
    tableTile="虚拟滚动"
    :table="table"
    :columns="table.columns"
    :isShowPagination="false"
    useVirtual
    :virtualShowSize="40"
    maxHeight="400px"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
const sumData = ref(1000)
const table = ref<TableTypes.Table>({
  data: [],
  // 表头数据
  columns: [
    { prop: "name", label: "姓名", minWidth: "100" },
    { prop: "date", label: "日期", minWidth: "180" },
    { prop: "status", label: "状态", minWidth: "80" },
    { prop: "address", label: "地址", minWidth: "220" }
  ]
})
onMounted(() => {
  initDate()
})
const changeData = () => {
  console.log("changeData--", sumData.value)
  initDate()
}
const initDate = () => {
  table.value.data = []
  const tableData = Array.from({ length: sumData.value }, (_, i) => ({
    id: i + 1,
    date: `2024-09-2${i}`,
    status: `待维修 ${i}`,
    name: `张三 ${i}`,
    address: `广州市白云区 ${i}`
  }))

  table.value.data = tableData
}
</script>
