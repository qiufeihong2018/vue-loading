<template>
  <el-container>
    <el-header>
      <span class="header-title">vue-loading</span>
      <span class="header-discription">令人愉快的和性能为中心纯css加载动画</span>
    </el-header>
    <el-main>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转方块" placement="top">
              <div @click="openDrawer1=true" class="square" />
            </el-tooltip>
          </div>
        </el-col>
        <el-drawer
          title="代码"
          :visible.sync="openDrawer1"
          direction="rtl"
          :before-close="handleClose"
          size="50%">
          <div style="padding:50px">
            <el-card class="el-card-html" shadow="always">
              <el-tag effect="dark" type="success">HTML</el-tag>
              <el-divider content-position="left">HTML</el-divider>
            </el-card>
            <el-card class="el-card-css" shadow="always">
              <el-tag effect="dark" type="success">CSS</el-tag>
              <el-divider content-position="left">CSS</el-divider>
            </el-card>
          </div>
        </el-drawer>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转方块" placement="top">
              <div @click="openDrawer1=true" class="squarePerspective" />
            </el-tooltip>
          </div>
        </el-col>
        <el-drawer
          title="代码"
          :visible.sync="openDrawer1"
          direction="rtl"
          :before-close="handleClose"
          size="50%">
          <div style="padding:50px">
            <el-card class="el-card-html" shadow="always">
              <el-tag effect="dark" type="success">HTML</el-tag>
              <el-divider content-position="left">HTML</el-divider>
            </el-card>
            <el-card class="el-card-css" shadow="always">
              <el-tag effect="dark" type="success">CSS</el-tag>
              <el-divider content-position="left">CSS</el-divider>
            </el-card>
          </div>
        </el-drawer>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <span>© 2019 www.qiufeihong.com MIT license</span>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      openDrawer1: false
    };
  }
};
</script>
<style scoped lang="less">
.el-header,
.el-footer {
  padding: 22px 60px;
  background-color: #393d49;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100px !important;
}
.el-header {
  .header-title {
    font-size: 40px;
  }
  .header-discription {
    font-size: 14px;
  }
}
.el-footer {
  bottom: 0;
  font-size: 15px;
  text-align: center;
}
.el-main {
  padding: 100px;
  background-color: #eee;
  color: #333;
  text-align: center;
  width: 100%;
  .el-row {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #c2c2c2;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 395px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
.el-card {
  margin: 20px 0;
}
.el-card-html {
  height: 200px;
}
.el-card-css {
  height: 500px;
}
</style>

<style scoped lang="less">
.square {
  width: 60px;
  height: 60px;
  background-image: linear-gradient(to right, #359fd4, #36b5c8, #37deb2);

  margin: 100px auto;
  -webkit-animation: rotateSquare 2.2s infinite ease-in-out; //无限的 慢快慢
  animation: rotateSquare 2.2s infinite ease-in-out;
}

@-webkit-keyframes rotateSquare {
  0% {
    -webkit-transform: perspective(120px); //绕透视轴旋转120px
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg); //绕y轴旋转
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateSquare {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>


<style scoped lang="less">
.squarePerspective {
  width: 60px;
  height: 60px;
  background-image: linear-gradient(to right, #359fd4, #36b5c8, #37deb2);

  margin: 100px auto;
  -webkit-animation: rotateSquarePerspective 2.2s infinite ease-in-out; //无限的 慢快慢
  animation: rotateSquarePerspective 2.2s infinite ease-in-out;
}

@-webkit-keyframes rotateSquarePerspective {
  0% {
    -webkit-transform: perspective(120px); //绕透视轴旋转120px
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg); //绕y轴旋转
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(360deg) rotateX(360deg);
  }
}

@keyframes rotateSquarePerspective {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-360deg) rotateY(-360deg);
    -webkit-transform: perspective(120px) rotateX(-360deg) rotateY(-360deg);
  }
}
</style>