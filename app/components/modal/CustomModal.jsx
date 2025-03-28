import React from "react";

export default function CustomModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Close Button */}
        <button style={styles.closeButton} onClick={onClose}>
          ✖
        </button>

        {/* Title */}
        <h2 style={styles.title}>{project.title}</h2>

        {/* Image */}
        <img src={project.img} alt={project.title} style={styles.image} />

        {/* Description */}
        <p style={styles.description}>{project.description}</p>
      </div>
    </div>
  );
}

// 🔥 Custom Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)", // Dark overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#1e1e1e",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    opacity: 0.9,
  },
};
