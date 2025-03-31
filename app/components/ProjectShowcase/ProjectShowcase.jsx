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

  const handlePointerOver = () => {
    setHovered(true);
    onHover(project);
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(null);
  };

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
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
  const radius = useRef(10);
  const groupRef = useRef();
  const mouseYRef = useRef(0);

  // Update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        radius.current = 8;
      } else if (window.innerWidth < 1024) {
        radius.current = 9;
      } else {
        radius.current = 10;
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Smooth Auto-Rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
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
          radius.current * Math.cos(angle),
          0,
          radius.current * Math.sin(angle)
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
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

  const handleHover = (project) => {
    setIsHovering(!!project);
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
    <div 
      style={{ 
        width: "100%", 
        height: "100vh", 
        position: "relative", 
        overflow: "hidden", 
        background: "#ffffff" 
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setHoveredProject(null);
      }}
    >
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
          width: "100%",
          padding: "0 1rem",
          "@media (max-width: 768px)": {
            top: "3%",
          },
          "@media (max-width: 480px)": {
            top: "2%",
          }
        }}
      >
        <Typography 
          variant="h1" 
          style={{ 
            fontWeight: "bold", 
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)", 
            letterSpacing: "0.1em", 
            color: "#333", 
            marginBottom: "clamp(-3rem, -5vw, -5rem)",
            "@media (max-width: 768px)": {
              marginBottom: "clamp(-2rem, -4vw, -3rem)",
            }
          }}
        >
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
          width: "min(60vw, 700px)",
          height: "min(60vh, 300px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          fontWeight: "bold",
          textAlign: "center",
          background: hoveredProject ? `url(${hoveredProject.img}) center/cover no-repeat` : "transparent",
          boxShadow: hoveredProject ? "0px 8px 30px rgba(0,0,0,0.1)" : "none",
          borderRadius: "2px",
          opacity: isHovering ? 0.9 : 1,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 10,
          border: hoveredProject ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
          transform: isHovering ? "translate(-50%, -50%) scale(1.05)" : "translate(-50%, -50%)",
          filter: isHovering ? "brightness(1.1)" : "brightness(1)",
          pointerEvents: "none",
          "@media (max-width: 1200px)": {
            width: "min(70vw, 450px)",
            height: "min(70vh, 450px)",
          },
          "@media (max-width: 768px)": {
            width: "min(80vw, 400px)",
            height: "min(80vh, 400px)",
          },
          "@media (max-width: 480px)": {
            width: "min(90vw, 350px)",
            height: "min(90vh, 350px)",
          }
        }}
      >
        {hoveredProject ? (
          <div style={{
            position: "absolute",
            top: "-2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 11,
            background: "rgba(255, 255, 255, 0.9)",
            padding: "0.5rem 1.5rem",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.1)",
            "@media (max-width: 768px)": {
              top: "-2rem",
              padding: "0.4rem 1.2rem",
            }
          }}>
            <Typography 
              variant="h2" 
              style={{ 
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 600,
                color: "#333",
                letterSpacing: "0.05em",
                opacity: 1,
                fontFamily: "Gotham, sans-serif",
                textAlign: "center",
                margin: 0,
                pointerEvents: "none",
                "@media (max-width: 768px)": {
                  fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                }
              }}
            >
              {hoveredProject.title}
            </Typography>
          </div>
        ) : (
          <Typography 
            variant="h1" 
            style={{ 
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#333",
              letterSpacing: "0.05em",
              opacity: 0.8,
              fontFamily: "Gotham, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              textAlign: "center",
              margin: "0 auto",
              pointerEvents: "none",
              "@media (max-width: 768px)": {
                fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
              },
              "@media (max-width: 480px)": {
                fontSize: "clamp(0.8rem, 2vw, 1.5rem)",
              }
            }}
          >
            <DecoderText text="Arjan Singh Jassal" delay={1500} />
          </Typography>
        )}
      </div>

      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 10, 15], fov: 50 }}
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: 1,
          "@media (max-width: 768px)": {
            height: "100vh",
          }
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} intensity={1.2} />
        <Scene onClick={() => {}} onHover={handleHover} />
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

      {/* Modal code commented out for reference
      <CustomModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      */}
    </div>
  );
}
