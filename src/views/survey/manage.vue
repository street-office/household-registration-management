<template>
  <div>
    <div class="blank-gray tr vm">
      <span>所属居委:</span>
      <input type="text" class="input">
      <span>对象类别:</span>
      <input type="text" class="input">
      <span>调查人员:</span>
      <input type="text" class="input">
      <span>登记时间:</span>
      <input type="text" class="input">
      <button class="btn">查询</button>
    </div>
      <el-table
        header-cell-class-name="handlemyclass"
        :data="tableData"
        cell-class-name="cell-class-name"
        row-class-name="row-class-name"
        style="width: 100%">
        <el-table-column
          width="50"
          >
          <template slot-scope="scope">
            <el-checkbox v-model="checkbox[scope.$index]"></el-checkbox>
            <!-- <input :label="checkbox[scope.$index]" v-model="checkbox[scope.$index]" type="checkbox" class="checkbox"> -->
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="date"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="name"
          label="居住地址">
        </el-table-column>
        <el-table-column
          prop="address"
          label="调查时间">
        </el-table-column>
        <el-table-column
          prop="date"
          label="调查人员">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作">
          <template>
            <span class="pointer">编辑</span>/
            <span class="pointer">打印</span>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{selected: 1,}, {selected: 1,}, {selected: 1,}],
      checkbox: [],
    }
  },
}
</script>
