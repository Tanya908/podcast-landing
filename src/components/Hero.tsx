import StudioMobile from "../assets/hero-img-sm.webp"
import StudioDesktop from "../assets/hero-img.webp"
import ScrollDown from "../assets/icons/scroll-down.svg"
import {Button} from "./Button.tsx";
import Blur from "../assets/blur.svg"

type HeroProps = {
    onImageLoad?: () => void;
};

const Hero = ({ onImageLoad }: HeroProps) => {
    const handleScrollDown = (): void => {
        const nextSection = document.getElementById('about');

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleImageLoad = () => {
        onImageLoad?.();
    };

    return (
        <section className="relative w-[100vw] ml-[calc(50%-50vw)]">
            <div className="overflow-x-hidden">
                <img
                    src={StudioMobile}
                    alt="Tiene Sentido Podcast"
                    className="w-full md:hidden"
                    onLoad={handleImageLoad}
                    loading="eager"
                    fetchPriority="high"
                />
                <img
                    src={StudioDesktop}
                    alt="Tiene Sentido Podcast"
                    onLoad={handleImageLoad}
                    loading="eager"
                    fetchPriority="high"
                    className="hidden md:block w-screen max-w-none relative left-1/2 -translate-x-1/2"
                />
            </div>

            <div className="flex flex-col items-center justify-center">

                <div className="absolute z-10 top-[20%] left-1/2 -translate-x-1/2">
                    <img
                        src={Blur}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                   pointer-events-none -z-10 h-full xl:h-[20vw]"
                    />

                    <h1
                        className="text-title text-[var(--color-verde-oscuro)] text-center
                                   w-full md:w-sm lg:w-3xl"
                    >
                        TIENE SENTIDO PÓDCAST
                    </h1>
                </div>

                <Button
                    href="#stay-updated"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap lg:hidden"
                >
                    Únete a la newsletter
                </Button>

                <button
                    onClick={handleScrollDown}
                    aria-label="Scroll to next section"
                    className="absolute bottom-10 lg:bottom-14 left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                    <img src={ScrollDown} aria-hidden="true" alt="" className="w-full md:w-16" />
                </button>
            </div>
        </section>
    )
}
export default Hero
