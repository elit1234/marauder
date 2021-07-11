import styled from 'styled-components'
import { gsap } from 'gsap'
import { useRef, useEffect, useState } from 'react'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    visibility: hidden;
    resize: horizontal;
    height: 100%;
`

const OuterWrapper = styled.div`
    padding: 3px;
    grid-area: leftSide;
    ${(props) => props.dragging && `cursor: move !important;`};
`

const ItemWrapper = styled.div`
    min-height: 40px;
    width: 100%;
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 20px;
    padding: 5px;

    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
        max-height: 100%;
        & * {
            display: flex;
            justify-content: center;
        }
    }
    cursor: pointer;
    gap: 2px;
`

const ItemLeft = styled.div`
    width: 30%;
    @media (max-width: 600px) {
        width: 100%;
    }
    font-weight: bold;
`

const ItemRight = styled.div`
    width: 70%;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const LeftSide = ({ width, setWidth }) => {
    const wrapperRef = useRef(null)
    const outerRef = useRef(null)
    const tl = gsap.timeline({})
    const anim = useRef(null)
    const widthAnim = useRef(null)

    const [device, setDevice] = useState('iPhone 8')
    const [country, setCountry] = useState('New Zealand')
    const [dragging, setDragging] = useState(false)

    useEffect(() => {
        anim.current = tl.fromTo(
            wrapperRef.current,
            {
                autoAlpha: 0,
                x: '-50vw',
            },
            {
                x: 0,
                autoAlpha: 1,
                duration: 0.6,
                // delay: 0.2,
                ease: 'power1.easeInOut',
            },
        )
    }, [])

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            if (dragging) {
                setWidth(e.screenX)
            } else setWidth(width)
        })
        document.addEventListener('mousedown', (e) => {
            if (dragging) {
                // setWidth(e.screenX)
                setDragging(false)

                document.removeEventListener('mousedown', () => {})
                console.log('stopping dragging')
            }
        })
    }, [])

    useEffect(() => {
        widthAnim.current = tl.to(outerRef.current, {
            width: width,
        })
        if (width && dragging) widthAnim.current.play()
    }, [width])

    return (
        <OuterWrapper
            ref={outerRef}
            onClick={(e) => {
                if (e.clientX > wrapperRef.current.clientWidth) {
                    setDragging(true)
                    console.log('dragging')
                }
            }}
            dragging={dragging ? 1 : 0}
            width={width ? width : 0}
        >
            <Wrapper ref={wrapperRef}>
                <ItemWrapper>
                    <ItemLeft onClick={() => setWidth(100)}>Device:</ItemLeft>
                    <ItemRight>{device}</ItemRight>
                </ItemWrapper>
                <ItemWrapper>
                    <ItemLeft>Country:</ItemLeft>
                    <ItemRight>{country}</ItemRight>
                </ItemWrapper>
            </Wrapper>
        </OuterWrapper>
    )
}

export default LeftSide
