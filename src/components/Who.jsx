import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { styled } from 'styled-components'
import Cube from './Cube'

const Section = styled.div`
    height: 70vw;
    scroll-snap-align: center; //スクロールの位置を中央に
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 140vw;
        margin-top: 30vw;
    }
`

const Container = styled.div`
    width: 80vw;
    scroll-snap-align: center; //スクロールの位置を中央に
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        height: 110vw;
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Left = styled.div`
    width: 40vw;

    @media screen and (max-width: 768px) {
        width: 60vw;
        height: 60vw;
    }
`


const Title = styled.h1`
    font-size: 5vw;
    text-align: center;
`
const Right = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vw;

    @media screen and (max-width: 768px) {
        width: 80vw;
        align-items: center;
        gap: 3vw;
    }
`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`

const Line = styled.img`
    height: 0.5vw;
`

const SubTitle = styled.h2`
    color: #FFA500;
`

const Description = styled.p`
    font-size: 1.5vw;
`

const Button = styled.button`
    width: 12vw;
    padding: 1vw;
    border: none;
    border-radius: 0.5vw;
    background-color: #FFA500;
    color: #fff;
    font-size: 1.5vw;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 25vw;
        font-size: 2vw;
    }

    &:hover {
        background-color: #fff;
        color: #FFA500;
        transition: all 0.5s ease;
    }
`

const Who = () => {
    return (
        <Section id='about'>
            <Container>
                <Left>
                    {/* 3DModal */}
                    {/* //react-three-fiberのCanvasコンポーネント */}
                    {/* まずはじめに、react-three-fiberのCanvasコンポーネントを使って、3D空間を作成します。 */}
                    <Canvas camera={{ fov:25, position:[5, 5, 5,]}}>
                        {/* この中に3D空間の要素を記入していきます。 */}
                        {/* camera={{ fov:25, position:[5, 5, 5,]}}とすることで、カメラの位置を設定しています。 */}
                        {/* この場合、x軸方向に5、y軸方向に5、z軸方向に5の位置にカメラが設定されています。 */}
                        {/* fov:25とすることで、カメラの視野角を設定しています。 */}
                        {/* この場合、カメラの視野角は25度に設定されています。 */}
                        {/* この値を大きくすると、より広い範囲を撮影できるようになります。 */}
                        {/* 視野角とは、カメラが撮影できる範囲のことです。 */}

                        <OrbitControls enableZoom={false} enableRotate={true} enableDamping={false} enablePan={false} autoRotate/>
                        {/* 3D空間を操作するためのコントローラーです。 */}
                        {/* enableZoom={false}とすることで、マウスのホイールでのズームを無効にしています。 */}
                        {/* autoRotateとすることで、自動で回転するようにしています。 */}

                        <ambientLight intensity={1}/>
                        {/* 環境光を設定します。 */}
                        {/* intensity={1}とすることで、光の強さを1にしています。 */}

                        <directionalLight position={[3,2,1]}/>
                        {/* 平行光を設定します。 */}
                        {/* position={[3,2,1]}とすることで、光の位置を設定しています。 */}
                        {/* この場合、x軸方向に3、y軸方向に2、z軸方向に1の位置に光が当たっています。これで影を作成できる */}

                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>好奇心を持って<br></br>「枠にとらわれない発想を持つ」</Title>
                    <WhatIDo>
                        <Line src="./img/line.png"/>
                        <SubTitle>「私ができること」</SubTitle>
                    </WhatIDo>
                    <Description>「私ができること」は、自身の興味や好奇心を活かし、常に新しい視点やアプローチを模索することです。</Description>
                    <Button>もっと詳しく</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who