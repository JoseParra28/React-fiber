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
        
     {/* <OrbitControls/> */}
     <PresentationControls  global rotation={[0.13, 0, 0]} >
        <Float>
  <primitive 
  object={myModel.scene} position={[-28,-5,-29]} rotation-y={-2.2} scale={1.9}>
  </primitive>
  </Float>
  </PresentationControls>
  <ContactShadows  position-y={-1.4} opacity={0.4} scale={20} blur={3} color={"#aba6a6"}/>
        </mesh>
        
    </Canvas>


    )
} 