import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

function App() {
    return (
        <Canvas camera={{
            position: [0, 0, 7]
        }}>
            <OrbitControls/>
            <mesh position={[0, 0, 0]} scale={[1, 0.5, 2]}
                  rotation={[THREE.MathUtils.degToRad(50), THREE.MathUtils.degToRad(10), 0]}>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
            <mesh position={[2, 0, 0]} scale={[1.5, 1, 1.5]} rotation={[0, THREE.MathUtils.degToRad(150), 0]}>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
            <mesh position={[-2, 0, 0]} scale={[0.5, 1.5, 0.5]} rotation={[0, 0, THREE.MathUtils.degToRad(50)]}>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
            <group position={[0, 2, 0]} scale={1.5} rotation-z={THREE.MathUtils.degToRad(5)}>
                <mesh>
                    <boxGeometry/>
                    <meshNormalMaterial/>
                </mesh>
                <mesh position-x={-2}>
                    <boxGeometry/>
                    <meshNormalMaterial/>
                </mesh>
                <mesh position-x={2}>
                    <boxGeometry/>
                    <meshNormalMaterial/>
                </mesh>
            </group>
        </Canvas>
    )
}

export default App
