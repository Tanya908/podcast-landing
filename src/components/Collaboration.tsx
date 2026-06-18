import BehindScene from "../assets/behind-scene.webp";
import TextHighlight from "../assets/text-highlight.svg";
import {Button} from "./Button.tsx";

const Collaboration = () => {
    return (
        <section className="mx-4 md:mx-10 mb-28">
            <h2 className="text-h1 text-[var(--color-verde)] mb-10 lg:mb-14 max-w-[1000px]">
                <span className="relative inline-block whitespace-nowrap">
                    <img
                        src={TextHighlight}
                        aria-hidden="true"
                        alt=""
                        className="absolute inset-0 w-full h-full object-fill pointer-events-none scale-105"
                    />
                    <span className="relative">Quieres</span>
                </span>
                {" "} en Tiene Sentido o patrocinar el pódcast?
            </h2>

            <div className="grid bg-[var(--color-gris-claro)] lg:grid-cols-[1fr_1.5fr] items-center">
                <div className="px-3 md:px-8 py-10">
                    <h2 className="text-h2-caps mb-6 w-full lg:w-sm">Conecta con +2.5M de Personas</h2>
                    <div className="w-full xl:max-w-lg">
                        <p className="text-p1 text-[var(--color-gris)] mb-2">
                            Si quieres proponerte como invitado/a o eres una marca que querría colaborar con nosotros y llegar a +2.5 millones de personas cada mes…
                        </p>
                        <p className="text-p1 text-[var(--color-gris)] mb-10">
                            Contacta con nosotros y veremos la forma de hacerlo posible.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row md:gap-8">
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeRqCMWrkzfmvyujn_MoYABvGjPwS0VZFZoFdyAxlMhVXNnGg/viewform" >
                            Ser Invitado
                        </Button>
                        <Button href="mailto:equipo@tienesentidopodcast.com" >
                            Ofrecer Colaboración
                        </Button>
                    </div>
                </div>
                <div className="px-3 lg:px-0 lg:py-0 h-full">
                    <img src={BehindScene}
                         alt="Guest and host meeting in a podcast recording studio"
                         className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
export default Collaboration
