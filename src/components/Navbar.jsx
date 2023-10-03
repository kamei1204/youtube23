import React from 'react'
import { styled } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 80vw;
    height: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw 0;

    @media (max-width: 768px) {
        padding: 5vw 0
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    
`

const Logo = styled.img`
    height: 20vw;
`

const List = styled.ul`
    font-size: 1.5vw;
    display: flex;
    list-style: none;
    gap: 2vw;

    @media (max-width: 768px) {
        display: none;
    }
`

const LinkItem = styled.li`
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;

    @media (max-width: 768px) {
        width: 35vw;
        gap: 4vw;
    }
`

const Icon = styled.img`
    width: 3vw;
    cursor: pointer;
`

const Button = styled.button`
    width: 16vw;
    padding: 1vw;
    border: none;
    border-radius: 0.5vw;
    background-color: #FFA500;
    color: #fff;
    font-size: 1vw;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;

    &:hover { 
        background-color: #FF6347;
        transition: all 0.5s ease;
    }

    @media (max-width: 768px) {
        width: 30vw;
        padding: 1vw 0;
        font-size: 1.5vw;
    }
`

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png"/>
                    <List>
                        {/* <LinkItem ><AnchorLink href="/" style={{textDecoration:"none", color:"#FFFFFF"}}>Home</AnchorLink></LinkItem> */}
                        <LinkItem><AnchorLink href="#about" style={{textDecoration:"none", color:"#FFFFFF"}}>About</AnchorLink></LinkItem>
                        <LinkItem><AnchorLink href="#works" style={{textDecoration:"none", color:"#FFFFFF"}}>Works</AnchorLink></LinkItem>
                        <LinkItem><AnchorLink href="#contact" style={{textDecoration:"none", color:"#FFFFFF"}}>Contact</AnchorLink></LinkItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <Button>ご連絡はこちら</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar