<template>
  <div class="wrapper">
    <p class="p-title">基本情况</p>
    <div class="flex">
      <div class="w30p mmt20">
        <div>
          <span>姓名：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>与申请人关系：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>人户分离：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>户籍地址：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>居住地址：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>就业状况：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>是否学生：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>助学结对：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>人员类别：</span>
          <input class="input" type="text">
        </div>
      </div>
      <div class="w50p mmt20">
        <div>
          <span>身份证号：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>户籍性质：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>文化程度：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>联系电话：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>婚姻状况：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>工作单位：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>所在学校：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>名称：</span>
          <input class="input" type="text">
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  
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
