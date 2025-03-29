import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import gsap from "gsap";
import throttle from "lodash/throttle";
import { Typography } from "@mui/material";
import CustomModal from "../modal/CustomModal";
import * as THREE from "three";
import { projects } from "~/data/projects";
import { DecoderText } from "~/components/decoder-text";

// 3D Project Image Component
function ProjectImage({ position, project, onClick, onHover }) {
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({
    scale: hovered ? 1.3 : 1,
    config: { mass: 1, tension: 280, friction: 60 }
  });

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
        onHover(null);
      }}
      onClick={() => onClick(project)}
    >
      <planeGeometry args={[3, 1.5]} />
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
  const radius = 10;
  const groupRef = useRef();
  const mouseYRef = useRef(0);

  // Smooth Auto-Rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Slow auto-rotation
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouseYRef.current * 0.3, 0.05);
    }
  });

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      mouseYRef.current = (e.clientY / window.innerHeight - 0.5) * 2;
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const position = [
          radius * Math.cos(angle),
          0,
          radius * Math.sin(angle)
        ];
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    gsap.from(".title-text", { 
      opacity: 0, 
      y: 30, 
      duration: 1.2, 
      stagger: 0.2, 
      ease: "power3.out" 
    });
  }, []);

  // Handle hover directly
  const handleHover = (project) => {
    setHoveredProject(project);
  };

  if (!isClient) {
    return (
      <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4">Loading...</Typography>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden", background: "#ffffff" }}>
      {/* Animated Title */}
      <div
        className="title-text"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#333",
          textAlign: "center",
          zIndex: 5,
        }}
      >
        <Typography variant="h1" style={{ fontWeight: "bold", fontSize: "2.5rem", letterSpacing: "0.1em", color: "#333", marginBottom: "-5rem" }}>
          Projects
        </Typography>
        
      </div>

      {/* Hover Preview Image or Default Message */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1200px",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          background: hoveredProject ? `url(${hoveredProject.img}) center/cover no-repeat` : "transparent",
          boxShadow: hoveredProject ? "0px 8px 30px rgba(0,0,0,0.1)" : "none",
          borderRadius: "2px",
          opacity: hoveredProject ? 0.9 : 1,
          transition: "all 0.5s ease",
          zIndex: 10,
          border: hoveredProject ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {!hoveredProject && (
          <Typography 
            variant="h1" 
            style={{ 
              fontSize: "4rem",
              fontWeight: 700,
              color: "#333",
              letterSpacing: "0.05em",
              opacity: 0.8,
              fontFamily: "Gotham, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              textAlign: "center",
              margin: "0 auto"
            }}
          >
            <DecoderText text="Arjan Singh Jassal" delay={1500} />
          </Typography>
        )}
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} intensity={1.2} />
        <Scene onClick={setSelectedProject} onHover={handleHover} />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.2} 
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Custom Modal */}
      <CustomModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
