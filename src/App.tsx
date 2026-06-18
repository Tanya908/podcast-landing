import { Header } from './layout/Header'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Subscription from "./components/Subscription.tsx";
import MeetTheHost from "./components/MeetTheHost.tsx";
import StayUpdated from "./components/StayUpdated.tsx";
import Collaboration from "./components/Collaboration.tsx";
import Store from "./components/Store.tsx";
import Programs from "./components/Programs.tsx";

const App = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto w-full">
            <Header/>
            <Hero/>
            <About/>
            <Subscription/>
            <MeetTheHost/>
            <StayUpdated/>
            <Collaboration/>
            <Store/>
            <Programs/>
        </div>
    )
}
export default App
