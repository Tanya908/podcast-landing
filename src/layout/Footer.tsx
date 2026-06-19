import LogoLight from "../assets/logo-white.svg"
import TikTok from "../assets/icons/social-icons/tiktok.svg";
import YouTube from "../assets/icons/social-icons/youtube.svg"
import Instagram from "../assets/icons/social-icons/instagram.svg"
import type {NavLink, SocialLink} from "../types";

const Socials:SocialLink[] = [
    {id:1,link:"https://www.youtube.com/@TieneSentidoPodcast", src:YouTube , title:"YouTube"},
    {id:2,link:"http://instagram.com/tienesentidopodcast", src:Instagram, title:"Instagram"},
    {id:3,link:"https://www.tiktok.com/discover/tiene-sentido-podcast", src:TikTok , title:"TikTok"},
]

const navLinks: NavLink[] = [
    {href:"#", text:"Aviso Legal", id:1},
    {href:"/privacy-policy.html", text:"Política de privacidad", id:2},
    {href:"/cookies-policy.html", text:"Política de cookies", id:3},
]

const Footer = () => {
    return (
        <footer className="page-spacing mt-20 mb-4 bg-[var(--color-verde-oscuro)] py-10 px-3 md:px-10">

            <img src={LogoLight} alt="Tiene Sentido Pódcast" className="mb-10 mx-auto w-[180px] md:w-sm"/>

            <div className="flex items-center justify-between md:justify-center md:gap-8 pb-8 max-w-sm mx-auto">
                {Socials.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-3 lg:p-8"
                    >
                        <div className="h-14 w-14 md:h-20 md:w-20 icon-background subscription-bg-hover">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="social-icon w-8 h-8"
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
