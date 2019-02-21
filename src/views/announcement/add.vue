<template>
  <div class="h400">
    <div class="f18 tc bold vm blank-gray">新增通告信息</div>
    <table>
        <tr class="head">
          <td class="tl"><span class="ml10 w60 line-block">姓名</span> <input type="text" class="input"></td>
          <td class="tl"><span class="ml10 w60 line-block">档案编号 </span> <input type="text" class="input"></td>
          <td class="tl"><span class="ml10 w80 line-block">调整年月日 </span> <input type="text" class="input"></td>
        </tr>
        <tr class="section">
          <td class="tl"><span class="ml10 w60 line-block">发出部门 </span> <input type="text" class="input"></td>
          <td class="tl"><span class="ml10 w60 line-block">处理部门 </span> <input type="text" class="input"></td>
          <td class="tl"><span class="ml10 w80 line-block">调整概述 </span> <input type="text" class="input"></td>
        </tr>
        <tr class="foot">
          <td class="tl"><span class="ml10 w60 line-block">所属居委 </span> <input type="text" class="input"></td>
          <td class="tl"><span class="ml10 w60 line-block">金额</span>  <input type="text" class="input"></td> 
          <td class="tl"> </td> 
        </tr>
    </table>
    <div class='section-line'>
      <p class="pl10 mt10 ml5">调整内容:</p>
      <b class="line mt5 ml5"></b>
      <textarea></textarea>
      <button class="btn">附件上传</button>
    </div>
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

td {
  height 30px
  width (1 / 14)%
  border: 1px solid #fff;
  text-align: center;
}
.head {
  td {
    background: #D9D9D9;
  }
}
.section {
  td {
    background: #D0E0D0;
  }
}
.foot {
  td {
    background: #E7F0EA;
  }
}
.section-line {
  height: 240px;
  border: 1px solid #000;  
  margin: 10px;
  position: relative;
}
.btn {
  position: absolute;
  right: 10px;
  bottom: 10px;  
  width: 80px;
}
.line {
  display: block;
  width: 80px;
  height: 2px;
  background: #808080;  
}
textarea {
  border: none;
  padding-left: 10px;
  width: 100%;
  height: 200px;
  background: #F5F6F6;
}
</style>
