<template>
  <div>
    <div class="blank-gray flex aic">
      <div @click="showIndex = 0" class="page-btn">家庭情况</div>
      <div @click="showIndex = index + 1" class="page-btn" v-for="(item, index) in pageList" :key="index">成员{{index + 1}}</div>
      <div class="page-btn" @click="pageList.push({})">+</div>
    </div>
    <Family ref="family" class="pl30" v-show="showIndex === 0"/>
    <FamilyPeople ref="familyPeople" class="pl30" v-for="(item, index) in pageList" :key="index" v-show="showIndex === index + 1"/>
    <button @click="addFamliy" class="submit-btn">提交</button>
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
      showIndex: 0,
    }
  },
  methods: {
    addFamliy() {
      let family = this.$refs.family.getFamily()
      let fps = this.$refs.familyPeople
      family.peopleConditionList = []
      fps.forEach(item => {
        family.peopleConditionList.push(item.getPeople())
      })
      this.$axios.post('/home/addCondition', family)
        .then(res => {
          // this.$message.success('添加成功!')
          console.log(res)
          if (res.message == 'SUCCESS') {
            alert('添加成功!')
          } else {
            alert('操作失败,请重试!')
          }
        })
    },
  },
}
</script>
<style lang="stylus" scoped>
.submit-btn {
  margin: 10px 50px 30px;
}
</style>

