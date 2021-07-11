import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/Home"))

const App = () => {
    return <Home />
}

export default App
