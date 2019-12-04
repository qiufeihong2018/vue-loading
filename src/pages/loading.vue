<template>
  <el-container>
    <el-header>
      <span class="header-title">vue-loading</span>
      <span class="header-discription">令人愉快的和性能为中心纯css加载动画</span>
    </el-header>
    <el-drawer title="代码" :visible.sync="openDrawer1" direction="rtl" size="50%">
      <div style="padding:50px">
        <el-card class="el-card-html" shadow="always">
          <el-tag effect="dark" type="success">HTML</el-tag>
          <el-divider content-position="left">HTML</el-divider>
          <template slot="highlight">
            <pre v-pre><code class="html">
                <div>dfsdfasd </div>
                </code></pre></template>
        </el-card>
        <el-card class="el-card-css" shadow="always">
          <el-tag effect="dark" type="success">CSS</el-tag>
          <el-divider content-position="left">CSS</el-divider>
        </el-card>
      </div>
    </el-drawer>
    <el-main>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转方块" placement="top">
              <div @click="openDrawer1=true" class="square" />
            </el-tooltip>
          </div>
        </el-col>


        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转彩虹" placement="top">
              <div class="loader-inner-19">
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转线条" placement="top">
              <div @click="openDrawer1=true" class="loader loader-1">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转星星" placement="top">
              <div @click="openDrawer1=true" class="loader loader-2">
                <svg class="loader-star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1">
                  <polygon
                    points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
                    fill="#18ffff" />
                </svg>
                <div class="loader-circles"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="闪现叉号" placement="top">
              <div class="loader loader-21">
                <div class="css-times times1"></div>
                <div class="css-times times2"></div>
                <div class="css-times times3"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="音律抖动" placement="top">
              <div class="loader loader-7">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="群星闪耀" placement="top">
              <div class="loader loader-18">
                <div class="css-star star1"></div>
                <div class="css-star star2"></div>
                <div class="css-star star3"></div>
                <div class="css-star star4"></div>
                <div class="css-star star5"></div>
                <div class="css-star star6"></div>
                <div class="css-star star7"></div>
                <div class="css-star star8"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转脚丫" placement="top">
              <div class="loader loader-5">
                <div class="loader-pacman"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转双星" placement="top">
              <div class="loader loader-4"></div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="骨诺米牌" placement="top">
              <div class="loader loader-17">
                <div class="css-square square1"></div>
                <div class="css-square square2"></div>
                <div class="css-square square3"></div>
                <div class="css-square square4"></div>
                <div class="css-square square5"></div>
                <div class="css-square square6"></div>
                <div class="css-square square7"></div>
                <div class="css-square square8"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="流星飞逝" placement="top">
              <div class="loader loader-12">
                <svg class="loader-star star1" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star3" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star4" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star5" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star6" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="吊儿郎当" placement="top">
              <div class="loader loader-6">
                <div class="loader-inner"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="金星闪烁" placement="top">
              <div class="loader loader-14">
                <svg class="loader-star star-small" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.172px" height="23.346px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon fill="#01579b"
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  ">
                  </polygon>
                </svg>
                <svg class="loader-star star-big" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.172px" height="23.346px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon fill="#40c4ff"
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  ">
                  </polygon>
                </svg>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="三圆抖动" placement="top">
              <div class="loader loader-3">
                <div class="dot dot1"></div>
                <div class="dot dot2"></div>
                <div class="dot dot3"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="星星红绿灯" placement="top">
              <div class="loader loader-9">
                <svg class="loader-star star1" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.172px" height="23.346px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon fill="#c6ff00"
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                </svg>
                <svg class="loader-star star2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.172px" height="23.346px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon fill="#c6ff00"
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  " />
                </svg>
                <svg class="loader-star star3" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.172px" height="23.346px"
                  viewBox="0 0 23.172 23.346" xml:space="preserve">
                  <polygon fill="#c6ff00"
                    points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  " />
                </svg>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="旋转钻石" placement="top">
              <div class="loader loader-20">
                <div class="css-diamond"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="爱心分身" placement="top">
              <div class="loader loader-13">
                <div class="css-heart heart1"></div>
                <div class="css-heart heart2"></div>
                <div class="css-heart heart3"></div>
                <div class="css-heart heart4"></div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <!-- https://codepen.io/CrocoDillon/full/Htycs -->
            <el-tooltip class="item" effect="dark" content="缤纷井盖" placement="top">
              <div class="loader-23"></div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="圆形水桶" placement="top">
              <div class="shadow">
                <div class="loader-24">
                  <div class="mask" />
                </div>
              </div>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="隐形圆盘" placement="top">
              <div class="loader-25">
                <p></p>
              </div>
            </el-tooltip>
          </div>
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

