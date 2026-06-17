import { Header } from './layout/Header'
import Hero from "./pages/Hero.tsx";

const App = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto w-full">
            <Header/>
            <Hero/>
        </div>
    )
}
export default App
