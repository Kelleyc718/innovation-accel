import "./OilRigModel.css";
import React, { Component } from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { TimelineMax, Expo } from "gsap/TweenMax";

class OilRigModel extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  //load & render object
  drawOBJ() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor("rgba(0,0,0)");
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    camera.position.set(300, 200, 500);
    const light = new THREE.PointLight(0xffffff, 1.9, 100);
    light.position.set(0, 1, 0);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.light = light;
    this.mount.appendChild(this.renderer.domElement);
    scene.add(light);

    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    mtlLoader.load(
      "https://raw.githubusercontent.com/salmanrrana/objects_and_materials/master/refinery.mtl",
      materials => {
        materials.preload();

        this.materials = materials;
        objLoader.setMaterials(materials);
        objLoader.load(
          "https://raw.githubusercontent.com/salmanrrana/objects_and_materials/master/refinery.obj",
          object => {
            this.object = object;
            this.scene.add(object);
            scene.add(object);

            object.position.z -= 400;
            object.position.y -= 300;
            object.position.x -= 400;

            this.tl = new TimelineMax();

            this.tl.from(object.position, 3, {
              y: -1000,
              z: -500,
              ease: Expo.easeOut
            });
          }
        );
      }
    );
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentDidMount() {
    this.drawOBJ();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.object.rotation.y += 0.001;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{ width: 700, height: 700 }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default OilRigModel;
