import Link from "next/link";

const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Featured projects" },
    { href: "#about", label: "About me" },
    { href: "#contact", label: "Contact me" },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0d1015]/85 backdrop-blur-xl">
            <div className="mx-auto flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-0 lg:py-7 section-shell">
                <Link href="#home" className="text-xl font-semibold tracking-wide text-white">
                    Ammar<span className="text-[#07d2c7]">.</span>
                </Link>

                <div className="hidden items-center gap-8 text-sm text-slate-300/80 lg:flex">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="transition hover:text-white">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <a
                    href="/Muhammad-Ammar-Resume-ReactNative_v1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-[#07d2c7] px-5 py-2 text-sm font-medium text-[#07d2c7] transition hover:bg-[#07d2c7] hover:text-black"
                >
                    View Resume
                </a>
            </div>
        </nav>
    );
}
