<template>
  <div>
    <header class="h80 c-fff f26 vm cblue">江浦路街道困难家庭个案管理系统 <span class="f20">v2.0</span></header>
    <div class="flex">
      <aside class="w220 border-gray pb200">
        <div class="blank-gray"></div>
        <div v-for="(item, index) in navList" :key="index">
          <div class="flex pt10">
            <span class="circle w10 h10 mt8 ml10 mr5 shadow"></span>
            <div @click="toRouter(item.routerPath)" class="cblue w150 h28 vm c-fff pl10 f16 pointer">{{item.title}}</div>
          </div>
          <div class="flex mt10" v-for="(t, i) in item.child" :key="i">
            <span class="cTitle-1 cblue w16 h6 ml25 mt4 shadow"></span>
            <div @click="toRouter(t.routerPath)" class="f12 bold vm ml5 pointer">{{t.cTitle}}</div>
          </div>
        </div>
      </aside>
      <div class="line-gray"></div>
      <section class="cell">
        <div class="blank-gray"></div>
        <div class="border-deep-gray main-content">
          <div class="section-navTitle cblue f16 c-fff vm pl15">
            <span>当前位置</span>
            <span v-if="path1">&gt;{{path1}}</span>
            <span v-if="path2">&gt;{{path2}}</span>
          </div>
          <router-view/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      path1: '',
      path2: '',
      navList: [
        {
          title: '入户调查',
          child: [
            {
              cTitle: '新增入户调查',
              routerPath: '/addSurvey'
            },
            {
              cTitle: '管理入户调查',
              routerPath: '/manageSurvey'
            },
          ]
        },
        {
          title: '个案服务',
          child: [
            {
              cTitle: '新增个案服务',
              routerPath: '/addCase'
            },
            {
              cTitle: '管理个案服务',
              routerPath: '/manageCase'
            },
            {
              cTitle: '个案服务统计',
              routerPath: '/statisCase'
            },
          ]
        },
        {
          title: '通告管理',
          child: [
            {
              cTitle: '新增通告',
              routerPath: ''
            },
            {
              cTitle: '通告审批',
              routerPath: ''
            },
            {
              cTitle: '通告修改',
              routerPath: ''
            },
            {
              cTitle: '通告查询',
              routerPath: ''
            },
          ]
        },
        {
          title: '数据查询',
          routerPath: ''
        }
      ],
    }
  },
  computed: {
    routerPath() {
      return this.$route.path
    },
  },
  watch: {
    routerPath() {
      this.changeRouter()
    },
  },
  created() {
    this.changeRouter()
  },
  methods: {
    changeRouter() {
      this.navList.forEach(item => {
        if (item.routerPath === this.routerPath) {
          this.path1 = item.title
        }
        item.child && item.child.forEach(childItem => {
          if (childItem.routerPath == this.routerPath) {
            this.path1 = item.title
            this.path2 = childItem.cTitle
          }
        })
      })
    },
    toRouter(target) {
      this.$router.push(target)
    },
  },
}
</script>
<style lang="stylus" scoped>

.circle {
  display inline-block
  border-radius 50%
  background-color #026FBF
}
.cTitle-1 {
  display inline-block
  border-bottom-right-radius 6px
  border-top-right-radius 6px
}

.line-gray {
  width 8px
  background-color #ECECEC
}
.main-content {
  padding 5px 10px
  
  .section-navTitle {
    height 30px
    border-top-left-radius 15px
    border-top-right-radius 15px
  }
}



</style>

