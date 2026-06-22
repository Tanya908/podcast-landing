import {Button} from "./Button.tsx";
import Products from "../assets/products.webp";
import TextHighlight from "../assets/text-highlight.svg";

const Store = () => {
    return (
        <section className="page-spacing mb-20">
            <div className="grid lg:grid-cols-[1fr_1.5fr] items-center">

                <div className="bg-[var(--color-verde-oscuro)] store-spacing">
                    <h2 className="text-h2-caps text-[var(--color-blanco)] mb-6 w-full lg:w-sm">
                        <span className="relative inline-block whitespace-nowrap">
                            <img
                                src={TextHighlight}
                                aria-hidden="true"
                                alt=""
                                className="text-highlighter scale-105"
                            />
                            <span className="relative text-[var(--color-rojo)]">Azimut Life: </span>
                        </span>
                        {" "} productos para tu bienestar
                    </h2>

                    <div className="w-full xl:max-w-lg">
                        <p className="text-p1 text-[var(--color-blanco)] mb-10">
                            Nuestra tienda online te ofrece herramientas diseñadas para ayudarte en este viaje hacia el bienestar, la autorrealización y el crecimiento personal a través de journals, cartas, cuadernos, bolígrafos y herramientas que te acompañarán en tu camino hacia una vida con sentido.
                        </p>
                    </div>

                    <Button href="https://clubdelbienestar.com/alimentacion40"
                            variant="white" className="w-full md:w-fit"
                    >
                        Quiero saber más
                    </Button>
                </div>

                <div className="h-full bg-[var(--color-gris-claro)] flex justify-center items-center store-spacing">
                    <img src={Products}
                         loading="lazy"
                         alt="Azimut Life wellness products"
                         className="w-full max-w-[584px] aspect-[584/326] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
export default Store
