<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
/* .el-header {
}
.el-main {
}
.el-footer {
  height: 100px;
  background-image: -webkit-linear-gradient(to right, #ff0000, #fff);
} */

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.el-header {
}
.el-footer {
  bottom: 0;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
