
// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { useRef, useState, useMemo, useEffect } from "react";

// // Single cube piece
// function SmallCube({ position, color }: { position: [number, number, number]; color: string }) {
//   return (
//     <mesh position={position} castShadow>
//       <boxGeometry args={[0.9, 0.9, 0.9]} />
//       <meshStandardMaterial
//         color={color}
//         roughness={0.3}
//         metalness={0.1}
//         emissive={new THREE.Color(color).multiplyScalar(0.25)}
//         emissiveIntensity={0.6}
//       />
//     </mesh>
//   );
// }

// // Rubik's cube group
// function RubiksCubeGroup({ scale }: { scale: number }) {
//   const groupRef = useRef<THREE.Group>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);
//   const [rotationDelta, setRotationDelta] = useState({ x: 0, y: 0 });

//   const handlePointerMove = (e: React.PointerEvent) => {
//     if (!isHovering) return;
//     if (lastPos) {
//       const dx = e.clientX - lastPos.x;
//       const dy = e.clientY - lastPos.y;
//       setRotationDelta({
//         x: dy * 0.005,
//         y: dx * 0.005,
//       });
//     }
//     setLastPos({ x: e.clientX, y: e.clientY });
//   };

//   const handlePointerEnter = () => setIsHovering(true);
//   const handlePointerLeave = () => {
//     setIsHovering(false);
//     setLastPos(null);
//   };

//   useFrame(() => {
//     if (!groupRef.current) return;
//     if (isHovering) {
//       groupRef.current.rotation.x += rotationDelta.x;
//       groupRef.current.rotation.y += rotationDelta.y;
//     } else {
//       groupRef.current.rotation.x += 0.003;
//       groupRef.current.rotation.y += 0.006;
//     }
//   });

//   const colors = ["#1d8bf5", "#f50f39", "#f56a07", "#319605", "#faf9f7"];

//   const smallCubes = useMemo(() => {
//     const cubes = [];
//     for (let x = -1; x <= 1; x++) {
//       for (let y = -1; y <= 1; y++) {
//         for (let z = -1; z <= 1; z++) {
//           const color = colors[Math.floor(Math.random() * colors.length)];
//           cubes.push(<SmallCube key={`${x}-${y}-${z}`} position={[x, y, z]} color={color} />);
//         }
//       }
//     }
//     return cubes;
//   }, []);

//   return (
//     <group
//       ref={groupRef}
//       position={[0, 1.2, 0]} // slight lift above shadow
//       scale={[scale, scale, scale]}
//       onPointerEnter={handlePointerEnter}
//       onPointerLeave={handlePointerLeave}
//       onPointerMove={handlePointerMove}
//     >
//       {smallCubes}
//     </group>
//   );
// }

// export default function RubiksCube() {
//   const [cubeScale, setCubeScale] = useState(0.8);

//   // 📱 Responsive cube scaling
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setCubeScale(0.7);
//       else if (window.innerWidth < 1024) setCubeScale(0.9);
//       else setCubeScale(1.0);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full h-[150px] md:h-[500px] pt-4 md:pt-12 touch-none select-none border-pink-600 border ">
//       <Canvas
//         shadows
//         camera={{ position: [5, 4, 6], fov: 50 }}
//       >
//         {/* 💡 Lights */}
//         <ambientLight intensity={0.6} />
//         <directionalLight
//           castShadow
//           position={[6, 8, 6]}
//           intensity={2.2}
//           shadow-mapSize-width={2048}
//           shadow-mapSize-height={2048}
//         />
//         <pointLight position={[-5, -5, 5]} intensity={1.2} color={"#b3d9ff"} />

//         {/* 🧊 Cube */}
//         <RubiksCubeGroup scale={cubeScale} />

//         {/* 🟫 Shadow floor */}
//         <mesh
//           rotation={[-Math.PI / 2, 0, 0]}
//           position={[0, 0, 0]}
//           receiveShadow
//         >
//           <planeGeometry args={[20, 20]} />
//           <shadowMaterial opacity={0.35} />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";

// 🧱 Single cube piece
function SmallCube({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.1}
        emissive={new THREE.Color(color).multiplyScalar(0.25)}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

// 🧊 Rubik's cube group
function RubiksCubeGroup({ scale }: { scale: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);
  const [rotationDelta, setRotationDelta] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isHovering) return;
    if (lastPos) {
      const dx = e.clientX - lastPos.x;
      const dy = e.clientY - lastPos.y;
      setRotationDelta({
        x: dy * 0.005,
        y: dx * 0.005,
      });
    }
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerEnter = () => setIsHovering(true);
  const handlePointerLeave = () => {
    setIsHovering(false);
    setLastPos(null);
  };

  useFrame(() => {
    if (!groupRef.current) return;
    if (isHovering) {
      groupRef.current.rotation.x += rotationDelta.x;
      groupRef.current.rotation.y += rotationDelta.y;
    } else {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.006;
    }
  });

  const colors = ["#1d8bf5", "#f50f39", "#f56a07", "#319605", "#faf9f7"];

  const smallCubes = useMemo(() => {
    const cubes = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          cubes.push(<SmallCube key={`${x}-${y}-${z}`} position={[x, y, z]} color={color} />);
        }
      }
    }
    return cubes;
  }, []);

  return (
    <group
      ref={groupRef}
      position={[0, 1.2, 0]} // lift above ground
      scale={[scale, scale, scale]}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      {smallCubes}
    </group>
  );
}

export default function RubiksCube() {
  const [cubeScale, setCubeScale] = useState(1.0);

  // 🎯 Keep cube same size, only adjust camera slightly
  const [cameraPos, setCameraPos] = useState<[number, number, number]>([5, 4, 6]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 400) setCameraPos([6, 5, 7]); // zoom out on short screens
      else setCameraPos([5, 4, 6]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[150px] md:h-[500px] md:pt-12 touch-none select-none">
      <Canvas shadows camera={{ position: cameraPos, fov: 50 }}>
        {/* 💡 Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight
          castShadow
          position={[6, 8, 6]}
          intensity={2.2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, -5, 5]} intensity={1.2} color={"#b3d9ff"} />

        {/* 🧊 Cube */}
        <RubiksCubeGroup scale={cubeScale} />

        {/* 🟫 Shadow floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.35} />
        </mesh>
      </Canvas>
    </div>
  );
}
