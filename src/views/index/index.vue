<template>
  <div class="index-box">
    <div id="world_index">
      <canvas id="canvas_index" ref="canvas_index"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Three from "three";

@Component({})
export default class Index extends Vue {
  camera: any = Three.PerspectiveCamera;  //3D相机
  scene: any = Three.Scene;   //场景
  renderer: any = Three.WebGLRenderer;  //渲染器
  mesh: any = Three.Mesh;  //网格
  canvas: any;

  // 相机初始化
  init() {
    console.log(this);
    this.canvas = this.$refs.canvas_index;
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(
      45,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      1000
    );
    this.renderer = new Three.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    // 渲染器参数设置
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.render(this.scene, this.camera);
    // 相机参数设置
    this.camera.position.set(-20, 30, 40);
    this.camera.lookAt(0, 0, 0);
    this.axes();
    this.Render();
  }

  // 渲染
  Render() {
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.Render.bind(this));
    this.animate();
  }

  // 动画
  animate() {
    // console.log("animate");
  }

  // 添加坐标系
  axes() {
    const axes = new Three.AxesHelper(10);
    this.scene.add(axes);
  }

  mounted() {
    console.log(this);
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.index-box {
  width: 100%;
  height: 100%;
  text-align: center;
}
#world_index {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/indexbg.jpg") no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
