<template>
  <div class="h400">
    <div class="tr pt3 flex jce aic blank-gray">
      <input type="text" class="input w80 ml10" placeholder="发出部门">
      <input type="text" class="input w80 ml10" placeholder="调整概况">
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
          <td>序号</td>
          <td>调整概述</td>
          <td class="c-FF2D25">发出部门</td>
          <td class="c-FF2D25">处理部门</td>
          <td>档案编号</td>
          <td>所属居委</td>
          <td>姓名</td>
          <td>变更内容</td>
          <td class="c-FF2D25">金额</td>
          <td class="c-FF2D25">调整年月(精确到日)</td>
          <td>审批结果</td>
          <td>确认帐号</td>
          <td>完成时间</td>
          <td>查看详情</td>
        </tr>
        <tr v-for="(item, index) in dataList" :key="index">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="f12 bold">查看详情</td>
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
    }
  }
}
</script>
<style scoped lang="stylus">
td {
  height 60px
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
