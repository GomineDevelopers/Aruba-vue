<template>
  <div id="webId">
    <div
      v-if="!isShow"
      class="xuanfu"
      id="moveDiv"
      @mousedown="down"
      @touchstart="down"
      @mousemove="move"
      @touchmove="move"
      @mouseup="end"
      @touchend="end"
      @click="click"
    >
      <div class="yuanqiu"></div>
    </div>
  </div>
</template>

<script>
// 当前插件为悬浮窗插件

export default {
  name: "NetMonitor",
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },  // 位置问题需要改进
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      isShow: false
    };
  },

  methods: {
    click(){
      let vm = this
      vm.$router.push({ name: 'HelloWorld' })

    },
    // 实现移动端拖拽
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft;
      this.dy = moveDiv.offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        moveDiv.style.left = this.xPum + "px";
        moveDiv.style.top = this.yPum + "px";
        document.addEventListener(
          "touchmove",
          function() {
            event.preventDefault();
          },
          { passive: false }
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
  }
};
</script>

<style scoped>
.xuanfu {
  height: 3.5rem;
  width: 3.5rem;
  z-index: 999;
  position: fixed;
  bottom: 1.2rem;
  right: 0rem;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.25);
}
.yuanqiu {
  height: 1.7rem;
  width: 1.7rem;
  border: 0.3rem solid rgba(140, 136, 136, 0.2);
  margin: 0.65rem auto;
  color: #000000;
  font-size: 0.8rem;
  line-height: 2.7rem;
  text-align: center;
  border-radius: 100%;
  background-color: #ffffff;
}
</style>
