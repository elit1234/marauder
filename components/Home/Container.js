import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Wrapper = styled.div`
    min-height: calc(100vh - 60px);
    max-height: 100%;

    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        'leftSide rightSide'
        'leftSide rightSide'
        '. rightSide';

    @media (max-width: 600px) {
        grid-template-columns: ${(props) => props.width && `${props.width}px`} 1.5fr;
    }
`

const LeftSide = dynamic(() => import('./LeftSide'))
const RightSide = dynamic(() => import('./RightSide'))
const Container = (props) => {
    const [width, setWidth] = useState(200)
    return (
        <Wrapper width={width}>
            <LeftSide width={width} setWidth={setWidth} />
            <RightSide />
        </Wrapper>
    )
}

export default Container
