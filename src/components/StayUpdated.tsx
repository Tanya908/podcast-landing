import { Button } from "./Button";

const StayUpdated = () => {
    return (
        <section className="my-28 page-spacing grid md:grid-cols-[5fr_6fr]">
            <div className="bg-[var(--color-verde-oscuro)] flex flex-col gap-8 px-3 py-10 md:px-8 md:py-16">
                <h2 className="text-h2-caps text-[var(--color-blanco)]">
                    Efecto acumulado: la newsletter de Eli Romero
                </h2>
                <p className="text-p1 text-[var(--color-blanco)] max-w-lg">
                    Suscríbete y recibe un documento con 77 aprendizajes de todas las entrevistas que hemos realizado en el pódcast y emails semanales con aprendizajes, historias y consejos para aplicar todo lo que aprendo en el pódcast.
                </p>
            </div>

            <div className="bg-[var(--color-verde)] px-3 py-10 md:px-16 md:py-16">
                <form className="flex flex-col gap-10 md:gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="input-text input-field"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input-text input-field"
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:gap-3 px-4">
                            <label className="flex gap-4 items-start">
                                <input type="checkbox" className="checkbox-input checkbox-custom" />
                                <span className="checkbox-text">
                                    Acepto la política de privacidad
                                </span>
                            </label>
                            <label className="flex gap-4 items-start">
                                <input type="checkbox" className="checkbox-input checkbox-custom" />
                                <span className="checkbox-text">
                                    Acepto recibir comunicaciones comerciales
                                </span>
                            </label>
                        </div>
                    </div>

                    <Button href="#" variant="white">
                        Enviar una solicitud
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default StayUpdated;
