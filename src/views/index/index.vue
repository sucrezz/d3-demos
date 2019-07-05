<template>
  <div class="index-box">
    <div id="world_index" ref="world_index">
      <!-- <canvas id="canvas_index" ref="canvas_index"></canvas> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Three from "three";

@Component({})
export default class Index extends Vue {
  camera: any = Three.PerspectiveCamera; //3D相机
  scene: any = Three.Scene; //场景
  renderer: any = Three.WebGLRenderer; //渲染器
  mesh: any = Three.Mesh; //网格
  container: any; //容器
  Group: any; //three群组

  // 相机初始化
  init() {
    // 定义容器
    this.container = this.$refs.world_index;
    // 实例化场景
    this.scene = new Three.Scene();
    // 实例化相机
    this.camera = new Three.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      2000
    );
    // 相机参数设置
    this.camera.position.set(0, 30, 300);
    this.camera.lookAt(0, 0, 0);
    // 设置光源
    this.addLight();
    // 实例化纹理加载器
    const loader = new Three.TextureLoader();
    // 添加贴图
    const planetTexture = loader.load("../../assets/images/index/Earth.png"); //基础贴图
    const bumpTexture = loader.load("../../assets/images/index/bumpMap.jpg"); //凹凸贴图
    const specTexture = loader.load("../../assets/images/index/EarthSpec.png"); //高光贴图
    // 设置纹理参数
    const material = new Three.MeshPhongMaterial({
      map: planetTexture,
      bumpMap: bumpTexture,
      specularMap: specTexture
    });
    material.bumpScale = 0.5;
    material.specular = new Three.Color("#1a2948");
    material.shininess = 5;
    // 创建简单材质的网格
    const wireMaterial = new Three.MeshBasicMaterial({
      wireframe: true
    });
    // 创建地球球体
    const earthGeom = new Three.SphereGeometry(80, 40, 40);
    // 通过几何材质来创建地球
    const planet = this.createMultiMaterialObject(earthGeom, [
      wireMaterial,
      material
    ]);
    // 将地球加载到场景中
    this.scene.add(planet);
    // 实例化渲染器
    this.renderer = new Three.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    // this.renderer = new Three.WebGLRenderer({
    //   canvas: this.canvas,
    //   antialias: true,
    //   alpha: true
    // });
    // 渲染器参数设置
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.render(this.scene, this.camera);
    this.container.appendChild(this.renderer.domElement);
    this.Render();
  }

  //包含材质中定义的每种材质的新网格。也就是将同一几何体不同材质创建的网格添加到一个group中，和为一个网格定义多重材质的做法不一样，这种方式对同时需要材质和线框的对象非常有用。在当前粒子里面，我们可以创建一个真实的地球，并画出了经纬线。
  createMultiMaterialObject(geometry: any, materials: any) {
    const group = new Three.Group();
    for (let i = 0, l = materials.length; i < l; i++) {
      group.add(new Three.Mesh(geometry, materials[i]));
    }
    return group;
  }

  // 添加光源
  addLight() {
    // 均匀照亮场景中的物体，没有方向
    const ambiLight = new Three.AmbientLight(0x686868);
    this.scene.add(ambiLight);
    // 点光源
    const spotLight = new Three.DirectionalLight(0xffffff);
    spotLight.position.set(0, 30, 300);
    spotLight.intensity = 1.5;
    this.scene.add(spotLight);
  }

  // 渲染
  Render() {
    this.renderer.render(this.scene, this.camera);
    // window.requestAnimationFrame(this.Render.bind(this));
    // this.animate();
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
  background: url("../../assets/images/index/indexbg.jpg") no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
