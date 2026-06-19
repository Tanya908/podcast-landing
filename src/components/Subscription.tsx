import YouTube from "../assets/icons/social-icons/youtube.svg"
import Spotify from "../assets/icons/social-icons/spotify.svg"
import ApplePodcast from "../assets/icons/social-icons/apple-podcast.svg"
import Podimo from "../assets/icons/social-icons/portfolio.svg"
import type {SocialLink} from "../types";

const Subscriptions:SocialLink[] = [
    {id:1,link:"https://www.youtube.com/@TieneSentidoPodcast", src:YouTube , title:"YouTube"},
    {id:2,link:"https://open.spotify.com/show/0HtxMCdhMaD8KCsgRYJnJg", src:Spotify, title:"Spotify"},
    {id:3,link:"https://podcasts.apple.com/es/podcast/tiene-sent", src:ApplePodcast, title:"Apple Podcast"},
    {id:4,link:"https://podimo.com/es/shows/tiene-sentido-2", src:Podimo , title:"Podimo"},
]

const Subscription = () => {
    return (
        <section id="subscription" className="my-28 page-spacing">
            <h2 className="text-h1 mb-10 max-w-5xl">
                Puedes suscribirte y escuchar el pódcast en
            </h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
                {Subscriptions.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-3 lg:p-8 bg-[var(--color-gris-claro)]"
                    >
                        <div className="icon-background h-14 w-14 md:w-28 md:h-28 subscription-bg-hover">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="social-icon w-6 h-5 md:w-12 md:h-12"
                            />
                        </div>

                        <p className="text-p1-medium mt-16 md:mt-36 subscription-text-hover">
                            {item.title}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    )
}
export default Subscription
