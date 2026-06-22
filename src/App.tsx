import {useEffect, useState} from 'react';
import { Header } from './layout/Header'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Subscription from "./components/Subscription.tsx";
import MeetTheHost from "./components/MeetTheHost.tsx";
import StayUpdated from "./components/StayUpdated.tsx";
import Collaboration from "./components/Collaboration.tsx";
import Store from "./components/Store.tsx";
import Programs from "./components/Programs.tsx";
import Meet from "./components/Meet.tsx";
import Footer from "./layout/Footer.tsx";
import {Preloader} from "./components/Preloader.tsx";

const App = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setShowPreloader(false);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {showPreloader && <Preloader />}

            <div
                className={`${
                    showPreloader
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                } transition-opacity duration-500`}
            >
                <Header />
                <Hero />
                <About />
                <Subscription />
                <MeetTheHost />
                <StayUpdated />
                <Collaboration />
                <Store />
                <Programs />
                <Meet />
                <Footer />
            </div>
        </>
    );
};

export default App;
