## Loading 加载

页面交互时提供等待时间。

### 有规律的旋转方块

绕一定的方向旋转。

:::demo desc。
```html
<div @click="openDrawer1=true" class="square" />

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
```
:::

### 无规律的旋转方块

绕随意的方向旋转。

:::demo desc。
```html
<div @click="openDrawer1=true" class="squarePerspective" />

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
```
:::



