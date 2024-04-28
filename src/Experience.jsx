import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, RoundedBox, useTexture, useScroll } from "@react-three/drei"
import { MathUtils } from "three"

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)


export default function Experience(){

  const boxRef = useRef()
  const cylRef = useRef()
  const group = useRef()

  const { camera } = useThree()

  const { width, height } = useThree((state) => state.viewport)
  const scroll = useScroll()
  const normalMap = useTexture('./textures/waternormals.jpeg')

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4)
    const r2 = scroll.range(1 / 4, 1 / 4)
    const r3 = scroll.range(2 / 4, 1 / 4)
    const r4 = scroll.range(3 / 4, 0 / 4)
    const r5 = scroll.range(0 / 4, 4 / 4)
    
    // boxRef.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33
    // cylRef.current.rotation.x = Math.PI + (Math.PI / 2) * rsqw(r1) - r2 * 0.39

    camera.zoom =   1.5 - r5 

    camera.updateProjectionMatrix()
    
    boxRef.current.rotation.z = Math.PI - (Math.PI / 2) * rsqw(r1)
    cylRef.current.rotation.x = Math.PI + (Math.PI / 2) * rsqw(r1)

    boxRef.current.rotation.y = Math.PI + (Math.PI / 2) * rsqw(r2)
    cylRef.current.rotation.z = Math.PI - (Math.PI / 2) * rsqw(r2)

    boxRef.current.rotation.x = Math.PI + (Math.PI / 2) * rsqw(r3)
    cylRef.current.rotation.y = Math.PI - (Math.PI / 2) * rsqw(r3)

    boxRef.current.position.x = MathUtils.damp(boxRef.current.position.x, (width / 7) * r4 + 0.5, 4, delta)
    cylRef.current.position.x = MathUtils.damp(cylRef.current.position.x, (-width / 7 ) * r4 - 0.5, 4, delta)

    console.log(r3)
    // console.log(scroll)

    // group.current.rotation.y = MathUtils.damp(group.current.rotation.y, (-Math.PI / 1.45) * r2, 4, delta)
    // group.current.position.x = MathUtils.damp(group.current.position.x, (-width / 7) * r2, 4, delta)

    // group.current.scale.x = group.current.scale.y = group.current.scale.z = MathUtils.damp(group.current.scale.z, 1 + 0.24 * (1 - rsqw(r4)), 4, delta)
  })

  return (
    <>
      {/* <OrbitControls
      enableZoom={false}
      />        */}
      <group
        className='model'
        ref={group} 
        position={[0, 0, 0]}>
          <RoundedBox
            args={[0.5, 0.5, 1.]}
            position={[-1, 0, 0]}
            ref={boxRef}
            radius={0.01}
            >
            <meshStandardMaterial 
              metalness={1}
              roughness={0.12}
              normalMap={ normalMap }
            />
        </RoundedBox>

        <mesh 
        position={[1, 0, 0]}
        ref={cylRef}
        >
         <cylinderGeometry 
          args={[0.3, 0.3, 1, 64]} 
         />
          <meshStandardMaterial 
          color="hotpink"
          metalness={1.0}
          roughness={0.1}
          />
        </mesh>
      </group>
    </>
  )}