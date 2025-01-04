"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

export function Canvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const arcRadius = 20; // Radius of the circular path
  const totalAnimationTime = 3; // Total time for the animation in seconds
  const startTimeRef = useRef<number | null>(null); // Variable to track the start time
  const carModelRef = useRef<any>(null);

  useEffect(() => {
    console.log("useEffect");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 20); // Adjust camera position for better view

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    const mountNode = mountRef.current;
    mountNode?.appendChild(renderer.domElement);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Bottom Lights for under-glow effect
    const bottomLight1 = new THREE.SpotLight(0xffffff, 1);
    bottomLight1.position.set(0, -2, 0);
    bottomLight1.angle = Math.PI / 4;
    bottomLight1.penumbra = 0.1;
    bottomLight1.castShadow = true;
    scene.add(bottomLight1);

    const bottomLight2 = new THREE.PointLight(0xffffff, 0.7, 50);
    bottomLight2.position.set(0, -3, 5);
    scene.add(bottomLight2);

    // Load F1 car model
    const loader = new GLTFLoader();
    loader.load("/3d-models/main.glb", (gltf: any) => {
      carModelRef.current = gltf.scene;
      carModelRef.current.position.set(35, -4, 0); // initial position
      carModelRef.current.scale.set(0.4, 0.4, 0.4); // Start small
      carModelRef.current.rotation.y = 2 * Math.PI; // Rotate car to face right
      scene.add(carModelRef.current);
    });

    // OrbitControls (optional)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop to move the car in a circular arc
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time; // Initialize start time

      const elapsedTime = (time - startTimeRef.current) / 1000; // Convert time to seconds

      if (carModelRef.current && elapsedTime <= totalAnimationTime) {
        const t = elapsedTime / totalAnimationTime; // Normalized time (0 to 1)
        const angle = Math.PI * t; // Create an angle
        carModelRef.current.position.x = arcRadius * Math.cos(angle) + 20; // X position
        carModelRef.current.position.z = arcRadius * Math.cos(angle) - 20; // Z position
        carModelRef.current.position.y = -80;

        // Scale the car as it approaches the center
        const scaleFactor = 1 + t * 5; // Scale from 1 to 6
        carModelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0); // Start the animation

    return () => {
        console.log("return useEffect");
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-full" ref={mountRef}></div>
  );
}
