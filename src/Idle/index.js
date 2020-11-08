import React, { useRef, useEffect } from 'react'
import { CenteredContent } from './common'
import { Canvas, useThree, useFrame } from 'react-three-fiber'

const Idle = () => {
  return (
    <CenteredContent style={{
      width: '100%',
    }}>
      <div style={{
        width: '50vw',
        height: '50vh'
      }}>
        <SceneOne />
      </div>
    </CenteredContent>
  )
}

const Dodecahedron = ({ref, lights = []}) => {

  const ref = useRef()
  useFrame(({clock}) => {
    ref.current.rotation.z += .01
    ref.current.position.z = 2 + Math.sin(clock.getElapsedTime()* 2.4)*.2
  })

  useEffect(() => {
    lights.forEach(light => void light.target = ref.current.position)
  }, [lights])

  return (
    <mesh name='dodeca' ref={ref} position={[0,0,2]}>
      <dodecahedronBufferGeometry attach='geometry' />
      <meshPhongMaterial attach='material' color='#222'/>
    </mesh>
  )
}

const Camera = props => {
  const ref = useRef()
  const { setDefaultCamera } = useThree()

  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera])
  useFrame(() => {
    ref.current.updateMatrixWorld()
  })


  return <perspectiveCamera ref={ref} {...props} />
}

const Dolly = () => {
  const { camera } = useThree()

  camera.position.y = -9
  camera.rotation.x = Math.PI/2 * 1.5/3

  return null
}


const SceneOne = () => (
    <Canvas style={{ background: '#12030b' }} shadowMap >
      <Camera position={[0, 0, 10]} angle={0.2}  />
      <spotLight
        position={[0, -5, 10]}
        color='#feaaaa'
        penumbra={1}
        castShadow
      />
      <spotLight position={[4, -5, 5]} color='#aaaafe' penumbra={1} castShadow
      />
      <spotLight
        position={[-10, -5, 10]}
        color='#aafede'
        penumbra={1}
        castShadow
      />

      <Dodecahedron />
      <Dolly />
    </Canvas>
)


export default Idle


