import { useState } from 'react'
import Logo from '/face-blowing-a-kiss.svg'
import { Canvas, useThree } from "@react-three/fiber"
import { Environment, ScrollControls, Scroll } from "@react-three/drei"

import Experience from "./Experience.jsx"
import Cone from "./Cone.jsx"

import './index.css'

export default function App() {

// const { width, height } = useThree((state) => state.viewport)

 return (

  
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 40 }}>
      <Environment
        files="./hdris/envmap.hdr" />
      
      <color 
        attach="background" 
        args={["#aaefef"]} />



      <ScrollControls pages={3} damping={0.1}>
        
        <Experience />
        <Scroll>
          <Cone position={[-1, 0, 0]}/>
          <Cone position={[1, -3, 0]} />
          <Cone position={[1, -6, 0]} />  
        </Scroll>

        <Scroll html> 
          <h1 
            className='text-2xl m-5'>
            html in here (optional)
          </h1>
          <h1 
          className="text-3xl font-bold underline m-5"
          style={{ top: '100vh', position: 'absolute' }}>
            second page</h1>
          <h1
          className="text-6xl font-bold underline m-5 top-200vh absolute" 
          >
            third page
          </h1>
        </Scroll>

      </ScrollControls>
    
    </Canvas>
  
  )
}

