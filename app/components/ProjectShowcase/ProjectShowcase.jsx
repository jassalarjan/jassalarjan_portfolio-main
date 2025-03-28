import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import gsap from "gsap";
import throttle from "lodash/throttle";
import { Typography } from "@mui/material";
import CustomModal from "../modal/CustomModal";
import * as THREE from "three";

// Projects Data
const projects = [
  { id: 1, title: "Project 1", img: "/images/1.jpg", description: "Description for Project 1" },
  { id: 2, title: "Project 2", img: "/images/2.jpg", description: "Description for Project 2" },
  { id: 3, title: "Project 3", img: "/images/3.jpg", description: "Description for Project 3" },
  { id: 4, title: "Project 4", img: "/images/4.jpg", description: "Description for Project 4" },
];

// 3D Project Image Component
function ProjectImage({ position, project, onClick, onHover }) {
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({ scale: hovered ? 1.8 : 1.4 });

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onPointerOver={() => {
        setHovered(true);
        onHover(project);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null); // Reset hover when leaving
      }}
      onClick={() => onClick(project)}
    >
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial
        map={new THREE.TextureLoader().load(project.img)}
        side={THREE.DoubleSide}
        transparent
      />
    </animated.mesh>
  );
}

// 3D Scene Component
function Scene({ onClick, onHover }) {
  const radius = 5;
  const groupRef = useRef();
  const [mouseY, setMouseY] = useState(0);

  // Smooth Auto-Rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // Slow auto-rotation
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouseY * 0.5, 0.05);
    }
  });

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseY(y);
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const position = [radius * Math.cos(angle), 0, radius * Math.sin(angle)];
        return (
          <ProjectImage
            key={project.id}
            position={position}
            project={project}
            onClick={onClick}
            onHover={onHover}
          />
        );
      })}
    </group>
  );
}

// Main Showcase Component
export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // GSAP Animation for Title
  useEffect(() => {
    gsap.from(".title-text", { opacity: 0, y: 30, duration: 1.2, stagger: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Animated Title */}
      <div
        className="title-text"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          textAlign: "center",
          zIndex: 5,
        }}
      >
        <Typography variant="h3" style={{ fontWeight: "bold" }}>Our Projects</Typography>
        <Typography variant="body1">Explore our work in an interactive 3D showcase.</Typography>
      </div>

      {/* Hover Preview Image or Default Message */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "250px",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          background: hoveredProject ? `url(${hoveredProject.img}) center/cover no-repeat` : "rgba(0, 0, 0, 0.5)",
          boxShadow: hoveredProject ? "0px 8px 20px rgba(0,0,0,0.4)" : "none",
          borderRadius: "10px",
          opacity: 0.9,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
      >
        {!hoveredProject && "Hover over a project to preview"}
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} intensity={1.5} />
        <Scene onClick={setSelectedProject} onHover={setHoveredProject} />
        <OrbitControls autoRotate autoRotateSpeed={0.3} enableZoom={false} />
      </Canvas>

      {/* Custom Modal */}
      <CustomModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
