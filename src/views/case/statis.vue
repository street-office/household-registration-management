<template>
  <div class="h400">
    <div class="tr pt3 flex jce aic">
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
      <input type="text" class="input w80 ml30" placeholder="经办人">
      <button class="btn border-black mr40 ml10">查询</button>
    </div>
    <table>
        <tr>
          <th colspan="4">基本情况统计</th>
          <th colspan="6">个案管理类别统计</th>
          <th colspan="3">接案类别统计</th>
        </tr>
        <tr>
          <td>新管理个案数</td>
          <td>处理中个案数</td>
          <td>结案个案数</td>
          <td>长期跟踪个案数</td>
          <td>助医</td>
          <td>助困</td>
          <td>助学</td>
          <td>特困</td>
          <td>儿童</td>
          <td>其他</td>
          <td>主动介入</td>
          <td>转介</td>
          <td>服务</td>
        </tr>
        <tr>
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
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: '',
    }
  }
}
</script>
<style scoped lang="stylus">
th {
  border: 1px solid #000;
  background-color: #438EBF; 
  color: #fff;
  height: 30px;
}
td {
  height 30px
  width (1 / 14)%
  border: 1px solid #000;
  text-align: center;
}

</style>
