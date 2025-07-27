// ParallaxScene.jsx
import React, { useState } from "react";
import styles from './styles.module.scss';

const ParallaxScene = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;  // -0.5 ~ 0.5
    const y = (e.clientY - innerHeight / 2) / innerHeight;
    setOffset({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={styles['parallax-scene']}
      style={{
        width: "100vw",
        height: "100vh",
        transform: `
            translate(${-offset.x * 60}px, ${-offset.y * 60}px)
            rotateX(${offset.y * 10}deg)
            rotateY(${-offset.x * 10}deg)
          `,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { offset })
      )}
    </div>
  );
};

export default ParallaxScene;
