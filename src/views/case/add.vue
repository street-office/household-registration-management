<template>
  <div>
    <div class="blank-gray flex aic">
      <div @click="showIndex = -1" class="page-btn">个案服务</div>
      <div @click="showIndex = 0" class="page-btn">家庭信息</div>
      <div @click="showIndex = index + 1" class="page-btn" v-for="(item, index) in pageList" :key="index">成员{{index + 1}}</div>
    </div>
    <div v-show="showIndex === -1">
      <div>
        <div class="p-title mt20 mb10">接案</div>
        <span>个案类型:</span>
        <input class="input" type="text">
        <span>接案类型:</span>
        <input class="input" type="text">
        <span>开案时间:</span>
        <input class="input" type="text">
      </div>
      <div class="line-col-gray"></div>
      <div class="p-title mt20 mb10">预估及计划</div>
      <textarea class="textarea"></textarea>
      <div class="mt30 mb100 flex aic jcc">
        <div class="btn">保存</div>
        <div class="btn w70 ml20 mr20">长期跟踪</div>
        <div class="btn">结案</div>
      </div>
    </div>
    <Family v-show="showIndex === 0"/>
    <FamilyPeople v-for="(item, index) in pageList" :key="index" v-show="showIndex === index + 1"/>
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

