import Link from "next/link";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
    { href: "https://www.linkedin.com/in/muhammad-ammar-01240b314", Icon: Linkedin },
    { href: "https://github.com/mammar186/mammar186", Icon: Github },
    { href: "mailto:muhammadammar1806dev@gmail.com", Icon: Mail },
];

export function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden px-6 pb-24 pt-16 sm:pt-24 lg:px-0"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(7,210,199,0.32),transparent_30%),radial-gradient(circle_at_70%_15%,rgba(7,210,199,0.28),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.94))]" />
            <div className="absolute inset-0 bg-[url('/cover.png')] bg-cover bg-center opacity-10" />

            <div className="relative mx-auto flex flex-col items-center section-shell text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Frontend Developer</p>
                <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
                    Hi, I am <span className="text-[#07d2c7]">Muhammad Ammar</span>
                </h1>
                <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
                    A  <span className="text-[#07d2c7]">Frontend Developer</span> transforming ideas into stunning
                    digital experiences. Let&apos;s create something amazing!
                </p>

                <div className="mt-8 flex items-center gap-3">
                    {socials.map(({ href, Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#07d2c7]/60 hover:text-[#07d2c7]"
                            aria-label={href}
                        >
                            <Icon size={18} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
