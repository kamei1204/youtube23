import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Erath from './Erath'

const Css = () => {
  return (
    <>
    <Canvas style={{width: `100%`, height: `80%`, position: `relative`, cursor:`pointer` }} camera={{position: [10, 0, 80], fov: 45}}>
      <Stage environment="city" intensity={0.6} >
          {/* 3Dモデルを表示する */}
          {/* stageとは、3Dモデルを表示するためのコンポーネントです。 */}
          {/* environmentとは、3Dモデルの背景を設定するパラメータです。 */}
          {/* intensityとは、ひかりの強さを表すパラメータです。0から1の間で指定します。 */}

          <Erath />
          {/* 3Dモデルを表示する */}
      </Stage>
      <OrbitControls enableZoom={false} enableRotate={true} enableDamping={false} enablePan={false} autoRotate/>
    </Canvas>
    </>
  )
}

export default Css