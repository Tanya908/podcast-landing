import { Header } from './layout/Header'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Subscription from "./components/Subscription.tsx";
import MeetTheHost from "./components/MeetTheHost.tsx";
import StayUpdated from "./components/StayUpdated.tsx";

const App = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto w-full">
            <Header/>
            <Hero/>
            <About/>
            <Subscription/>
            <MeetTheHost/>
            <StayUpdated/>
        </div>
    )
}
export default App
