import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Section = styled.div`
    height: 70vw;
    scroll-snap-align: center; //スクロールの位置を中央に
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100vw;
        height: 150vw;
    }
`

const Container = styled.div`
    width: 90vw;
    height: 50vw;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;
    margin-left: 8vw;

    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        height: 150vw;
        gap: 10vw;
        margin-left: 0;
    }
`

const Left = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vw;

    @media (max-width: 768px) {
        width: 68vw;
        text-align: center;
        gap: 4vw;
        margin-top: 10vw;
    }
`

const Right = styled.div`
    width: 50vw;
    position: relative;

    @media (max-width: 768px) {
        width: 90vw;
        height: 90vw;
        user-select: none;
    }
`

const Title = styled.h1`
    font-size: 5vw;

    @media (max-width: 768px) {
        font-size: 8vw;
        border-bottom: 0.4vw solid #FFA500;
    }
`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;

    @media (max-width: 768px) {
        gap: 2vw;
    }
`

const Line = styled.img`
    height: 0.5vw;
`

const SubTitle = styled.h2`
    color: #FFA500;
    font-size: 4vw;
`

const Description = styled.p`
    font-size: 2vw;
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

const Img = styled.img`
    width: 40vw;
    height: 40vw;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    user-drag: none;
    -webkit-user-drag: none;
	-moz-user-select: none;
    @keyframes animate {
        from {
            transform: translateY(-10px);
        }
        to {
            transform: translateY(10px);
        }
    }
    
    @media (max-width: 768px) {
        width: 70vw;
        height: 70vw;
    }
`

const Hero = () => {
    return (
        <Section id='home'>
            <Navbar />
            <Container>
                <Left>
                    <Title>my name is Ryosuke Kamei</Title>
                    <WhatIDo>
                        <Line src="./img/line.png"/>
                        <SubTitle>What I Do</SubTitle>
                    </WhatIDo>
                    <Description>はじめまして、新人エンジニアの亀井亮輔です。私はReactを使ったフロントエンド開発に情熱を持って取り組んでいます。</Description>
                    <Button>もっと詳しく</Button>
                </Left>
                <Right>
                    {/* 3DModal */}
                    {/* //react-three-fiberのCanvasコンポーネント */}
                    {/* まずはじめに、react-three-fiberのCanvasコンポーネントを使って、3D空間を作成します。 */}
                    <Canvas>
                        {/* この中に3D空間の要素を記入していきます。 */}

                        <OrbitControls enableZoom={false} enableDamping={false} enablePan={false}/>
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

                        <Sphere args={[1, 100, 200]} scale={2.4}>
                        {/* 球体を作成します。 */}
                        {/* args={[1, 100, 200]}とすることで、半径1、横の分割数100、縦の分割数200の球体を作成しています。 */}
                        {/* scale={1}とすることで、球体の大きさを1倍にしています。 */}
                        {/* このように、argsやscaleを使って、球体の形や大きさを変えることができます。 */}

                        <MeshDistortMaterial color="#FFA500" attach="material" distort={0.5} speed={2}/>
                        {/* マテリアルを設定します。 */}
                        {/* 今回は、MeshDistortMaterialを使用しています。 */}
                        {/* このマテリアルは、球体の形を歪ませることができます。 */}
                        {/* このように、マテリアルを変えることで、球体の見た目を変えることができます。 */}
                        {/* color="#220736"とすることで、色を設定しています。 */}
                        {/* attach="material"とすることで、このマテリアルを球体に設定しています。 */}
                        {/* distort={0.5}とすることで、球体の形を歪ませる強さを設定しています。 */}
                        {/* speed={2}とすることで、球体の形を歪ませるスピードを設定しています。 */}
                        {/* このように、distortやspeedを使って、球体の形を歪ませることができます。 */}

                        </Sphere>
                    </Canvas>
                    <Img src="./img/moon.png" alt="moon" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero