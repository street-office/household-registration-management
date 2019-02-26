<template>
  <div class="wrapper">
    <div class="form">
      <p class="f18 c-fff">江浦路街道困难家庭个案管理系统v2.0</p>
      <div class="flex fdc aic tc w300 form-content">
        <p class="c-2B7BFF bold f30">登 录</p>
        <input class="input" type="text" placeholder="输入用户名">
        <input class="input" type="text" placeholder="输入密码">
        <div class="pr">
          <input class="input code" type="text" placeholder="输入验证码">
          <div class="get-code c-2B7BFF w100 pointer">获取验证码</div>
        </div>
        <div @click="login" class="login-btn vm pointer">马上登录</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push('/addSurvey')
    }
  },
}
</script>
<style lang="stylus" scoped>
.wrapper {
  position fixed
  left 0
  top 0
  width 100vw
  height 100vh
  background url('../assets/imgs/img_bgd_logo.png')
  background-size cover

  .form {
    position absolute
    right 8%
    top 25%

    .form-content {
      background-color #fff
      padding 15px 0 30px
      margin-top 10px
    }
  }
}
.input {
  border 1px solid #F1F2F2
  margin-top 10px
  padding 5px 10px
  color #ACACC1
  font-size 14px
  width 240px
  height 40px

  &.code {
    padding-right 100px  
  }
  &::placeholder {
    color #ACACC1
    font-size 14px
  }
}
.get-code {
  position absolute
  top 50%
  right 0
  font-size 14px
}
.login-btn {
  width 240px
  height 40px
  background linear-gradient(90deg, #74B6FE, #0C6FEC)
  box-shadow 0 0 10px #74B6FE
  font-size 16px
  color #fff
  margin-top 30px
}
</style>
