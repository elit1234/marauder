import styled from 'styled-components'
import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    visibility: hidden;
`

const LeftSide = styled.div`
    width: 40%;
    height: 100%;

    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: 'marauder xt';
`

const RightSide = styled.div`
    display: flex;
    width: 60%;
    justify-content: flex-end;
    height: 100%;
`

const Marauder = styled.div`
    grid-area: marauder;
    background: #00475f;
    font-size: 28pt;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-top: 1px;
    margin-bottom: 1px;
    color: #fff;
    cursor: default;
`

const Xt = styled.div`
    grid-area: xt;
    background-image: url('img/lilxt.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position: center center;
    cursor: default;
`

const Desktop = styled.div`
    background-image: url('img/desktop.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position: center center;
    height: 100%;
    width: 60px;
`

const TopBar = () => {
    const anim = useRef(null)
    const tl = gsap.timeline({ paused: true })
    const wrapperRef = useRef(null)

    useEffect(() => {
        anim.current = tl
            .fromTo(
                wrapperRef.current,
                {
                    y: '-80px',
                    autoAlpha: 0,
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.3,
                    ease: 'power1.easeInOut',
                }
            )
            .play()
    }, [])

    return (
        <Container ref={wrapperRef}>
            <LeftSide>
                <Marauder>Marauder</Marauder>
                <Xt />
            </LeftSide>
            <RightSide>
                <Desktop />
            </RightSide>
        </Container>
    )
}
export default TopBar
