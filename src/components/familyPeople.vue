<template>
  <div class="wrapper">
    <p class="p-title">基本情况</p>
    <div class="flex">
      <div class="w30p mmt20">
        <div>
          <span>姓名：</span>
          <input v-model="people.name" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>与申请人关系：</span>
          <select v-model="people.relation" placeholder="请选择">
            <option
              v-for="item in relations"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>人户分离：</span>
          <select v-model="people.leave" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>户籍地址：</span>
          <input v-model="people.registryAddress" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>居住地址：</span>
          <input v-model="people.liveAddress" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>就业状况：</span>
          <select v-model="people.job" placeholder="请选择">
            <option
              v-for="item in jobs"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>是否学生：</span>
          <select v-model="people.student" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>助学结对：</span>
          <select v-model="people.assistanceCouple" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>人员类别：</span>
          <select v-model="people.peopleType" placeholder="请选择">
            <option
              v-for="item in peopleTypes"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      <div class="w30p mmt20">
        <div>
          <span>身份证号：</span>
          <input v-model="people.idcard" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>户籍性质：</span>
          <select v-model="people.registryQuality" placeholder="请选择">
            <option
              v-for="item in registryQualitys"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>文化程度：</span>
          <select v-model="people.education" placeholder="请选择">
            <option
              v-for="item in educations"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>联系电话：</span>
          <input v-model="people.phone" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>婚姻状况：</span>
          <select v-model="people.marriage" placeholder="请选择">
            <option
              v-for="item in marriages"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>工作单位：</span>
          <input v-model="people.jobAddress" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>所在学校：</span>
          <input v-model="people.schoolAddress" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>名称：</span>
          <input v-model="people.coupleName" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>户主姓名：</span>
          <input v-model="people.homeName" class="input" type="text">
        </div>
      </div>
      <div class="w30p mmt20">
        <div>
          <span>出生日期：</span>
          <el-date-picker
            v-model="people.birthday"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div>
          <span>性别：</span>
           <select v-model="people.sex" placeholder="请选择">
            <option
              v-for="item in sexs"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>民族：</span>
          <select v-model="people.nation" placeholder="请选择">
            <option
              v-for="item in nations"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <span>金额：</span>
          <input v-model="people.coupleMoney" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>是否户主：</span>
          <select v-model="people.homeMan" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>录入人：</span>
          <input class="input" v-model="people.operateName" type="text" >
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">可支配收入</p>
    <div class="flex">
      <div class="w30p mmt20">
        <div>
          <span>总收入：</span>
          <input v-model="people.inMoney" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>养老金：</span>
          <input v-model="people.oldMoney" placeholder="可选填" class="input" type="text">
        </div>
      </div>
      <div class="w30p mmt20">
        <div>
          <span>工资性收入：</span>
          <input v-model="people.workMoney" placeholder="可选填" class="input" type="text">
        </div>
        <div>
          <span>享受政策：</span>
          <input v-model="people.enjoy" placeholder="可选填" class="input" type="text">
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">社会保险情况</p>
    <div class="flex">
      <div class="w30p mmt20">
        <div>
          <span>医疗保险：</span>
          <select v-model="people.healthInsurance" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>互助帮扶保险：</span>
          <select v-model="people.helpInsurance" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      <div class="w30p mmt20">
        <div>
          <span>居民保险：</span>
          <select v-model="people.homeInsurance" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>城镇职工养老保险：</span>
          <select v-model="people.workOldInsurance" placeholder="请选择">
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
    <p class="p-title">健康状况</p>
    <div class="flex">
      <div class="w30p mmt20">
        <div>
          <span>健康状况：</span>
          <select v-model="people.health" placeholder="请选择">
            <option
              v-for="item in healths"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>残疾状况：</span>
          <select v-model="people.poorHealth" placeholder="请选择">
            <option
              v-for="item in yesOrNo"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      <div class="w30p mmt20">
        <div>
          <span>大重病：</span>
          <select v-model="people.bigSickness" placeholder="请选择">
            <option
              v-for="item in bigSicknesss"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
        <div>
          <span>残疾等级：</span>
          <select v-model="people.poorRank" placeholder="请选择">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      yesOrNo: ['是', '否'],
      relations: ['父母', '配偶', '子', '女'],
      jobs: ['无业', '灵活就业', '在职', '长病假', '退休', '临工'],
      peopleTypes: ['刑释解教', '戒毒'],
      registryQualitys: ['本市户籍', '外地户籍'],
      educations: ['小学', '初中', '高中', '本科', '硕士', '博士'],
      marriages: ['未婚', '已婚', '离异', '丧偶', '再婚'],
      sexs: ['男', '女'],
      nations: ['汉族', '少数民族'],
      healths: ['正常', '一般', '慢性病', '急性病'],
      poorHealths: ['听力', '视力', '精神', '智力', '言语', '肢体'],
      poorRank: ['一级', '二级', '三级', '四级'],
      bigSicknesss: ['恶性肿瘤', '尿毒症', '精神病'],
      people: {
        "assistanceCouple": "",
        "bigSickness": "",
        "birthday": "",
        "coupleMoney": "",
        "coupleName": "",
        "created": "",
        "education": "",
        "enable": "",
        "enjoy": "",
        "health": "",
        "healthInsurance": "",
        "helpInsurance": "",
        "homeConditionId": "",
        "homeInsurance": "",
        "homeMan": "",
        "homeName": "",
        "id": "",
        "idcard": "",
        "inMoney": "",
        "insertUserId": "",
        "job": "",
        "jobAddress": "",
        "leave": "",
        "liveAddress": "",
        "marriage": "",
        "modified": "",
        "name": "",
        "nation": "",
        "oldMoney": "",
        "operateName": "",
        "peopleType": "",
        "phone": "",
        "poorHealth": "",
        "poorRank": "",
        "registryAddress": "",
        "registryQuality": "",
        "relation": "",
        "schoolAddress": "",
        "sex": "",
        "student": "",
        "workMoney": "",
        "workOldInsurance": ""
      },
    }
  },
  methods: {
    getPeople() {
      return this.people
    },
  },
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
</style>
