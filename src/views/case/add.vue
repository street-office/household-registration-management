<template>
  <div>
    <div class="blank-gray flex aic">
      <div @click="showIndex = -1" class="page-btn">个案服务</div>
      <div @click="showIndex = 0" class="page-btn">家庭信息</div>
      <div @click="showIndex = index + 1" class="page-btn" v-for="(item, index) in pageList" :key="index">成员{{index + 1}}</div>
    </div>
    <div class="ml30" v-show="showIndex === -1">
      <div>
        <div class="p-title mt20 mb10">接案</div>
        <span>个案类型:</span>
        <select class="ml10 mr10" v-model="cases.caseType" placeholder="请选择">
          <option
            v-for="item in caseTypes"
            :key="item"
            :label="item"
            :value="item">
          </option>
        </select>
        <span>接案类型:</span>
        <select class="ml10 mr10" v-model="cases.inType" placeholder="请选择">
          <option
            v-for="item in inTypes"
            :key="item"
            :label="item"
            :value="item">
          </option>
        </select>
        <span>开案时间:</span>
        <el-date-picker
          v-model="cases.created"
          class="ml10"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="line-col-gray"></div>
      <div class="p-title mt20 mb10">预估及计划</div>
      <textarea class="textarea"></textarea>
      <div>
        <div class="p-title mt20 mb10">介入</div>
        <span>介入方式:</span>
        <select class="ml10 mr10" v-model="cases.getType" placeholder="请选择">
          <option
            v-for="item in getTypes"
            :key="item"
            :label="item"
            :value="item">
          </option>
        </select>
        <span>介入时间：</span>
        <select class="ml10 mr10" v-model="cases.getTime" placeholder="请选择">
          <option
            v-for="item in inTypes"
            :key="item"
            :label="item"
            :value="item">
          </option>
        </select>
        <span>开案时间:</span>
        <el-date-picker
          v-model="cases.getTime"
          class="ml10"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="line-col-gray"></div>
      <div class="p-title mt20 mb10">评估及结案</div>
      <textarea class="textarea"></textarea>
      <div class="mt30 mb100 flex aic jcc">
        <div class="btn">保存</div>
        <div class="btn w70 ml20 mr20">长期跟踪</div>
        <div class="btn">结案</div>
      </div>
    </div>
    <Family class="ml30" v-show="showIndex === 0"/>
    <FamilyPeople class="ml30" v-for="(item, index) in pageList" :key="index" v-show="showIndex === index + 1"/>
  </div>
</template>
<script>
import Family from '@/components/familyInfo'
import FamilyPeople from '@/components/familyPeople'

export default {
  components: {
    Family,
    FamilyPeople,
  },
  data() {
    return {
      pageList: [{}],
      showIndex: -1,
      caseTypes: ['助医', '生活', '住房', '助学', '儿童', '特困'],
      inTypes: ['主动介入', '转介'],
      getTypes: ['走访', '转介'],
      cases: {
        "caseType": "",
        "created": "",
        "enable": '',
        "getTime": "",
        "getType": "",
        "homeId": '',
        "id": '',
        "inType": "",
        "insertUserId": '',
        "modified": "",
        "name": "",
        "neighborhood": "",
        "operateName": "",
        "peopleIds": "",
        "plan": "",
        "result": "",
        "status": ""
      },
    }
  },
  methods: {
    addFamliy() {
      
    },
  },
}
</script>
<style lang="stylus" scoped>
.submit-btn {
  margin: 30px 0;
}
</style>

