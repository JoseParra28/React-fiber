import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei"
import { TorusGeometry } from "three"



export const MyModel = () => {

    // const myModel = useGLTF('./desktop_pc/Portfolio-custom-model.gltf')
    const myModel = useGLTF('./myModel/model.gltf')
    // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    return (
        <Canvas className="about-canvas">
        <Environment preset="city"/>
        <color args={['#040404']} attach="background"/>   
        <mesh >
        
     <OrbitControls/>
  <primitive 
  object={myModel.scene}
  position={[-10, 0,0]}
  rotation-y={26}
  scale={1.3}
  > 
  </primitive>
  
 
        </mesh>
    </Canvas>


    )
} 