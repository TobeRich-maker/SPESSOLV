"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera } from "@react-three/drei"
import { Vector3, type Mesh, type Group } from "three"

function Particles({ count = 200, color = "#03A791" }) {
  const mesh = useRef<Group>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2
    }
  })

  const particles = Array.from({ length: count }, (_, i) => {
    const position = new Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30)
    const scale = Math.random() * 0.2 + 0.05
    const rotation = Math.random() * Math.PI

    return (
      <mesh key={i} position={[position.x, position.y, position.z]} rotation-x={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
      </mesh>
    )
  })

  return <group ref={mesh}>{particles}</group>
}

function FloatingLogo() {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <torusKnotGeometry args={[2, 0.5, 128, 32]} />
        <meshStandardMaterial color="#D70654" emissive="#D70654" emissiveIntensity={0.5} toneMapped={false} />
      </mesh>
    </Float>
  )
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshStandardMaterial
        color="#03A791"
        emissive="#03A791"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-70">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#03A791" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D70654" />
        <Particles color="#03A791" />
        <Particles count={100} color="#D70654" />
        <FloatingLogo />
        <GridFloor />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
