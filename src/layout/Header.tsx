import logo from '../assets/logo.svg'
import { Cross } from 'hamburger-react';
import {useEffect, useState} from "react";
import {Button} from "../components/Button.tsx";
import type {NavLink} from "../types";

const navLinks: NavLink[] = [
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
        <header className="absolute inset-x-0 top-0 z-[100] py-6 md:py-8">
            <div className="flex items-center justify-between px-4 md:px-0 md:mx-10 pb-4
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
                            className="text-p2-caps text-[var(--color-verde)] header-hover">
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

                <Button href="#" className="relative z-[60] hidden lg:inline-flex">
                    Únete a la newsletter
                </Button>
            </div>

            <div
                className={`fixed inset-0 z-50 bg-[var(--color-blanco)] transition-all duration-500 ease-out 
                            ${ isOpen ? "opacity-100 translate-y-0 pointer-events-auto lg:hidden"
                    : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
                <nav className="flex flex-col items-center gap-10 pt-[120px] pb-16 ">
                    {navLinks.map((item)=> (
                        <a
                            key={item.id}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-p2-caps text-[var(--color-verde)] text-hover" >
                            {item.text}
                        </a>
                    ))}
                </nav>
                <div className="flex justify-center">
                    <Button href="#" className="w-fit mx-auto">
                        Únete a la newsletter
                    </Button>
                </div>
            </div>
        </header>
    )
}
