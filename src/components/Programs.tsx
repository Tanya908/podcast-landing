import Banner from "../assets/banner.webp"
import TextHighlight from "../assets/text-highlight.svg";

const Programs = () => {
    return (
        <section className="page-spacing mb-20 grid md:grid-cols-[2fr_1fr] lg:grid-cols-2 md:gap-10">

            <a
                href="https://youtu.be/8Hl2P6Lw5d8?si=-jgL3Iz65cJNfqYq"
                target="_blank"
                rel=" noopener noreferrer"
            >
                <img src={Banner} alt="Restaura tu microbiota"
                     className="mb-10 transition-transform duration-300 hover:scale-95 active:scale-95"
                />
            </a>

            <div className="max-w-md">
                <h2 className="text-h1 mb-6">Retos de Bienestar</h2>

                <p className="text-p1 mb-6 w-full lg:w-sm relative">
                    Restaura tu microbiota:{" "}
                    <span className="inline-block relative">
                        <img
                            src={TextHighlight}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full scale-110"
                        />
                        <span className="relative z-10">
                            21 días
                        </span>
                    </span>
                    {" "}hacia un intestino sano y una vida con más energía
                </p>
            </div>
        </section>
    )
}
export default Programs
