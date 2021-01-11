<!--
 * @Descripttion:
 * @Author: linzenghe
 * @Date: 2021-01-11 09:49:19
 * @LastEditors: linzenghe
 * @LastEditTime: 2021-01-11 14:05:47
-->
<template>
  <button class="testBtn">测试按钮</button>
</template>
<script>
  export default {
    name: 'SButton', // 注意这个name是必须的
  }
</script>
<style lang="scss" scoped>
.testBtn {
  width: 100px;
  height: 50px;
  margin: 0 10px;
  background-color: #fc297f;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
