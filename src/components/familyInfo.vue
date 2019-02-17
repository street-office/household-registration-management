<template>
  <div class="wrapper">
    <p class="p-title">基本情况</p>
    <div class="flex">
      <div class="w50p mmt20">
        <div>
          <span>所属居委：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>户籍地址：</span>
          <input class="input w200" type="text">
        </div>
        <div>
          <span>居住地址：</span>
          <input class="input w200" type="text">
        </div>
        <div>
          <span>家庭类别：</span>
          <input class="input" type="text">
        </div>
      </div>
      <div class="w50p mmt20">
        <div>
          <span>户籍人数：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>户籍情况：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>联系电话：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>困难程度：</span>
          <input class="input" type="text">
        </div>
      </div>
    </div>
    <div class="line-col-gray"></div>
    <p class="p-title">救助情况</p>
    <div class="flex">
      <div class="w20p mmt20">
        <div>
          <span>低保：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>特困供养：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>困境儿童：</span>
          <input class="input" type="text">
        </div>
      </div>
      <div class="w20p mmt20">
        <div>
          <span>金额：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
          <input class="input" type="text">
        </div>
        <div>
          <span>金额：</span>
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