<style scoped>
  .loader {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
  }

  .loader-star {
    position: absolute;
    top: calc(50% - 12px);
  }

  /*LOADER-1*/

  .loader-1 .loader-outter {
    position: absolute;
    border: 4px solid #f50057;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
  }

  .loader-1 .loader-inner {
    position: absolute;
    border: 4px solid #f50057;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
  }

  /*LOADER-2*/

  .loader-2 .loader-star {
    position: static;
    width: 60px;
    height: 60px;
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-animation: loader-2-star 1s ease alternate infinite;
    animation: loader-2-star 1s ease alternate infinite;
  }

  .loader-2 .loader-circles {
    width: 8px;
    height: 8px;
    background: #18ffff;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 4px);
    top: calc(50% - 4px);
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    -webkit-animation: loader-2-circles 1s ease-in-out alternate infinite;
    animation: loader-2-circles 1s ease-in-out alternate infinite;
  }

  /*LOADER-3*/

  .loader-3 .dot {
    width: 10px;
    height: 10px;
    background: #00e676;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 5px);
  }

  .loader-3 .dot1 {
    left: 0px;
    -webkit-animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  }

  .loader-3 .dot2 {
    left: 20px;
    -webkit-animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  }

  .loader-3 .dot3 {
    left: 40px;
    -webkit-animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  }

  /*LOADER-4*/

  .loader-4 {
    border: 7px double #ff5722;
    -webkit-animation: ball-turn 1s linear infinite;
    animation: ball-turn 1s linear infinite;
  }

  .loader-4:before,
  .loader-4:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #ff5722;
    border-radius: 50%;
    bottom: 0;
    right: 37px;
  }

  .loader-4:after {
    left: 37px;
    top: 0;
  }

  /*LOADER-5*/

  .loader-5 {
    border: 8px dotted rgba(255, 255, 0, 1);
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    -webkit-animation: dotted-spin 1s linear infinite;
    animation: dotted-spin 1s linear infinite;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 0, 0.3);
    border-left-width: 2px;
    border-left-color: rgba(255, 255, 0, 0.5);
    border-top-width: 3px;
    border-right-width: 4px;
    border-top-color: rgba(255, 255, 0, 0.7);
  }

  .loader-5 .loader-pacman,
  .loader-pacman {
    position: absolute;
    top: 40px;
    left: 25px;
    width: 0px;
    height: 0px;
    border-right: 12px solid transparent;
    border-top: 12px solid rgba(255, 255, 0, 1);
    border-left: 12px solid rgba(255, 255, 0, 1);
    border-bottom: 12px solid rgba(255, 255, 0, 1);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  /*LOADER-6*/

  .loader-6 {
    border: 6px groove #7e57c2;
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    -webkit-animation: loader-1-inner 1s ease-out alternate infinite;
    animation: loader-1-inner 1s ease-out alternate infinite;
  }

  .loader-6 .loader-inner {
    border: 0px inset #9575cd;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    -webkit-animation: border-zoom 1s ease-out alternate infinite;
    animation: border-zoom 1s ease-out alternate infinite;
  }

  /*LOADER-7*/

  .loader-7 .line {
    width: 8px;
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#1ee95d), to(#5714ce));
    background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
    background: -o-linear-gradient(top, #1ee95d, #5714ce);
    background: linear-gradient(to bottom, #1ee95d, #5714ce);
  }

  .loader-7 .line1 {
    left: 0;
    -webkit-animation: line-grow 0.5s ease alternate infinite;
    animation: line-grow 0.5s ease alternate infinite;
  }

  .loader-7 .line2 {
    left: 20px;
    -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
    animation: line-grow 0.5s 0.2s ease alternate infinite;
  }

  .loader-7 .line3 {
    left: 40px;
    -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
    animation: line-grow 0.5s 0.4s ease alternate infinite;
  }

  /*LOADER-8*/

  .loader-8 .star1 {
    -webkit-animation: star-jump 0.5s ease-out alternate infinite;
    animation: star-jump 0.5s ease-out alternate infinite;
  }

  .loader-8 .star2 {
    -webkit-animation: star-jump 0.5s 0.25s ease-out alternate infinite;
    animation: star-jump 0.5s 0.25s ease-out alternate infinite;
  }

  .loader-8 .star3 {
    -webkit-animation: star-jump 0.5s 0.5s ease-out alternate infinite;
    animation: star-jump 0.5s 0.5s ease-out alternate infinite;
  }

  .loader-8 .loader-star {
    -webkit-transform: scale3d(0.7, 0.7, 0.7);
    transform: scale3d(0.7, 0.7, 0.7);
  }

  .loader-8 .star1 {
    left: 0px;
  }

  .loader-8 .star2 {
    left: 25px;
  }

  .loader-8 .star3 {
    left: 50px;
  }

  /*LOADER-9*/

  .loader-9 .star1 {
    -webkit-animation: stars-pulse 1s ease-in-out infinite;
    animation: stars-pulse 1s ease-in-out infinite;
    left: 0;
  }

  .loader-9 .star2 {
    -webkit-animation: stars-pulse 1s 0.2s ease-in-out infinite;
    animation: stars-pulse 1s 0.2s ease-in-out infinite;
    left: 25px;
  }

  .loader-9 .star3 {
    -webkit-animation: stars-pulse 1s 0.4s ease-in-out infinite;
    animation: stars-pulse 1s 0.4s ease-in-out infinite;
    left: 50px;
  }

  /*LOADER-10*/

  .loader-10 {
    width: auto;
    height: auto;
    -webkit-animation: star-pulse 2s ease-in-out infinite;
    animation: star-pulse 2s ease-in-out infinite;
  }

  .loader-10 .loader-star {
    position: static;
  }

  /*LOADER-11*/

  .loader-11 {
    /*    animation: stars-rotate 2s cubic-bezier(0, 0, 0.63, 0.77) infinite;*/
    -webkit-animation: stars-rotate 2s linear infinite;
    animation: stars-rotate 2s linear infinite;
  }

  .loader-11 .loader-star {
    position: absolute;
  }

  .loader-11 .star1 {
    top: 0px;
    left: -7px;
  }

  .loader-11 .star2 {
    left: 8px;
    top: -12px;
    position: absolute;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.9;
  }

  .loader-11 .star3 {
    left: 26px;
    top: -11px;
    position: absolute;
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0.8;
  }

  .loader-11 .star4 {
    left: 39px;
    top: -2px;
    position: absolute;
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.7;
  }

  .loader-11 .star5 {
    left: 44px;
    top: 10px;
    position: absolute;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.6;
  }

  .loader-11 .star6 {
    left: 45px;
    top: 21px;
    position: absolute;
    -webkit-transform: scale(0.4);
    -ms-transform: scale(0.4);
    transform: scale(0.4);
    opacity: 0.5;
  }

  /*LOADER-12*/

  .loader-12 {
    -webkit-animation: stars-rotate-reverse 2s ease infinite;
    animation: stars-rotate-reverse 2s ease infinite;
  }

  .loader-12 polygon {
    fill: #d500f9 !important;
  }

  .loader-12 .loader-star {
    position: absolute;
  }

  .loader-12 .star1 {
    top: 0px;
    right: -7px;
  }

  .loader-12 .star2 {
    right: 9px;
    top: -12px;
    position: absolute;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-animation: stars-catch 2s 0.1s ease infinite;
    animation: stars-catch 2s 0.1s ease infinite;
  }

  .loader-12 .star3 {
    right: 27px;
    top: -11px;
    position: absolute;
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-animation: stars-catch 2s 0.15s ease infinite;
    animation: stars-catch 2s 0.15s ease infinite;
  }

  .loader-12 .star4 {
    right: 41px;
    top: -2px;
    position: absolute;
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    transform: scale(0.6);
    -webkit-animation: stars-catch 2s 0.2s ease infinite;
    animation: stars-catch 2s 0.2s ease infinite;
  }

  .loader-12 .star5 {
    right: 47px;
    top: 10px;
    position: absolute;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-animation: stars-catch 2s 0.25s ease infinite;
    animation: stars-catch 2s 0.25s ease infinite;
  }

  .loader-12 .star6 {
    right: 47px;
    top: 21px;
    position: absolute;
    -webkit-transform: scale(0.4);
    -ms-transform: scale(0.4);
    transform: scale(0.4);
    -webkit-animation: stars-catch 2s 0.3s ease infinite;
    animation: stars-catch 2s 0.3s ease infinite;
  }

  /*LOADER-13*/


  .loader-13 .css-heart {
    position: absolute;
    -webkit-animation: star-fly-out 1s ease alternate infinite;
    animation: star-fly-out 1s ease alternate infinite;
    -webkit-transform: scale(0.2);
    -ms-transform: scale(0.2);
    transform: scale(0.2);
  }

  .loader-13 .heart1 {
    top: 0;
    left: 30px;
  }

  .loader-13 .heart2 {
    left: 60px;
    top: 30px;
  }

  .loader-13 .heart3 {
    top: 60px;
    left: 30px;
  }

  .loader-13 .heart4 {
    left: 0;
    top: 30px;
  }


  /*LOADER-14*/

  .loader-14 .loader-star {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
  }

  .star-small {
    -webkit-animation: star-small-pulse 1s ease-in-out alternate infinite;
    animation: star-small-pulse 1s ease-in-out alternate infinite;
  }

  .loader-14 .star-big {
    -webkit-animation: star-big-pulse 2s -0.2s ease-in-out infinite;
    animation: star-big-pulse 2s -0.2s ease-in-out infinite;
  }

  /*LOADER-15*/

  .loader-15 {
    border: 2px dotted #e11a2b;
    -webkit-animation: stars-rotate-reverse 2s linear both infinite;
    animation: stars-rotate-reverse 2s linear both infinite;
  }

  .loader-15 .loader-star {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    position: absolute;
    left: calc(50% - 12px);
    top: calc(50% - 13px);
  }

  /*CSS-STAR*/

  .css-star {
    margin: 10px 0;
    position: relative;
    display: block;
    width: 0px;
    height: 0px;
    border-right: 26px solid transparent;
    border-bottom: 23px solid #e11a2b;
    border-left: 23px solid transparent;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .css-star:before {
    border-bottom: 18px solid #e11a2b;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -9px;
    left: -16px;
    display: block;
    content: '';
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    -o-transform: rotate(-35deg);
  }

  .css-star:after {
    position: absolute;
    display: block;
    top: 2px;
    left: -26px;
    width: 0px;
    height: 0px;
    border-right: 25px solid transparent;
    border-bottom: 22px solid #e11a2b;
    border-left: 27px solid transparent;
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    -o-transform: rotate(-70deg);
    content: '';
  }

  /*LOADER-16*/

  .loader-16 .css-star {
    position: absolute;
    -webkit-transform: rotate(180deg) scale(0.35);
    -ms-transform: rotate(180deg) scale(0.35);
    transform: rotate(180deg) scale(0.35);
  }

  .loader-16 .star1 {
    top: -20px;
    left: 5px;
    -webkit-animation: star-flicker 1s 0.1s linear infinite;
    animation: star-flicker 1s 0.1s linear infinite;
  }

  .loader-16 .star2 {
    left: 25px;
    top: -10px;
    -webkit-animation: star-flicker 1s 0.25s linear infinite;
    animation: star-flicker 1s 0.25s linear infinite;
  }

  .loader-16 .star3 {
    left: 35px;
    top: 10px;
    -webkit-animation: star-flicker 1s 0.5s linear infinite;
    animation: star-flicker 1s 0.5s linear infinite;
  }

  .loader-16 .star4 {
    top: 30px;
    left: 27px;
    -webkit-animation: star-flicker 1s 0.6s linear infinite;
    animation: star-flicker 1s 0.6s linear infinite;
  }

  .loader-16 .star5 {
    top: 40px;
    left: 5px;
    -webkit-animation: star-flicker 1s 0.7s linear infinite;
    animation: star-flicker 1s 0.7s linear infinite;
  }

  .loader-16 .star6 {
    top: 30px;
    left: -15px;
    -webkit-animation: star-flicker 1s 0.8s linear infinite;
    animation: star-flicker 1s 0.8s linear infinite;
  }

  .loader-16 .star7 {
    top: 10px;
    left: -25px;
    -webkit-animation: star-flicker 1s 0.9s linear infinite;
    animation: star-flicker 1s 0.9s linear infinite;
  }

  .loader-16 .star8 {
    top: -10px;
    left: -15px;
    -webkit-animation: star-flicker 1s 1s linear infinite;
    animation: star-flicker 1s 1s linear infinite;
  }

  /*LOADER-17*/

  .loader-17 .css-square {
    position: absolute;
    top: 50%;
    width: 25px;
    height: 7px;
    background: white;
    -webkit-box-shadow: 2px 2px 3px 0px black;
    box-shadow: 2px 2px 3px 0px black;
  }


  .loader-17 .square1 {
    left: 70px;
    -webkit-animation: dominos 1s 0.125s ease infinite;
    animation: dominos 1s 0.125s ease infinite;
  }

  .loader-17 .square2 {
    left: 60px;
    -webkit-animation: dominos 1s 0.3s ease infinite;
    animation: dominos 1s 0.3s ease infinite;
  }

  .loader-17 .square3 {
    left: 50px;
    -webkit-animation: dominos 1s 0.425s ease infinite;
    animation: dominos 1s 0.425s ease infinite;
  }

  .loader-17 .square4 {
    left: 40px;
    -webkit-animation: dominos 1s 0.540s ease infinite;
    animation: dominos 1s 0.540s ease infinite;
  }

  .loader-17 .square5 {
    left: 30px;
    -webkit-animation: dominos 1s 0.665s ease infinite;
    animation: dominos 1s 0.665s ease infinite;
  }

  .loader-17 .square6 {
    left: 20px;
    -webkit-animation: dominos 1s 0.79s ease infinite;
    animation: dominos 1s 0.79s ease infinite;
  }

  .loader-17 .square7 {
    left: 10px;
    -webkit-animation: dominos 1s 0.9s ease infinite;
    animation: dominos 1s 0.9s ease infinite;
  }

  .loader-17 .square8 {
    left: 0px;
    -webkit-animation: dominos 1s 1s ease infinite;
    animation: dominos 1s 1s ease infinite;
  }


  /*LOADER-18*/

  .loader-18 .css-star {
    position: absolute;
    -webkit-transform: rotate(180deg) scale(0.5);
    -ms-transform: rotate(180deg) scale(0.5);
    transform: rotate(180deg) scale(0.5);
    opacity: 0.4;
  }

  .loader-18 .css-star,
  .loader-18 .css-star:before,
  .loader-18 .css-star:after {
    border-bottom-color: #00e676;
  }

  .loader-18 .star1 {
    top: -20px;
    left: 5px;
    -webkit-animation: star-crazyness 1s 0.125s ease infinite;
    animation: star-crazyness 1s 0.125s ease infinite;
  }

  .loader-18 .star2 {
    left: 25px;
    top: -10px;
    -webkit-animation: star-crazyness 1s 0.3s ease infinite;
    animation: star-crazyness 1s 0.3s ease infinite;
  }

  .loader-18 .star3 {
    left: 35px;
    top: 10px;
    -webkit-animation: star-crazyness 1s 0.425s ease infinite;
    animation: star-crazyness 1s 0.425s ease infinite;
  }

  .loader-18 .star4 {
    top: 30px;
    left: 27px;
    -webkit-animation: star-crazyness 1s 0.540s ease infinite;
    animation: star-crazyness 1s 0.540s ease infinite;
  }

  .loader-18 .star5 {
    top: 40px;
    left: 5px;
    -webkit-animation: star-crazyness 1s 0.665s ease infinite;
    animation: star-crazyness 1s 0.665s ease infinite;
  }

  .loader-18 .star6 {
    top: 30px;
    left: -15px;
    -webkit-animation: star-crazyness 1s 0.79s ease infinite;
    animation: star-crazyness 1s 0.79s ease infinite;
  }

  .loader-18 .star7 {
    top: 10px;
    left: -25px;
    -webkit-animation: star-crazyness 1s 0.9s ease infinite;
    animation: star-crazyness 1s 0.9s ease infinite;
  }

  .loader-18 .star8 {
    top: -10px;
    left: -15px;
    -webkit-animation: star-crazyness 1s 1s ease infinite;
    animation: star-crazyness 1s 1s ease infinite;
  }

  /*LOADER-19*/

  .loader-19 .css-star {
    position: absolute;
    -webkit-transform: rotate(180deg) scale(0.5);
    -ms-transform: rotate(180deg) scale(0.5);
    transform: rotate(180deg) scale(0.5);
  }

  .loader-19 .star1 {
    left: 0;
    -webkit-animation: star-crawl 1s ease-out alternate infinite;
    animation: star-crawl 1s ease-out alternate infinite;
  }

  .loader-19 .star2 {
    left: 22px;
    -webkit-transform: rotate(180deg) scale(0.45);
    -ms-transform: rotate(180deg) scale(0.45);
    transform: rotate(180deg) scale(0.45);
    -webkit-animation: star-crawl 1s 0.1s ease-out alternate infinite;
    animation: star-crawl 1s 0.1s ease-out alternate infinite;
  }

  .loader-19 .star3 {
    left: 44px;
    -webkit-transform: rotate(180deg) scale(0.4);
    -ms-transform: rotate(180deg) scale(0.4);
    transform: rotate(180deg) scale(0.4);
    -webkit-animation: star-crawl 1s 0.2s ease-out alternate infinite;
    animation: star-crawl 1s 0.2s ease-out alternate infinite;
  }

  .loader-19 .star4 {
    left: 66px;
    -webkit-transform: rotate(180deg) scale(0.35);
    -ms-transform: rotate(180deg) scale(0.35);
    transform: rotate(180deg) scale(0.35);
    -webkit-animation: star-crawl 1s 0.3s ease-out alternate infinite;
    animation: star-crawl 1s 0.3s ease-out alternate infinite;
  }

  .loader-19 .star5 {
    left: 88px;
    -webkit-transform: rotate(180deg) scale(0.3);
    -ms-transform: rotate(180deg) scale(0.3);
    transform: rotate(180deg) scale(0.3);
    -webkit-animation: star-crawl 1s 0.4s ease-out alternate infinite;
    animation: star-crawl 1s 0.4s ease-out alternate infinite;
  }

  .loader-19 .star6 {
    left: 110px;
    -webkit-transform: rotate(180deg) scale(0.25);
    -ms-transform: rotate(180deg) scale(0.25);
    transform: rotate(180deg) scale(0.25);
    -webkit-animation: star-crawl 1s 0.5s ease-out alternate infinite;
    animation: star-crawl 1s 0.5s ease-out alternate infinite;
  }

  .loader-19 .star7 {
    left: 132px;
    -webkit-transform: rotate(180deg) scale(0.2);
    -ms-transform: rotate(180deg) scale(0.2);
    transform: rotate(180deg) scale(0.2);
    -webkit-animation: star-crawl 1s 0.6s ease-out alternate infinite;
    animation: star-crawl 1s 0.6s ease-out alternate infinite;
  }

  .loader-19 .star8 {
    left: 154px;
    -webkit-transform: rotate(180deg) scale(0.15);
    -ms-transform: rotate(180deg) scale(0.15);
    transform: rotate(180deg) scale(0.15);
    -webkit-animation: star-crawl 1s 0.7s ease-out alternate infinite;
    animation: star-crawl 1s 0.7s ease-out alternate infinite;
  }

  .loader-20 {
    width: 70px;
    height: 70px;
    border: 3px dashed #d3d3d3;
    -webkit-animation: stars-rotate-reverse 2s linear both infinite;
    animation: stars-rotate-reverse 2s linear both infinite;
  }

  .loader-20 .css-diamond {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    -webkit-transform: scale(0.3);
    -ms-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    border-color: transparent transparent #fff transparent;
  }

  .loader-20 .css-diamond:after {
    border-color: lightgrey transparent transparent transparent;
  }

  .css-diamond {
    border-style: solid;
    border-color: transparent transparent #ce93d8 transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 100px;
    position: relative;
    margin: 20px 0 50px 0;
  }

  .css-diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #ce93d8 transparent transparent transparent;
    border-width: 70px 50px 0 50px;
  }

  .css-heart {
    position: absolute;
    /*      width: 100px;
        height: 90px;*/
  }

  .css-heart:before,
  .css-heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #950d0d;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }

  .css-heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .css-times {
    position: absolute;
    width: 100px;
    height: 90px;
  }

  .css-times:before,
  .css-times:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 2px;
    height: 65px;
    background: red;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-animation: times-background 1s ease-in-out infinite;
    animation: times-background 1s ease-in-out infinite;
  }

  .css-times:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .loader-21 {
    width: 100px;
  }

  .loader-21 .times1 {
    -webkit-animation: times-pulse 1s ease-in-out infinite;
    animation: times-pulse 1s ease-in-out infinite;
    left: 0;
  }

  .loader-21 .times2 {
    -webkit-animation: times-pulse 1s 0.2s ease-in-out infinite;
    animation: times-pulse 1s 0.2s ease-in-out infinite;
    left: 25px;
  }

  .loader-21 .times3 {
    -webkit-animation: times-pulse 1s 0.4s ease-in-out infinite;
    animation: times-pulse 1s 0.4s ease-in-out infinite;
    left: 50px;
  }

  .css-flower {
    position: absolute;
    background: green;
    width: 35px;
    height: 35px;
    position: relative;
    text-align: center;
    -webkit-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    transform: rotate(20deg);
    border-radius: 40%;
    border-top: 4px solid #ababa9;
  }

  .css-flower:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    height: 10px;
    width: 20px;
    background: green;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    border-radius: 10px;
  }

  .loader-22 .css-flower {
    position: absolute;
    -webkit-transform: rotate(180deg) scale(0.5);
    -ms-transform: rotate(180deg) scale(0.5);
    transform: rotate(180deg) scale(0.5);
  }

  .loader-22 .flower1 {
    left: 0;
    -webkit-animation: caterpillarCrawl 1s ease-out alternate infinite;
    animation: caterpillarCrawl 1s ease-out alternate infinite;
    width: 45px;
    height: 45px;
    top: -10px;
    background: #066c06;
    z-index: 2;
  }

  .loader-22 .flower1:before {
    dissplay: none;
  }

  .loader-22 .flower2 {
    left: 10px;
    -webkit-transform: rotate(180deg) scale(0.45);
    -ms-transform: rotate(180deg) scale(0.45);
    transform: rotate(180deg) scale(0.45);
    -webkit-animation: caterpillarCrawl 1s 0.1s ease-out alternate infinite;
    animation: caterpillarCrawl 1s 0.1s ease-out alternate infinite;
  }

  .loader-22 .flower3 {
    left: 20px;
    -webkit-transform: rotate(180deg) scale(0.4);
    -ms-transform: rotate(180deg) scale(0.4);
    transform: rotate(180deg) scale(0.4);
    -webkit-animation: caterpillarCrawl 1s 0.2s ease-out alternate infinite;
    animation: caterpillarCrawl 1s 0.2s ease-out alternate infinite;
  }

  .loader-22 .flower4 {
    left: 30px;
    -webkit-transform: rotate(180deg) scale(0.35);
    -ms-transform: rotate(180deg) scale(0.35);
    transform: rotate(180deg) scale(0.35);
    -webkit-animation: caterpillarCrawl 1s 0.3s ease-out alternate infinite;
    animation: caterpillarCrawl 1s 0.3s ease-out alternate infinite;
  }

  .loader-22 .flower5 {
    left: 40px;
    -webkit-transform: rotate(180deg) scale(0.3);
    -ms-transform: rotate(180deg) scale(0.3);
    transform: rotate(180deg) scale(0.3);
    -webkit-animation: caterpillarCrawl 1s 0.4s ease-out alternate infinite;
    animation: caterpillarCrawl 1s 0.4s ease-out alternate infinite;
  }

  .loader-22 .flower6 {
    left: 50px;
    -webkit-transform: rotate(180deg) scale(0.25);
    -ms-transform: rotate(180deg) scale(0.25);
    transform: rotate(180deg) scale(0.25);
    -webkit-animation: caterpillarCrawl 1s 0.5s ease-out alternate infinite;
    animation: caterpillarCrawl 1s 0.5s ease-out alternate infinite;
  }

  /* ----------------     KEYFRAMES    ----------------- */

  @-webkit-keyframes loader-1-outter {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loader-1-outter {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader-1-inner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes loader-1-inner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes loader-2-circles {
    0% {
      -webkit-box-shadow: 0 0 0 #18ffff;
      box-shadow: 0 0 0 #18ffff;
      opacity: 1;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
      box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    100% {
      opacity: 0;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      -webkit-box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
      box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
    }
  }

  @keyframes loader-2-circles {
    0% {
      -webkit-box-shadow: 0 0 0 #18ffff;
      box-shadow: 0 0 0 #18ffff;
      opacity: 1;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #e11a2b, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
      box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    100% {
      opacity: 0;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      -webkit-box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
      box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
    }
  }

  @-webkit-keyframes loader-2-star {
    0% {
      -webkit-transform: scale(0) rotate(0deg);
      transform: scale(0) rotate(0deg);
    }

    100% {
      -webkit-transform: scale(0.7) rotate(360deg);
      transform: scale(0.7) rotate(360deg);
    }
  }

  @keyframes loader-2-star {
    0% {
      -webkit-transform: scale(0) rotate(0deg);
      transform: scale(0) rotate(0deg);
    }

    100% {
      -webkit-transform: scale(0.7) rotate(360deg);
      transform: scale(0.7) rotate(360deg);
    }
  }

  @-webkit-keyframes dot-jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @keyframes dot-jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes ball-turn {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes ball-turn {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes dotted-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes dotted-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes hike {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    25% {
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }

    50% {
      -webkit-transform: translate(40px, 0px);
      transform: translate(40px, 0px);
    }

    75% {
      -webkit-transform: translate(60px, -20px);
      transform: translate(60px, -20px);
    }

    100% {
      -webkit-transform: translate(80px, 0px);
      transform: translate(80px, 0px);
    }
  }

  @keyframes hike {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    25% {
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }

    50% {
      -webkit-transform: translate(40px, 0px);
      transform: translate(40px, 0px);
    }

    75% {
      -webkit-transform: translate(60px, -20px);
      transform: translate(60px, -20px);
    }

    100% {
      -webkit-transform: translate(80px, 0px);
      transform: translate(80px, 0px);
    }
  }

  @-webkit-keyframes border-zoom {
    0% {
      border-width: 0px;
    }

    100% {
      border-width: 10px;
    }
  }

  @keyframes border-zoom {
    0% {
      border-width: 0px;
    }

    100% {
      border-width: 10px;
    }
  }

  /*@-webkit-keyframes line-grow {
  0% {
    height: 0;
  }
  100% {
    height: 75%;
  }
}*/

  @-webkit-keyframes line-grow {
    0% {
      height: 0;
    }

    100% {
      height: 75%;
    }
  }

  @keyframes line-grow {
    0% {
      height: 0;
    }

    100% {
      height: 75%;
    }
  }

  @-webkit-keyframes star-jump {
    0% {
      -webkit-transform: translateY(0) scale(0.7);
      transform: translateY(0) scale(0.7);
    }

    100% {
      -webkit-transform: translateY(-15px) scale(1);
      transform: translateY(-15px) scale(1);
    }
  }

  @keyframes star-jump {
    0% {
      -webkit-transform: translateY(0) scale(0.7);
      transform: translateY(0) scale(0.7);
    }

    100% {
      -webkit-transform: translateY(-15px) scale(1);
      transform: translateY(-15px) scale(1);
    }
  }

  @-webkit-keyframes stars-pulse {

    0%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    80% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes stars-pulse {

    0%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    80% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
  }

  @-webkit-keyframes times-pulse {

    0%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    60% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes times-pulse {

    0%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    60% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
  }

  @-webkit-keyframes times-background {

    0%,
    100% {
      background: blueviolet;
    }

    60% {
      background: #ff3d00;
    }
  }

  @keyframes times-background {

    0%,
    100% {
      background: blueviolet;
    }

    60% {
      background: #ff3d00;
    }
  }

  @-webkit-keyframes star-pulse {

    0%,
    100% {
      -webkit-transform: scale(0) rotate(0deg);
      transform: scale(0) rotate(0deg);
      opacity: 0.5;
    }

    25% {
      -webkit-transform: scale(1) rotate(0deg);
      transform: scale(1) rotate(0deg);
    }

    50% {
      -webkit-transform: scale(2) rotate(0deg);
      transform: scale(2) rotate(0deg);
      opacity: 1;
    }

    75% {
      -webkit-transform: scale(1.5) rotate(90deg);
      transform: scale(1.5) rotate(90deg);
    }
  }

  @keyframes star-pulse {

    0%,
    100% {
      -webkit-transform: scale(0) rotate(0deg);
      transform: scale(0) rotate(0deg);
      opacity: 0.5;
    }

    25% {
      -webkit-transform: scale(1) rotate(0deg);
      transform: scale(1) rotate(0deg);
    }

    50% {
      -webkit-transform: scale(2) rotate(0deg);
      transform: scale(2) rotate(0deg);
      opacity: 1;
    }

    75% {
      -webkit-transform: scale(1.5) rotate(90deg);
      transform: scale(1.5) rotate(90deg);
    }
  }

  @-webkit-keyframes stars-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }

    50% {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }

    75% {
      -webkit-transform: rotate(-270deg);
      transform: rotate(-270deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes stars-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }

    50% {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }

    75% {
      -webkit-transform: rotate(-270deg);
      transform: rotate(-270deg);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes stars-rotate-reverse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes stars-rotate-reverse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes stars-catch {
    0% {}

    25% {}

    50% {}

    75% {
      top: -2px;
      right: -11px;
      opacity: 0;
    }

    100% {}
  }

  @keyframes stars-catch {
    0% {}

    25% {}

    50% {}

    75% {
      top: -2px;
      right: -11px;
      opacity: 0;
    }

    100% {}
  }

  @-webkit-keyframes star-fly-out {
    0% {
      top: 19px;
      left: 19px;
    }

    100% {}
  }

  @keyframes star-fly-out {
    0% {
      top: 19px;
      left: 19px;
    }

    100% {}
  }

  @-webkit-keyframes star-cube {

    0%,
    100% {
      -webkit-transform: translate(0px, 0);
      transform: translate(0px, 0);
    }

      {}

    25% {
      -webkit-transform: translate(60px);
      transform: translate(60px);
    }

    50% {
      -webkit-transform: translate(60px, 60px);
      transform: translate(60px, 60px);
    }

    75% {
      -webkit-transform: translate(0px, 60px);
      transform: translate(0px, 60px);
    }
  }

  @keyframes star-cube {

    0%,
    100% {
      -webkit-transform: translate(0px, 0);
      transform: translate(0px, 0);
    }

      {}

    25% {
      -webkit-transform: translate(60px);
      transform: translate(60px);
    }

    50% {
      -webkit-transform: translate(60px, 60px);
      transform: translate(60px, 60px);
    }

    75% {
      -webkit-transform: translate(0px, 60px);
      transform: translate(0px, 60px);
    }
  }

  @-webkit-keyframes star-big-pulse {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(5);
      transform: scale(5);
      opacity: 0;
    }
  }

  @keyframes star-big-pulse {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(5);
      transform: scale(5);
      opacity: 0;
    }
  }

  @-webkit-keyframes star-small-pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }

  @keyframes star-small-pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }

  @-webkit-keyframes star-flicker {
    0% {
      -webkit-transform: rotate(180deg) scale(0.35);
      transform: rotate(180deg) scale(0.35);
    }

    50% {
      -webkit-transform: rotate(180deg) scale(0.1);
      transform: rotate(180deg) scale(0.1);
    }

    100% {
      -webkit-transform: rotate(180deg) scale(0.35);
      transform: rotate(180deg) scale(0.35);
    }
  }

  @keyframes star-flicker {
    0% {
      -webkit-transform: rotate(180deg) scale(0.35);
      transform: rotate(180deg) scale(0.35);
    }

    50% {
      -webkit-transform: rotate(180deg) scale(0.1);
      transform: rotate(180deg) scale(0.1);
    }

    100% {
      -webkit-transform: rotate(180deg) scale(0.35);
      transform: rotate(180deg) scale(0.35);
    }
  }

  @-webkit-keyframes star-catcher {
    0% {
      opacity: 0.5;
    }

    /*12.5% { opacity: 1;  }*/
    25% {
      opacity: 0.5;
    }

    /*  37.5% {  opacity: 1;  }*/
    50% {
      opacity: 0.5;
    }

    /*  62.5% {opacity: 1;}*/
    75% {
      opacity: 0.5;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }

  @keyframes star-catcher {
    0% {
      opacity: 0.5;
    }

    25% {
      opacity: 0.5;
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.5;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }


  @-webkit-keyframes dominos {
    50% {
      opacity: 0.7;
    }

    75% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    80% {
      opacity: 1;
    }
  }


  @keyframes dominos {
    50% {
      opacity: 0.7;
    }

    75% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    80% {
      opacity: 1;
    }
  }


  @-webkit-keyframes star-crazyness {
    0% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0px, 0) scale(0.6);
      transform: rotate(180deg) translate(0px, 0) scale(0.6);
    }

    25% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.2);
      transform: rotate(180deg) translate(0, 0) scale(0.2);
    }

    50% {
      opacity: 0.7;
      -webkit-transform: rotate(180deg) translate(5px, 5px) scale(0.4);
      transform: rotate(180deg) translate(5px, 5px) scale(0.4);
    }

    75% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
      transform: rotate(180deg) translate(0, 0) scale(0.6);
    }

    80% {
      opacity: 1;
      -webkit-transform: rotate(180deg) translate(5px, 0) scale(0.1);
      transform: rotate(180deg) translate(5px, 0) scale(0.1);
    }

    100% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
      transform: rotate(180deg) translate(0, 0) scale(0.6);
    }
  }

  @keyframes star-crazyness {
    0% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0px, 0) scale(0.6);
      transform: rotate(180deg) translate(0px, 0) scale(0.6);
    }

    25% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.2);
      transform: rotate(180deg) translate(0, 0) scale(0.2);
    }

    50% {
      opacity: 0.7;
      -webkit-transform: rotate(180deg) translate(5px, 5px) scale(0.4);
      transform: rotate(180deg) translate(5px, 5px) scale(0.4);
    }

    75% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
      transform: rotate(180deg) translate(0, 0) scale(0.6);
    }

    80% {
      opacity: 1;
      -webkit-transform: rotate(180deg) translate(5px, 0) scale(0.1);
      transform: rotate(180deg) translate(5px, 0) scale(0.1);
    }

    100% {
      opacity: 0.4;
      -webkit-transform: rotate(180deg) translate(0, 0) scale(0.6);
      transform: rotate(180deg) translate(0, 0) scale(0.6);
    }
  }

  @-webkit-keyframes star-crawl {
    0% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.2);
      transform: rotate(180deg) translateY(0) scale(0.2);
    }

    20% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.3);
      transform: rotate(180deg) translateY(0) scale(0.3);
    }

    40% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    60% {
      -webkit-transform: rotate(90deg) translateY(0) scale(0.4);
      transform: rotate(90deg) translateY(0) scale(0.4);
    }

    80% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    100% {
      -webkit-transform: rotate(180deg) translateY(25px) scale(0.2);
      transform: rotate(180deg) translateY(25px) scale(0.2);
    }
  }

  @keyframes star-crawl {
    0% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.2);
      transform: rotate(180deg) translateY(0) scale(0.2);
    }

    20% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.3);
      transform: rotate(180deg) translateY(0) scale(0.3);
    }

    40% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    60% {
      -webkit-transform: rotate(90deg) translateY(0) scale(0.4);
      transform: rotate(90deg) translateY(0) scale(0.4);
    }

    80% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    100% {
      -webkit-transform: rotate(180deg) translateY(25px) scale(0.2);
      transform: rotate(180deg) translateY(25px) scale(0.2);
    }
  }

  @-webkit-keyframes caterpillarCrawl {
    0% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.2);
      transform: rotate(180deg) translateY(0) scale(0.3);
    }

    20% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.3);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    40% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.5);
    }

    60% {
      -webkit-transform: rotate(90deg) translateY(0) scale(0.4);
      transform: rotate(90deg) translateY(0) scale(0.5);
    }

    80% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.5);
    }

    100% {
      -webkit-transform: rotate(180deg) translateY(25px) scale(0.2);
      transform: rotate(180deg) translateY(25px) scale(0.3);
    }
  }

  @keyframes caterpillarCrawl {
    0% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.2);
      transform: rotate(180deg) translateY(0) scale(0.3);
    }

    20% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.3);
      transform: rotate(180deg) translateY(0) scale(0.4);
    }

    40% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.5);
    }

    60% {
      -webkit-transform: rotate(90deg) translateY(0) scale(0.4);
      transform: rotate(90deg) translateY(0) scale(0.5);
    }

    80% {
      -webkit-transform: rotate(180deg) translateY(0) scale(0.4);
      transform: rotate(180deg) translateY(0) scale(0.5);
    }

    100% {
      -webkit-transform: rotate(180deg) translateY(25px) scale(0.2);
      transform: rotate(180deg) translateY(25px) scale(0.3);
    }
  }

