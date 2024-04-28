import { useState } from 'react'
import Logo from '/face-blowing-a-kiss.svg'
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";

import './index.css'

import Experience from "./Experience";


export default function App() {

 return (

  
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 40 }}>
      <Environment
        files="./hdris/envmap.hdr" />
      
      {/* <color 
        attach="background" 
        args={["#aaefef"]} /> */}

      <ScrollControls pages={3}>

      <Experience />


      </ScrollControls>
    
    </Canvas>
  
  )
}

