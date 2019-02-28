<template>
  <div>
    <div class="blank-gray tr vm">
      <span>所属居委:</span>
      <select v-model="search.neighborhood" placeholder="请选择">
        <option
          v-for="item in neighborhoods"
          :key="item"
          :label="item"
          :value="item">
        </option>
      </select>
      <span>对象类别:</span>
      <!-- <input v-model="search.homeType" type="text" class="input"> -->
      <select v-model="search.homeType" placeholder="请选择">
        <option
          v-for="item in homeTypes"
          :key="item"
          :label="item"
          :value="item">
        </option>
      </select>
      <span>调查人员:</span>
      <input v-model="search.operateName" type="text" class="input">
      <span>登记时间:</span>
      <input type="text" class="input">
      <button @click="searchData" class="btn">查询</button>
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
          <el-checkbox :key="scope.row.id" v-model="scope.row.isChecked"></el-checkbox>
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
        prop="phone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="liveAddress"
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
        <template slot-scope="scope">
          <span class="pointer" :key="scope.$index">编辑</span>/
          <span class="pointer">打印</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20 mb100">
      <div class="btn w90 tc h20 vm fl">删除选择记录</div>
      <div class="fr">总共{{total}}条记录 共{{pageCount}}页 当前第{{pageNum}}页 
        <span @click="prePage" class="pointer"> 上一页 </span>
        <span @click="nextPage" class="pointer"> 下一页 </span>
        <span @click="lastPage" class="pointer"> 尾页 </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      neighborhoods: ['兰州', '金鹏', '姚家桥', '吴家浜', '辽新', '辽二1', '大花园', '海上海', '陈一', '陈二', '陈三', '张家浜', '阳明', '辽昆', '五环', '又一村', '大连路', '蒋家浜', '辽三', '辽四', '辽二2', '星泰', '金上海', '辽一', '恒阳'],
      homeTypes: ['从业人员家庭', '零从业家庭'],
      tableData: [],
      totalData: [],
      checkbox: [],
      pageSize: 6,
      pageNum: 1,
      pageCount: 0,
      total: 0,
      search: {},
    }
  },
  methods: {
    searchData() {
      this.$axios.post('/home/query', this.search)
        .then(res => {
          if (res.message == 'SUCCESS') {
            this.totalData = res.obj.list
            this.total = res.obj.totals
            this.pageNum = 1
            this.pageCount = Math.ceil(this.total / this.pageSize)
            this.filterTableData()
          }
        })
    },
    filterTableData() {
      let startIndex = (this.pageNum - 1) * this.pageSize
      let endIndex = this.pageNum * this.pageSize
      this.tableData = this.totalData.slice(startIndex, endIndex)
    },
    prePage() {
      if (this.pageNum > 1) {
        this.pageNum --
        this.filterTableData()
      }
    },
    nextPage() {
      if (this.pageNum < this.pageCount) {
        this.pageNum ++
        this.filterTableData()
      }
    },
    lastPage() {
      if (this.pageNum < this.pageCount) {
        this.pageNum = this.pageCount
        this.filterTableData()
      }
    },
  },
  created() {
    this.searchData()
  },
}
</script>
