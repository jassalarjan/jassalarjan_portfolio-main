import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '~/components/theme-provider';

export default function FloatingCube() {
  const { theme } = useTheme();
  const primaryColor = theme === 'dark' ? '#a29bfe' : '#4834d4';     // Indigo in light mode
  const secondaryColor = theme === 'dark' ? '#6c5ce7' : '#3867d6';   // Blue in light mode
  const tertiaryColor = theme === 'dark' ? '#74b9ff' : '#0097e6';    // Light blue accent in light mode
  
  const group = useRef();
  const cube1 = useRef();
  const cube2 = useRef();
  const cube3 = useRef();
  const cube4 = useRef();
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
    
    if (cube1.current) {
      cube1.current.rotation.x += delta * 0.5;
      cube1.current.rotation.z += delta * 0.3;
      cube1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
    
    if (cube2.current) {
      cube2.current.rotation.x += delta * 0.4;
      cube2.current.rotation.z -= delta * 0.4;
      cube2.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 2) * 0.5;
    }
    
    if (cube3.current) {
      cube3.current.rotation.x -= delta * 0.3;
      cube3.current.rotation.z += delta * 0.5;
      cube3.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 4) * 0.5;
    }
    
    if (cube4.current) {
      cube4.current.rotation.x += delta * 0.2;
      cube4.current.rotation.y += delta * 0.4;
      cube4.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 3) * 0.5;
      cube4.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  const darkModeOpacity = theme === 'dark' ? 0.9 : 0.8;
  const secondaryOpacity = theme === 'dark' ? 0.8 : 0.7;
  const tertiaryOpacity = theme === 'dark' ? 0.7 : 0.6;

  return (
    <group ref={group}>
      <mesh 
        ref={cube1} 
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial 
          color={primaryColor} 
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={darkModeOpacity}
          emissive={theme === 'dark' ? primaryColor : '#000000'}
          emissiveIntensity={theme === 'dark' ? 0.3 : 0}
        />
      </mesh>
      
      <mesh 
        ref={cube2} 
        position={[2, 1, -1]}
        scale={0.8}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={secondaryColor} 
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={secondaryOpacity}
          emissive={theme === 'dark' ? secondaryColor : '#000000'}
          emissiveIntensity={theme === 'dark' ? 0.2 : 0}
        />
      </mesh>
      
      <mesh 
        ref={cube3} 
        position={[-2, -1, -2]}
        scale={0.6}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={primaryColor} 
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={tertiaryOpacity}
          emissive={theme === 'dark' ? primaryColor : '#000000'}
          emissiveIntensity={theme === 'dark' ? 0.2 : 0}
        />
      </mesh>

      <mesh 
        ref={cube4} 
        position={[-1.5, 1.5, -1]}
        scale={0.5}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={tertiaryColor} 
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={tertiaryOpacity}
          emissive={theme === 'dark' ? tertiaryColor : '#000000'}
          emissiveIntensity={theme === 'dark' ? 0.3 : 0}
        />
      </mesh>
    </group>
  );
}