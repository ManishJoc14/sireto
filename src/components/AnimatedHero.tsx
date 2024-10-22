"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

export default function AnimatedHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const arcRadius = 20; // Radius of the circular path
  const totalAnimationTime = 3 // Total time for the animation in seconds
  let startTime: number | null = null; // Variable to track the start time
  let carModel: any;

  useEffect(() => {
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
    mountRef.current?.appendChild(renderer.domElement);

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
      carModel = gltf.scene;
      carModel.position.set(35, -4, 0); // initial position
      carModel.scale.set(0.4, 0.4, 0.4); // Start small
      carModel.rotation.y = 2 * Math.PI  ; // Rotate car to face right
      scene.add(carModel);
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
      if (!startTime) startTime = time; // Initialize start time

      const elapsedTime = (time - startTime) / 1000; // Convert time to seconds

      if (carModel && elapsedTime <= totalAnimationTime) {
        const t = elapsedTime / totalAnimationTime; // Normalized time (0 to 1)
        const angle = Math.PI * t; // Create an angle
        carModel.position.x = arcRadius * Math.cos(angle) + 20; // X position
        carModel.position.z = arcRadius * Math.cos(angle) - 20 ; // Z position
        carModel.position.y = -80;

        // Scale the car as it approaches the center
        const scaleFactor = 1 + t * 5; // Scale from 1 to 6
        carModel.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0); // Start the animation

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Animation variants for text with custom delay
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.6 },
    }),
  };

  return (
    <div className="relative h-screen bg-slate-100 w-full overflow-hidden flex flex-col gap-4 justify-start items-start">
      {/* Animated Text Overlay */}
      <motion.div className="z-10 ml-10 sm:ml-24 mt-10 space-y-2">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          custom={0}
          className="text-xl md:text-2xl lg:text-3xl  uppercase font-bold"
        >
          Where Speed Meets Innovation
        </motion.p>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          custom={1}
          className="text-4xl md:text-6xl lg:text-9xl mx-auto text-brandPrimary font-extrabold leading-none"
        >
          Team Shireto
        </motion.h1>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          custom={2}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-400 opacity-50"
        >
          FORMULA BHARAT
        </motion.h2>
      </motion.div>
      {/* Animated Call to Action Button */}
      <motion.a
        href="#"
        className="mt-44 ml-10 sm:ml-24 inline-flex z-10 h-12 items-center justify-center rounded-md bg-brandPrimary px-10 text-sm font-medium text-gray-50 shadow transition-colors"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Learn More
      </motion.a>

      <motion.p 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          custom={5}
          className="mx-auto mt-32 text-lg md:text-xl lg:text-2xl font-extrabold text-slate-800 z-10">
      {`"Pushing Limits, Chasing Victory"`}
      </motion.p>  

      {/* 3D Model Canvas */}
      <div className="absolute top-0 left-0 w-full h-full" ref={mountRef}></div>
    </div>
  );
}
