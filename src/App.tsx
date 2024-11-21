import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            <mesh>
                <OrbitControls/>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </Canvas>
    )
}

export default App
