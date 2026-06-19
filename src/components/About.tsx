import lavanguardia from '../assets/icons/companies-logo/lavanguardia.svg'
import vogue from '../assets/icons/companies-logo/vogue.svg'
import larazon from '../assets/icons/companies-logo/larazon.svg'
import huffpost from '../assets/icons/companies-logo/huffpost.svg'
import elEspanol from '../assets/icons/companies-logo/el-espanol.svg'
import abc from '../assets/icons/companies-logo/abc.svg'
import elConfidencial from '../assets/icons/companies-logo/el-confidencial.svg'
import elDiarioVasco from '../assets/icons/companies-logo/eldiariovasco.svg'
import Podcasts from '../assets/podcasts.webp'
import TextHighlight from '../assets/text-highlight.svg'

type CompanyLogo = {
    id: number
    src: string
    alt: string
}

const companyLogos: CompanyLogo[] = [
    { id: 1, src: lavanguardia,   alt: "La Vanguardia" },
    { id: 2, src: vogue,          alt: "Vogue" },
    { id: 3, src: larazon,        alt: "La Razón" },
    { id: 4, src: huffpost,       alt: "HuffPost" },
    { id: 5, src: elEspanol,      alt: "El Español" },
    { id: 6, src: abc,            alt: "ABC" },
    { id: 7, src: elConfidencial, alt: "El Confidencial" },
    { id: 8, src: elDiarioVasco,  alt: "El Diario Vasco" },
]

const tickerLogos: CompanyLogo[] = [...companyLogos, ...companyLogos]

const About = () => {
    return (
        <section id="about" className="my-20">
            <div className="flex flex-col gap-4 page-spacing lg:flex-row lg:gap-0 lg:items-stretch lg:h-24 lg:px-0">
                <div className="mr-10 bg-[var(--color-gris-claro)] px-3 py-4 w-fit flex items-center lg:px-8 lg:w-56 lg:shrink-0">
                    <p className="text-p2-caps text-[var(--color-verde)]"> Nos has visto en: </p>
                </div>

                <div className="relative overflow-hidden lg:flex-1">
                    <div className="left-0 bg-gradient-to-r ticker-fade" />
                    <div className="right-0 bg-gradient-to-l ticker-fade" />

                    <div className="flex w-max ticker">
                        {tickerLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="flex shrink-0 items-center justify-center py-8 px-16
                                           border-l border-[var(--color-gris-oscuro)]"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-5 max-w-[90px] lg:max-w-[160px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-4 pt-20 lg:mx-10 lg:px-0 lg:pt-28 flex flex-col gap-10 lg:flex-row lg:gap-14">
                <div className="flex flex-col gap-12 lg:flex-1">
                    <p className="text-h2 text-[var(--color-verde)]">
                        Tiene Sentido es el espacio en el que Eli Romero te invita a explorar el bienestar {' '}
                        <span className="relative whitespace-nowrap">
                            <img
                                src={TextHighlight}
                                aria-hidden="true"
                                alt=""
                                className="text-highlighter"
                            />
                            <span className="relative"> desde todas sus </span>
                        </span>
                        {' '} dimensiones: físico, mental, emocional, financiero y espiritual.
                    </p>
                    <p className="text-h2 text-[var(--color-verde)]">
                        Lo hacemos a través de conversaciones profundas en las que descubrirás {' '}
                        <span className="relative whitespace-nowrap">
                            <img
                                src={TextHighlight}
                                aria-hidden="true"
                                alt=""
                                className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                            />
                            <span className="relative"> verdades que </span>
                        </span>
                        {' '} inspiran y que te animan a encontrar tus propias respuestas.
                    </p>
                </div>

                <div className="lg:flex-1">
                    <img
                        src={Podcasts}
                        alt="Episodios del pódcast"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
