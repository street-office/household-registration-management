<template>
  <div class="h400">
    <div class="tr pt3 flex jce aic blank-gray">
      <input type="text" class="input w80 ml30" placeholder="调整概况">
      <input type="text" class="input w80 ml10 mr10" placeholder="处理部门">
      <el-date-picker
        v-model="startTime"
        class="choose-time"
        size="mini"
        type="month"
        placeholder="开始时间">
      </el-date-picker>
      -
      <el-date-picker
        v-model="endTime"
        class="choose-time"
        type="month"
        size="mini"
        placeholder="结束时间">
      </el-date-picker>
      <input type="text" class="input w80" placeholder="姓名">
      <input type="text" class="input w80" placeholder="经办人">
      <button class="btn border-black mr10">查询</button>
    </div>
    <table>
        <tr>
          <td></td>
          <td>调整概述</td>
          <td>档案编号</td>
          <td>所属居委</td>
          <td>姓名</td>
          <td>变更内容
            <div class="w300"></div>
          </td>
          <td>调整年月</td>
          <td>处理部门</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in dataList" :key="index">
          <td>
            <el-checkbox v-model="checkbox[index]"></el-checkbox>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="w100 operation">
              编辑
            </div>
          </td>
        </tr>
    </table>
    <div>总共13条记录 每页15条 共1页 当前第一页 首页 上一页 1 下一页 尾页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
      dataList: [{},{},{}],
      checkbox: [],
    }
  }
}
</script>
<style scoped lang="stylus">
td {
  height 30px
  width (1 / 9)%
  border: 1px solid #EBEBEB;
  text-align: center;
}

tr {
  td {
    background-color #F3F3F3
  }

  &:nth-child(2n) {
    td {
      background-color: #fff;
    }
  }
}
.operation {
  transform translateX(25px)  
}
</style>
