import logo from '../assets/logo.svg'
import { Cross } from 'hamburger-react';
import {useEffect, useState} from "react";

type navLink = {
    href: string;
    text: string;
    id: number;
}

const navLinks: navLink[] = [
    {href:"/acerca-de-nosotros", text:"acerca de nosotros", id:1},
    {href:"/suscripcion", text:"Suscripción", id:2},
    {href:"https://azimutlife.co/", text:"Azimut Life", id:3},
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header className="py-8 bg-transparent">
            <div className="flex items-center justify-between px-4 lg:px-0 md:mx-10 pb-4
                            border-b border-transparent lg:border-[var(--color-verde)]">
                <a href="/" className="relative z-[60]">
                    <img
                        src={logo} alt="Tiene Sentido Pódcast"
                        className="w-24 md:w-full max-w-[180px]"
                    />
                </a>

                <nav className="hidden lg:flex lg:justify-between lg:gap-6">
                    {navLinks.map((item)=> (
                            <a
                                key={item.id}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-p2-caps text-[var(--color-verde)]">
                                {item.text}
                            </a>
                    ))}
                </nav>

                <div className=" relative z-[60] lg:hidden">
                    <Cross
                        size={24} color="#111" duration={0}
                        toggled={isOpen} toggle={setIsOpen}
                    />
                </div>

                <a
                    href="#"
                    className="relative z-[60] hidden lg:inline-flex text-btn items-center justify-center
                               bg-[var(--color-verde)] text-[var(--color-blanco)] px-6 py-4"
                >
                    Únete a la newsletter
                </a>
            </div>

            <div
                className={`fixed left-0 right-0 top-20 bottom-0 z-50 bg-white transition-all duration-500 ease-out 
                            ${ isOpen ? "opacity-100 translate-y-0 pointer-events-auto lg:hidden"
                                      : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
                <nav  className="flex flex-col items-center gap-10 py-16">
                    {navLinks.map((item)=> (
                            <a
                                key={item.id}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-p2-caps text-[var(--color-verde)]" >
                                {item.text}
                            </a>
                    ))}
                </nav>

                <a
                    href="#"
                    className="block w-fit mx-auto text-btn bg-[var(--color-verde)]
                               text-[var(--color-blanco)] px-6 py-4"
                >
                    Únete a la newsletter
                </a>
            </div>
        </header>
    )
}
