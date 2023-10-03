import React, { useState } from 'react'
import { styled } from 'styled-components'
import Development from './Development'
import Html from './Html'
import JavaScript from './JavaScript'
import ReactJs from './ReactJs'
import Css from './Css'



const data = [
    "Development",
    "HTML",
    "Css",
    "I Love French",
    "And ReactJs",
]

const Section = styled.div`
    scroll-snap-align: center; //スクロールの位置を中央に
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54vw;

    @media screen and (max-width: 768px) {
        height: 120vw;
        margin-bottom: 20vw;
    }
`

const Container = styled.div`
    width: 80vw;
    height: 40vw;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 140vw;
        width: 80vw;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

const Right = styled.div`
    flex: 1;
    color: #fff;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin-left: 7.5vw;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2vw;
`

const ListItem = styled.li`
    font-size: 6vw;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px #fff; //文字の縁取り
    position: relative;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        letter-spacing: 1vw;
    }

    &::after {
        content:'${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        color: pink;
        width: 0;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        &::after {
            animation: moveText 0.5s linear both; //bothはアニメーション終了後の状態を保持する

            //アニメーションの定義
            //fromは0%、toは100%と同じ
            //0%から100%までwidthを変化させる
            @keyframes moveText {
                100% {
                    width: 100%;
                }
            }
        }
    }
`




const Work = () => {

    const [ work, setWork] = useState("Development")

    return (
        <Section id='works'>
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item} 
                            </ListItem>
                            )
                        )}
                    </List>
                </Left>
                <Right>
                    {work === "Development" ?  ( 
                        <Development />
                        ) : work === "HTML" ?  ( 
                        <Html />
                        ) : work === "Css" ?  ( 
                        <Css />
                        ) : work === "I Love French" ?  ( 
                        <JavaScript />
                        ) : work === "And ReactJs" ? ( 
                        <ReactJs />
                        ) : (
                        <Development />
                        )}
                </Right>
            </Container>
        </Section>
    )
}

export default Work