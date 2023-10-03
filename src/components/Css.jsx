import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Css_logo from './Css_logo'
import styled from 'styled-components';

const Description = styled.div`
    width: 30vw;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    background-color: #fff;
    border-radius: 1vw;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.4vw;
    font-weight: bold;
    color: #000;

    @media screen and (max-width: 768px) {
        width: 60vw;
        height: 25vw;      
        left: 4.5vw;
        font-size: 1.8vw;
    }
`;

const Css = () => {
  return (
    <>
    <Canvas style={{width: `60%`, height: `100%`,  position: `relative`, left: `10vw`, bottom: `15vw`,cursor:`pointer`, overflow:`hidden` }} camera={{position: [10, 0, 80], fov: 45}}>
      <Stage environment="city" intensity={0.6} >
          {/* 3Dモデルを表示する */}
          {/* stageとは、3Dモデルを表示するためのコンポーネントです。 */}
          {/* environmentとは、3Dモデルの背景を設定するパラメータです。 */}
          {/* intensityとは、ひかりの強さを表すパラメータです。0から1の間で指定します。 */}

          <Css_logo />
          {/* 3Dモデルを表示する */}
      </Stage>
      <OrbitControls enableZoom={false} enableRotate={true} enableDamping={false} enablePan={false} autoRotate/>
    </Canvas>
    <Description>レスポンシブデザインの複雑さ,異なるデバイスや画面サイズに適応させるためなど、多くの概念やテクニックを理解する必要があり、難しいですがよてもやりがいを感じます</Description>
    </>
  )
}

export default Css