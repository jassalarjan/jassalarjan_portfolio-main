import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import gsap from "gsap";

// ✅ JSON Data for 20 Projects (Repeating for Left & Right)
const baseProjects = [
  { id: 1, title: "Project 1", img: "/images/1.jpg", description: "Description for Project 1" },
  { id: 2, title: "Project 2", img: "/images/2.jpg", description: "Description for Project 2" },
  { id: 3, title: "Project 3", img: "/images/3.jpg", description: "Description for Project 3" },
  { id: 4, title: "Project 4", img: "/images/4.jpg", description: "Description for Project 4" },
  { id: 5, title: "Project 5", img: "/images/5.jpg", description: "Description for Project 5" },
  { id: 6, title: "Project 6", img: "/images/6.jpg", description: "Description for Project 6" },
  { id: 7, title: "Project 7", img: "/images/7.jpg", description: "Description for Project 7" },
  { id: 8, title: "Project 8", img: "/images/8.jpg", description: "Description for Project 8" },
  { id: 9, title: "Project 9", img: "/images/9.jpg", description: "Description for Project 9" },
  { id: 10, title: "Project 10", img: "/images/10.jpg", description: "Description for Project 10" },
];

// ✅ Repeat the projects on both left and right sides
const projects = [...baseProjects, ...baseProjects];

function ProjectImage({ position, project, onClick, isHovered, onHover, onUnhover }) {
  // ✅ Use Memo to optimize texture loading
  const texture = useMemo(() => new THREE.TextureLoader().load(project.img), [project.img]);

  // ✅ Smooth Hover Animation
  const { scale, pos } = useSpring({
    scale: isHovered ? 1.5 : 1.2,
    pos: isHovered ? [position[0] + 0.3, position[1], position[2] + 0.5] : position,
    config: { tension: 170, friction: 12 },
  });

  return (
    <animated.mesh
      position={pos}
      scale={scale}
      onClick={() => onClick(project)}
      onPointerOver={() => onHover(project)}
      onPointerOut={onUnhover}
    >
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent opacity={1} />
    </animated.mesh>
  );
}

export default function ProjectShowcase() {
  const radius = 10;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const orbitControls = useRef();

  // ✅ Smooth Auto Scroll with GSAP
  useFrame(() => {
    if (orbitControls.current) {
      gsap.to(orbitControls.current, { autoRotateSpeed: 0.3, duration: 2, ease: "power2.out" });
    }
  });

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      <Canvas camera={{ position: [6, 10, 12], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} intensity={1.5} />

        {/* ✅ Fixed Top-Angle View */}
        <OrbitControls
          ref={orbitControls}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.2} // Slowed Down Effect
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />

        {/* ✅ Circular Scroller with Projects */}
        {projects.map((project, index) => {
          const angle = (index / projects.length) * Math.PI * 2;
          const position = [radius * Math.cos(angle), 0, radius * Math.sin(angle)];

          return (
            <ProjectImage
              key={project.id}
              position={position}
              project={project}
              onClick={(proj) => setSelectedProject(proj)}
              isHovered={hoveredProject?.id === project.id}
              onHover={(proj) => setHoveredProject(proj)}
              onUnhover={() => setHoveredProject(null)}
            />
          );
        })}

        {/* ✅ Center Image (Always Facing Viewer) */}
        {hoveredProject && (
          <animated.mesh position={[0, 2, 3]} rotation={[0, 0, 0]} scale={[3, 3, 1]}>
            <planeGeometry args={[3, 3]} />
            <meshBasicMaterial
              map={useMemo(() => new THREE.TextureLoader().load(hoveredProject.img), [hoveredProject.img])}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </animated.mesh>
        )}
      </Canvas>

      {/* ✅ Centered Hovered Project Info */}
      {hoveredProject && (
        <animated.div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            textAlign: "center",
            color: "#fff",
            width: "60%",
            opacity: hoveredProject ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Typography variant="h4" style={{ fontWeight: "bold" }}>{hoveredProject.title}</Typography>
          <Typography variant="body1">{hoveredProject.description}</Typography>
        </animated.div>
      )}

      {/* ✅ Full-Screen Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            opacity: selectedProject ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "600px",
              textAlign: "center",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* ✅ Close Button Fixed */}
            <IconButton onClick={() => setSelectedProject(null)} style={{ position: "absolute", top: "10px", right: "10px", color: "#000" }}>
              <CloseIcon fontSize="large" />
            </IconButton>

            <Typography variant="h5">{selectedProject?.title}</Typography>
            <img src={selectedProject?.img} alt={selectedProject?.title} style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }} />
          </div>
        </div>
      )}
    </div>
  );
}
