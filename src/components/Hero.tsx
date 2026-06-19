import StudioMobile from "../assets/hero-img-sm.webp"
import StudioDesktop from "../assets/hero-img.webp"
import ScrollDown from "../assets/icons/scroll-down.svg"


const Hero = () => {
    const handleScrollDown = (): void => {
        const nextSection = document.getElementById('about');

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="relative w-[100vw] ml-[calc(50%-50vw)]">
            <div className="overflow-x-hidden">
                <img
                    src={StudioMobile}
                    alt="Tiene Sentido Podcast"
                    className="w-full md:hidden"
                />
                <img
                    src={StudioDesktop}
                    alt="Tiene Sentido Podcast"
                    className="hidden md:block w-screen max-w-none relative left-1/2 -translate-x-1/2"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-title text-[var(--color-verde-oscuro)] text-center max-w-sm
                               absolute z-10 top-[20%] left-1/2 -translate-x-1/2"
                >
                    TIENE SENTIDO PÓDCAST
                </h1>

                <a
                    href="#"
                    className="text-btn bg-[var(--color-verde)] whitespace-nowrap text-[var(--color-blanco)]
                               px-6 py-4 absolute top-1/2 left-1/2 -translate-x-1/2 z-10 lg:hidden"
                >
                    Únete a la newsletter
                </a>

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
