import { Header } from './layout/Header'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Subscription from "./components/Subscription.tsx";

const App = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto w-full">
            <Header/>
            <Hero/>
            <About/>
            <Subscription/>
        </div>
    )
}
export default App
