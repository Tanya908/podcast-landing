import Meeting from "../assets/meeting.webp";
import TextHighlight from "../assets/text-highlight.svg";
import { Button } from "./Button.tsx";

const Meet = () => {
    return (
        <section className="page-spacing mb-20">
            <h2 className="text-h2-caps text-[var(--color-verde)] max-w-4xl">
                <span className="relative inline-block whitespace-nowrap">
                    <img
                        src={TextHighlight}
                        alt=""
                        aria-hidden="true"
                        className="text-highlighter scale-105"
                    />
                    <span className="relative">Vives hinchada</span>
                </span>
                {", con poca energía o con digestiones pesadas y no sabes por qué?"}
            </h2>

            <div className="mt-10 lg:mt-16 flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:gap-x-16">
                <img
                    src={Meeting}
                    alt="Sesión de bienestar"
                    className="w-full object-cover"
                />

                <div className="mt-10 lg:mt-0 flex flex-col gap-6 lg:gap-8 w-full lg:w-xl">
                    <h3 className="text-h3 text-[var(--color-verde)]">
                        Herramientas para tu bienestar y crecimiento personal
                    </h3>
                    <p className="text-p1 text-[var(--color-gris)]">
                        Nuestra tienda online te ofrece herramientas diseñadas para ayudarte en este viaje hacia el bienestar, la autorrealización y el crecimiento personal a través de journals, cartas, cuadernos, bolígrafos y herramientas que te acompañarán en tu camino hacia una vida con sentido.
                    </p>
                    <Button href="#" variant="green" className="w-full md:w-fit">
                        Quiero saber más
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Meet;
