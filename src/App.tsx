import { Header } from './layout/Header'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";

const App = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto w-full">
            <Header/>
            <Hero/>
            <About/>
        </div>
    )
}
export default App
