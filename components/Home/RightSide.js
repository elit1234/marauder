import styled from 'styled-components'

const Wrapper = styled.div`
    background: orange;
    grid-area: rightSide;
`

const RightSide = () => {
    return (
        <Wrapper>
            <h1>right side</h1>
        </Wrapper>
    )
}

export default RightSide
