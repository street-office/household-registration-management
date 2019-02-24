<template>
  <div class="wrapper">
    <p class="p-title">基本情况</p>
    <div class="flex">
      <div class="w50p mmt20">
        <div>
          <span>所属居委：</span>
          <!-- <input v-model="family.neighborhood" class="input" type="text"> -->
          <select v-model="family.neighborhood" placeholder="请选择">
            <option
              v-for="item in neighborhoods"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>户籍地址：</span>
          <input v-model="family.registryAddress" class="input w200" type="text">
        </div>
        <div>
          <span>居住地址：</span>
          <input class="input w200" type="text">
        </div>
        <div>
          <span>家庭类别：</span>
          <!-- <input v-model="family.homeType" class="input" type="text"> -->
          <select v-model="family.homeType" placeholder="请选择">
            <option
              v-for="item in homeTypes"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      <div class="w50p mmt20">
        <div>
          <span>户籍人数：</span>
          <!-- <input class="input" type="text"> -->
          <select v-model="family.num" placeholder="请选择">
            <option
              v-for="item in nums"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>户籍情况：</span>
          <!-- <input v-model="family.registryCondition" class="input" type="text"> -->
          <select v-model="family.registryCondition" placeholder="请选择">
            <option
              v-for="item in registryConditions"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>联系电话：</span>
          <input v-model="family.phone" class="input" type="text">
        </div>
        <div>
          <span>困难程度：</span>
          <!-- <input v-model="family.difficut" class="input" type="text"> -->
          <select v-model="family.difficut" placeholder="请选择">
            <option
              v-for="item in difficuts"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">救助情况</p>
    <div class="flex">
      <div class="w20p mmt20">
        <div>
          <span>低保：</span>
          <!-- <input v-model="family.disabledMan" class="input" type="text"> -->
          <select v-model="family.low" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>特困供养：</span>
          <!-- <input v-model="family.specPoor" class="input" type="text"> -->
          <select v-model="family.specPoor" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>困境儿童：</span>
          <select v-model="family.poorChild" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>残疾人补贴：</span>
          <select v-model="family.disabledMan" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>廉租房补贴：</span>
          <select v-model="family.lowRent" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      <div class="w20p mmt20">
        <div>
          <span>金额：</span>
          <input v-model="family.lowMoney" class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
          <input v-model="family.specPoorMoney" class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
          <input v-model="family.poorChildMoney" class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
          <input v-model="family.disabledManMoney" class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
          <input v-model="family.lowRentMoney" class="input" type="text">
        </div>
      </div>
      <div class="w20p mmt20 ml50">
        <div>
          <span>低收入:</span>
          <!-- <input v-model="family.lowMoney" class="input" type="text"> -->
          <select v-model="family.lowIn" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>支出型贫困:</span>
          <select v-model="family.specPoorOut" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">家庭实物财务申报</p>
    <div class="flex">
      <div class="w50p mmt20">
        <div>
          <span class="w200 line-block">住房情况申报</span>
          <span>自有住房:</span>
          <select v-model="family.ownHouse" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span class="w200 line-block">非居住类房屋情况申报</span>
          <span>自有非居住类房:</span>
          <select v-model="family.ownOutHouse" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span class="w200 line-block">机动车辆及车辆申报</span>
          <span>自有机动车辆:</span>
          <select v-model="family.ownCar" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">调查目的</p>
    <textarea v-model="family.inquireGoal"></textarea>
    <!-- <div class="line-col-gray"></div> -->
    <p class="p-title">调查情况</p>
    <textarea v-model="family.inquireCondition"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      family: {
        difficut: '',
        disabledMan: '',
        disabledManMoney: '',
        homeType: '',
        poorChild: '',
        specPoor: '',
        specPoorMoney: '',
        registryCondition: '',
        registryAddress: '',
        phone: '',
        neighborhood: '',
        num: '',
        low: '',
        lowIn: '',
        lowRent: '',
        lowRentMoney: '',
        specPoorOut: '',
        ownCar: '',
        inquireCondition: '',
        inquireGoal: '',
      },
      neighborhoods: ['兰州', '金鹏', '姚家桥', '吴家浜', '辽新', '辽二1', '大花园', '海上海', '陈一', '陈二', '陈三', '张家浜', '阳明', '辽昆', '五环', '又一村', '大连路', '蒋家浜', '辽三', '辽四', '辽二2', '星泰', '金上海', '辽一', '恒阳'],
      nums: [1, 2, 3, 4, 5, 6, 7],
      registryConditions: ['正常', '人户分离', '空挂户'],
      difficuts: ['一般困境', '中度困境', '重度困境'],
      homeTypes: ['从业人员家庭', '零从业家庭'],
      yesOrNo: ['是', '否'],
    }
  },
  methods: {
    getFamily() {
      return this.family
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper {
  margin: 20px 0;  
}
.mmt20 {
  &>div {
    margin-top: 10px;  
  }  
}
textarea {
  width 90%
  height 100px
  margin 20px 0
}

</style>
