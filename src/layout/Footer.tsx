import LogoLight from "../assets/logo-white.svg"
import TikTok from "../assets/icons/social-icons/tiktok.svg";
import YouTube from "../assets/icons/social-icons/youtube.svg"
import Instagram from "../assets/icons/social-icons/instagram.svg"

type SocialsProps = {
    link: string,
    src: string,
    title: string,
    id:number,
}

type navLink = {
    href: string;
    text: string;
    id: number;
}

const Socials:SocialsProps[] = [
    {id:1,link:"https://www.youtube.com/@TieneSentidoPodcast", src:YouTube , title:"YouTube"},
    {id:2,link:"http://instagram.com/tienesentidopodcast", src:Instagram, title:"Instagram"},
    {id:3,link:"https://www.tiktok.com/discover/tiene-sentido-podcast", src:TikTok , title:"TikTok"},
]

const navLinks: navLink[] = [
    {href:"#", text:"Aviso Legal", id:1},
    {href:"/privacy-policy.html", text:"Política de privacidad", id:2},
    {href:"/cookies-policy.html", text:"Política de cookies", id:3},
]

const Footer = () => {
    return (
        <footer className="mx-4 md:mx-10 mt-20 mb-4 bg-[var(--color-verde-oscuro)] py-10 px-3 md:px-10">

            <img src={LogoLight} alt="" className="mb-10 mx-auto w-[180px] md:w-sm"/>

            <div className="flex items-center justify-between md:justify-center md:gap-8 pb-8 max-w-sm mx-auto">
                {Socials.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-3 lg:p-8"
                    >
                        <div className="bg-[var(--color-verde)] p-4 rounded-full h-[72px] w-[72px] md:w-28 md:h-28
                                        flex items-center justify-center subscription-bg-hover">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="transition-transform duration-300 group-hover:scale-95 w-8 h-8 md:w-12 md:h-12"
                            />
                        </div>
                    </a>
                ))}
            </div>

            <div className="w-full h-px bg-[var(--color-gris-oscuro)]"></div>

            <nav className=" flex flex-col items-center justify-center gap-6
                             mt-8 mx-auto max-w-lg md:flex-row md:justify-between"
            >
                {navLinks.map((item)=> (
                    <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-p2 text-[var(--color-gris-oscuro)] footer-hover"
                    >
                        {item.text}
                    </a>
                ))}
            </nav>

        </footer>
    )
}
export default Footer
