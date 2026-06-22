import { useForm } from "react-hook-form";
import { Button } from "./Button";

type FormValues = {
    name: string;
    email: string;
    privacyAccepted: boolean;
    commercialAccepted: boolean;
};

const StayUpdated = () => {

    const { register, handleSubmit, reset, formState: { errors, isValid,isSubmitting },}
          = useForm<FormValues>({ mode: "onTouched" });


    const onSubmit = async (data: FormValues) => {
        try {
            console.log(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section id="stay-updated" className="my-28 page-spacing grid md:grid-cols-[5fr_6fr]">
            <div className="bg-[var(--color-verde-oscuro)] flex flex-col gap-8 px-3 py-10 md:px-8 md:py-16">
                <h2 className="text-h2-caps text-[var(--color-blanco)]">
                    Efecto acumulado: la newsletter de Eli Romero
                </h2>
                <p className="text-p1 text-[var(--color-blanco)] max-w-lg">
                    Suscríbete y recibe un documento con 77 aprendizajes de todas las entrevistas que hemos realizado en el pódcast y emails semanales con aprendizajes, historias y consejos para aplicar todo lo que aprendo en el pódcast.
                </p>
            </div>

            <div className="bg-[var(--color-verde)] px-3 py-10 md:px-16 md:py-16">
                <form
                    className="flex flex-col gap-10 md:gap-12"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Nombre"
                                    className="input-text input-field"
                                    {...register("name", {
                                        required: "El nombre es obligatorio",
                                        validate: (v) => /^[\p{L}\s'\-]+$/u.test(v.trim()) || "Nombre inválido",
                                    })}
                                />
                                {errors.name && (
                                    <span className="error-message">
                                        {errors.name.message || "El nombre es obligatorio"}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    className="input-text input-field"
                                    {...register("email", {
                                        required: "Email es obligatorio",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Email inválido",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="error-message">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-3 px-4">
                            <div className="flex flex-col gap-1">
                                <label className="flex gap-4 items-start">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input checkbox-custom"
                                        {...register("privacyAccepted", { required: "Debes aceptar la política de privacidad" })}
                                    />

                                    <span className="checkbox-text">
                                        Acepto la política de privacidad
                                    </span>
                                </label>

                                {errors.privacyAccepted && (
                                    <span className="error-message px-8">
                                        {errors.privacyAccepted.message}
                                    </span>
                                )}
                            </div>

                            <label className="flex gap-4 items-start">
                                <input
                                    type="checkbox"
                                    className="checkbox-input checkbox-custom"
                                    {...register("commercialAccepted")}
                                />
                                <span className="checkbox-text">
                                    Acepto recibir comunicaciones comerciales
                                </span>
                            </label>
                        </div>
                    </div>

                    <Button type="submit" variant="white" disabled={!isValid || isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar una solicitud"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default StayUpdated;
