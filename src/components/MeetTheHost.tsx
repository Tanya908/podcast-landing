import TextHighlight from '../assets/text-highlight.svg'
import EliRomero from '../assets/eli-romero.webp'

const MeetTheHost = () => {
    return (
        <section className="my-16 page-spacing">
           <div className="grid items-start lg:grid-cols-2 lg:gap-10">
               <div className="py-10 pl-0 flex flex-col gap-10 order-1 lg:py-0 lg:order-none lg:col-start-2 lg:row-start-1">
                   <h2 className="text-h1 text-[var(--color-verde)]">
                       Un pódcast conducido por
                       <br />
                       <span className="relative inline-block whitespace-nowrap">
                        <img
                            src={TextHighlight}
                            aria-hidden="true"
                            alt=""
                            className="text-highlighter"
                        />
                        <span className="relative">Eli Romero</span>
                    </span>
                   </h2>
                   <div className="flex flex-col gap-4 text-p1 text-[var(--color-gris)] w-full xl:max-w-xl">
                       <p>Detrás de cada pregunta hay una intención. Detrás de cada silencio, una escucha activa. Y detrás de Tiene Sentido, está Eli Romero. Con más de 15 años de experiencia en comunicación, Eli ha trabajado con marcas, medios y emprendedores ayudándoles a conectar con lo que realmente importa: el mensaje.</p>
                       <p>Hoy, esa misma búsqueda la lleva al micrófono, donde conversa con expertos, pensadores y autores que han hecho del conocimiento profundo su herramienta de transformación.</p>
                   </div>
               </div>

               <div className="relative mb-[-80px] order-2 lg:order-none lg:col-start-1 lg:row-start-1">
                   <div className="z-10 mx-auto relative md:p-0 lg:left-10 md:w-[60%] lg:w-[80%]">
                       <img
                           src={EliRomero}
                           alt="Eli Romero, periodista y cofundadora de Azimut Life"
                           className="w-full"
                           loading="lazy"
                       />
                   </div>
               </div>

                <div className="order-3 bg-[var(--color-gris-claro)] pt-24 relative z-0 lg:gap-10 lg:grid
                                lg:grid-cols-2 lg:order-none lg:col-span-2 lg:row-start-2 xl:-mt-[30px] xl:pt-10">

                    <p className="text-p1 text-[var(--color-gris)] px-4 pb-4 lg:px-10 lg:pb-8 xl:pt-34">
                        Periodista y cofundadora de Azimut Life
                    </p>

                    <div className="px-4 pt-6 pb-10 xl:px-0 xl:pt-0 xl:pb-8">
                        <p className="text-h3 text-[var(--color-verde)]">
                            No quiero tener razón. Quiero tener una conversación que te haga pensar
                        </p>
                        <p className="text-decorative text-[var(--color-gris)] mt-4">
                            Eli Romero
                        </p>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default MeetTheHost
