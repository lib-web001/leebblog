---
tag:
  - 前端
---

# threejs

## 概念

```
1、场景（scene） ： 是物体、光源等元素的容器，抛出 window.scene 即可实时调整 obj 的信息和材质信息。

2、相机(camera)：

3、物体对象(Mesh):

4、光源(Ligth):

5、渲染器：WebGLRenderer 主要作用就是把相机视椎体中的三维场景渲染成一个二维图片显示在画布上

6、控制器(Control)
```

## 操作

```js
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1 创建场景
createScene(){
  this.scene = new THREE.Scene();
}

// 2 创建相机
createCamera(){
  const scale = window.innerWidth / window.innerHeight;
  this.camera = new THREE.PerspectiveCamera(60, scale, 0.1, 1000);
  this.camera.position.set(10, 10, 100);
  // this.camera.lookAt(new THREE.Vector3(0, 0, 0));
}

// 3 创建物体
createMes(){
  const geometry = new THREE.BoxGeometry(10, 10, 10); // 创建一个物体
  const material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
  this.mesh = new THREE.Mesh(geometry, material);
  this.scene.add(this.mesh);
}

// 4 渲染
createRender(){
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#threeBox").appendChild(this.renderer.domElement);
  this.renderer.render(this.scene, this.camera);
}

// 5 创建光源
createLight() {
  // color = materialColor _ light.color _ light.intensity;
  const ambientLight = new THREE.AmbientLight(0x1c1c1c);
  ambientLight.intensity = 1;
  this.scene.add(ambientLight);

  // 聚光灯
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-100, 0, 0);
  // spotLight.map = new THREE.TextureLoader().load(url);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 30;
  this.scene.add(spotLight);
}

// 6 创建控制器
createControl() {
  this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
  this.orbitControls.target.set(0, 0, 0);
}


// 7 更新
updateRender(){
  const _this = this;
  (function animate() {
    // _this.mesh.rotation.x += 0.01;
    // _this.mesh.rotation.y += 0.01;
    _this.orbitControls.update();
    requestAnimationFrame(animate);
    _this.renderer.render(_this.scene, _this.camera);
  })();
}

```
