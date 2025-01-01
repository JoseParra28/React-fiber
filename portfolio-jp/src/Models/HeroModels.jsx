import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef, Suspense } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial, ScrollControls, useScroll } from "@react-three/drei"
import { useControls } from 'leva'
import CanvasLoader from "./Loader"


const HeroModel = () => {

    const materialProps = useControls({
        thickness: {value: 0.2, min: 0, max:3, step: 0.05},
        roughness: {value: 0, min: 0, max:1, step: 0.1},
        transmission: {value: 1, min: 0, max:1, step: 0.01},
        ior: {value: 1.2, min: 0, max:3, step: 0.01},
        chromaticAberration: {value: 0.82, min: 0, max:1},
        backside: {value: true}
    })
    const Sphere = ({position, size, color}) => {
        const ref = useRef()
        const data = useScroll()

        useFrame ((state, delta) => {
            const { offset } = data
            // ref.current.rotation.x = offset * 5
            ref.current.rotation.y = offset * 5
            // ref.current.rotation.z = offset * 5
            // ref.current.position.z = offset * 5.7
            // ref.current.position.x = offset * -0.1
            // ref.current.position.y = offset * -0.1
        })
        return (
            <mesh position={position} ref={ref}> 
                <boxGeometry args={[1.2, 1.2, 1.2]}/>
                <MeshTransmissionMaterial {...materialProps} />
                <meshStandardMaterial color={color}  />
            </mesh>
        )
    }
    const Torus = ({position, size, color}) => {
        const ref = useRef()
        const data = useScroll()

        useFrame ((state, delta) => {
            const { offset } = data
            ref.current.rotation.x = offset * 5
            ref.current.rotation.y = offset * 5
            ref.current.rotation.z = offset * 5
            ref.current.position.z = offset * 5.7
            ref.current.position.x = offset * -0.1
            ref.current.position.y = offset * -0.1
        })
        return (
            <mesh position={position} ref={ref}> 
                {/* <torusGeometry args={size}/> */}
                <boxGeometry args={[1,1,1]}/>
                <MeshTransmissionMaterial {...materialProps} />
                <meshStandardMaterial color={color}  />
            </mesh>
        )
    }

    const Scene = () => {
        return (
            <>
            <directionalLight intensity={3} position={0, 3, 2}/>
            <Environment preset="dawn"/>
            <color args={['#040404']} attach="background"/>
            </>
        )
    }
   
  

    return (
        
        <Canvas className="hero-canvas" >
            <Suspense fallback={<CanvasLoader/>}>
            <ScrollControls pages={0.2}>
           <Scene/>
        <PresentationControls>
        {/* <Float> */}
        <Torus position={[4,0,0]} />
        {/* </Float> */}
        </PresentationControls>       
        </ScrollControls>
        </Suspense>
        </Canvas>
        

    )
}

export default HeroModel