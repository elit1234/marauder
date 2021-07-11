import styled from 'styled-components'
import dynamic from 'next/dynamic'

const TopBar = dynamic(() => import('./TopBar'))
const Container = dynamic(() => import('./Container'))

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
        padding-left: 15%;
        padding-right: 15%;
    }

    transition: all 0.5s ease-in-out;
`

const Content = styled.div``

const Home = () => {
    return (
        <Wrapper>
            <TopBar />
            <Container />
        </Wrapper>
    )
}

export default Home