</style>
<style scoped>
  /*LOADER-19*/

  .loader-inner-19 {
    height: 60px;
    margin: auto;
    position: absolute;
    width: 100px;
  }

  .loader-line-wrap {
    animation:
      spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99999;

    box-sizing: border-box;
    height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transform-origin: 50% 100%;
    width: 100px;
  }

  .loader-line {
    border: 4px solid transparent;
    border-radius: 100%;
    box-sizing: border-box;
    height: 100px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
  }

  .loader-line-wrap:nth-child(1) {
    animation-delay: -50ms;
  }

  .loader-line-wrap:nth-child(2) {
    animation-delay: -100ms;
  }

  .loader-line-wrap:nth-child(3) {
    animation-delay: -150ms;
  }

  .loader-line-wrap:nth-child(4) {
    animation-delay: -200ms;
  }

  .loader-line-wrap:nth-child(5) {
    animation-delay: -250ms;
  }

  .loader-line-wrap:nth-child(1) .loader-line {
    border-color: hsl(0, 80%, 60%);
    height: 90px;
    width: 90px;
    top: 7px;
  }

  .loader-line-wrap:nth-child(2) .loader-line {
    border-color: hsl(60, 80%, 60%);
    height: 76px;
    width: 76px;
    top: 14px;
  }

  .loader-line-wrap:nth-child(3) .loader-line {
    border-color: hsl(120, 80%, 60%);
    height: 62px;
    width: 62px;
    top: 21px;
  }

  .loader-line-wrap:nth-child(4) .loader-line {
    border-color: hsl(180, 80%, 60%);
    height: 48px;
    width: 48px;
    top: 28px;
  }

  .loader-line-wrap:nth-child(5) .loader-line {
    border-color: hsl(240, 80%, 60%);
    height: 34px;
    width: 34px;
    top: 35px;
  }

  @keyframes spin {

    0%,
    15% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /*LOADER-24*/

  .loader-24 {
    background: -webkit-linear-gradient(left, skyblue 50%, #fafafa 50%);
    /* Foreground color, Background colour */
    border-radius: 100%;
    height: 100px;
    /* Height and width */
    width: 100px;
    /* Height and width */
    animation: time 8s steps(500, start) infinite;
  }

  .mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    animation: mask 8s steps(250, start) infinite;
    transform-origin: 100% 50%;
  }

  @-webkit-keyframes time {
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes mask {
    0% {
      background: #fafafa;
      /* Background colour */
      transform: rotate(0deg);
    }

    50% {
      background: #fafafa;
      /* Background colour */
      transform: rotate(-180deg);
    }

    50.01% {
      background: skyBlue;
      /* Foreground colour */
      transform: rotate(0deg);
    }

    100% {
      background: skyBlue;
      /* Foreground colour */
      transform: rotate(-180deg);
    }
  }

  /*LOADER-25*/

  .loader-25 {
    width: 100px;
    height: 101px;
    border: 8px solid;
    border-top-color: hsl(154, 100%, 31%);
    border-left-color: hsl(216, 87%, 52%);
    border-bottom-color: hsl(8, 66%, 50%);
    border-right-color: hsl(42, 100%, 51%);
    border-radius: 50%;
    transform: rotate(45deg);
    margin: 30px auto;
  }

  p {
    display: inline-block;
    width: 107px;
    height: 107px;
    /* The background is used to specify the border background */
    background: linear-gradient(90deg, #1e589900 0%,
        #2c8bd800 76%,
        #c2c2c2 85%,
        #c2c2c2 100%);
    /* W3C */
    /* Background origin is the padding box by default.
  Override to make the background cover the border as well. */
    -moz-background-origin: border;
    background-origin: border-box;
    /* A transparent border determines the width */
    border: 6px solid transparent;
    border-radius: 50%;
    box-shadow: inset -999px 0 0 #c2c2c2;
    /* The background color */
    transform: translate(-8px, 55px);
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: translate(-9px, -25px) rotate(0deg);
    }

    100% {
      transform: translate(-9px, -25px) rotate(360deg);
    }
  }

</style>
