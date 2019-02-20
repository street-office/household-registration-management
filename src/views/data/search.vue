<template>
  <div class="h400">
    <div class="p-title mt15 ml10 mb5">查询结果</div>
    <table>
        <tr class="head">
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
.head {
  td {
    background: #E7E6E6;

  }
}
</style>
