<template>
  <div class="h400">
    <div v-if="false">
      <div class="p-title mt15 ml10 mb5">查询结果</div>
      <table>
          <tr class="head">
            <td>序号</td>
            <td>户主姓名</td>
            <td>成员姓名</td>
            <td>困难程度</td>
            <td>身份证</td>
            <td>年龄</td>
            <td>文化程度</td>
            <td>所属居委</td>
            <td>户籍地址</td>
            <td>居住地址</td>
            <td>联系电话</td>
            <td>婚姻状况</td>
            <td>就业(学习)</td>
            <td>人员类别</td>
            <td>可支配收入</td>
            <td>社会保险情况</td>
            <td>大重病</td>
            <td>残疾状况</td>
            <td>救助情况</td>
            <td>个案类别</td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </table>
      <div class="tr c-FF0200 mr30 mt10">共计: 2条信息</div>
      <button class="btn w80 h30 excel-btn">导出excel</button>
    </div>
    <div>
      <div class="blank-gray tr vm">
        <span class="bold">一般查询</span>
        <input type="text" class="input ml10 mr10 w150" placeholder="输入关键字">
        <button class="btn mr30 border-black">查询</button>
      </div>
      <div class="relative">
        <div class="p-title">数据查询</div>
        <el-row class="el-row-div flex">
          <el-col :span="8">
            <div>
              <span>所属类别：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>户籍情况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>家庭结构：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>家庭类别：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>户籍性质：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>婚姻状况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>就业(学习)状况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>人员类别：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>年龄：</span>
              <input class="input" type="text">
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span>健康状况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>大重病：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>残疾状况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>家庭事务财产：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>救助情况：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>性别：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>民族：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>文化程度：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>是否是户主：</span>
              <input class="input" type="text">
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span>困难程度：</span>
              <input class="input" type="text">
            </div>
            <div>
              <span>年龄段：</span>
              <input class="input w50" type="text">--
              <input class="input w50" type="text">
            </div>
          </el-col>
        </el-row>
        <button class="btn search-btn">查询</button>
      </div>
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
th {
  border: 1px solid #000;
  background-color: #438EBF; 
  color: #fff;
  height: 30px;
}
td {
  height 30px
  width (1 / 20)%
  border: 1px solid #000;
  text-align: center;
}
.head {
  td {
    background: #E7E6E6;

  }
}
.excel-btn {
  position absolute
  right 30px
  bottom 50px
}
.el-row-div {
  &>div>div {
    margin-left 20px
    margin-top 10px
  }
}
.search-btn {
  position absolute
  right 30px
  bottom 0px
}
</style>
