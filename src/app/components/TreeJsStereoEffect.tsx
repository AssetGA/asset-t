// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { StereoEffect } from "three/addons/effects/StereoEffect.js";

// const ThreeJSStereoEffect = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
//     camera.position.set(2, 2, -4);
//     camera.lookAt(new THREE.Vector3());

//     // Setup camera controller
//     const controls = new THREE.OrbitControls(camera, context.canvas);

//     // Инициализация сцены
//     let container, scene, renderer, effect;
//     const spheres = [];
//     let mouseX = 0,
//       mouseY = 0;
//     let windowHalfX = window.innerWidth / 2;
//     let windowHalfY = window.innerHeight / 2;

//     // Обработчик движения мыши
//     const onDocumentMouseMove = (event) => {
//       mouseX = (event.clientX - windowHalfX) * 10;
//       mouseY = (event.clientY - windowHalfY) * 10;
//     };

//     // Инициализация
//     const init = () => {
//       container = mountRef.current;

//       // Камера
//       camera = new THREE.PerspectiveCamera(
//         60,
//         window.innerWidth / window.innerHeight,
//         1,
//         100000
//       );
//       camera.position.z = 3200;

//       // Сцена
//       scene = new THREE.Scene();
//       scene.background = new THREE.CubeTextureLoader()
//         .setPath("textures/cube/Park3Med/")
//         .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);

//       // Геометрия и материалы
//       const geometry = new THREE.SphereGeometry(100, 32, 16);
//       const textureCube = new THREE.CubeTextureLoader()
//         .setPath("textures/cube/Park3Med/")
//         .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
//       textureCube.mapping = THREE.CubeRefractionMapping;

//       const material = new THREE.MeshBasicMaterial({
//         color: 0xffffff,
//         envMap: textureCube,
//         refractionRatio: 0.95,
//       });

//       // Создание сфер
//       for (let i = 0; i < 500; i++) {
//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.position.x = Math.random() * 10000 - 5000;
//         mesh.position.y = Math.random() * 10000 - 5000;
//         mesh.position.z = Math.random() * 10000 - 5000;
//         mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
//         scene.add(mesh);
//         spheres.push(mesh);
//       }

//       // Рендерер
//       renderer = new THREE.WebGLRenderer();
//       renderer.setPixelRatio(window.devicePixelRatio);
//       container.appendChild(renderer.domElement);

//       // Стерео-эффект
//       effect = new StereoEffect(renderer);
//       effect.setSize(window.innerWidth, window.innerHeight);

//       // Обработчик ресайза
//       const onWindowResize = () => {
//         windowHalfX = window.innerWidth / 2;
//         windowHalfY = window.innerHeight / 2;

//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         effect.setSize(window.innerWidth, window.innerHeight);
//       };

//       window.addEventListener("resize", onWindowResize);
//       document.addEventListener("mousemove", onDocumentMouseMove);

//       // Анимация
//       const animate = () => {
//         requestAnimationFrame(animate);
//         const timer = 0.0001 * Date.now();

//         camera.position.x += (mouseX - camera.position.x) * 0.05;
//         camera.position.y += (-mouseY - camera.position.y) * 0.05;
//         camera.lookAt(scene.position);

//         for (let i = 0, il = spheres.length; i < il; i++) {
//           const sphere = spheres[i];
//           sphere.position.x = 5000 * Math.cos(timer + i);
//           sphere.position.y = 5000 * Math.sin(timer + i * 1.1);
//         }

//         effect.render(scene, camera);
//       };

//       animate();

//       // Очистка
//       return () => {
//         window.removeEventListener("resize", onWindowResize);
//         document.removeEventListener("mousemove", onDocumentMouseMove);
//         container.removeChild(renderer.domElement);
//       };
//     };

//     init();
//   }, []);

//   return (
//     <div>
//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener noreferrer">
//           three.js
//         </a>{" "}
//         - effects - stereo. skybox by{" "}
//         <a
//           href="http://www.zfight.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Jochum Skoglund
//         </a>
//       </div>
//       <div ref={mountRef} />
//     </div>
//   );
// };

// export default ThreeJSStereoEffect;
