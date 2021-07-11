import styled from 'styled-components'
import TopBar from './TopBar'

const Container = styled.div`
    width: 100vw;
    min-height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
        padding-left: 15%;
        padding-right: 15%;
    }
`

const Home = () => {
    return (
        <Container>
            <TopBar />
        </Container>
    )
}

export default Home
