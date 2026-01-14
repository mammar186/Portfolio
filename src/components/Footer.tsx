import { Facebook, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socialIcons = [
  // { href: "https://facebook.com", Icon: Facebook },
  {
    href: "https://www.linkedin.com/in/muhammad-ammar-01240b314",
    Icon: Linkedin,
  },

  { href: "https://github.com/mammar186/mammar186", Icon: Github },
  { href: "mailto:muhammadammar1806dev@gmail.com", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-12 bg-[#0b0f14] px-6 pb-10 pt-10 lg:px-0">
      <div className="mx-auto grid gap-8 border-t border-white/5 pt-10 text-sm text-slate-300 section-shell lg:grid-cols-4">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-white">
            Ammar<span className="text-[#07d2c7]">.</span>
          </p>
          <p className="text-xs text-slate-400">Frontend developer.</p>
        </div>

        <div>
          <p className="font-semibold text-white">Home</p>
          <div className="mt-3 space-y-2 text-slate-300">
            <Link href="#projects" className="block hover:text-white">
              My projects
            </Link>
            <Link href="#about" className="block hover:text-white">
              About me
            </Link>
            <Link href="#contact" className="block hover:text-white">
              Contact me
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Handles</p>
          <div className="mt-3 flex gap-3 text-slate-300">
            {socialIcons.map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#07d2c7]/60 hover:text-[#07d2c7]"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="self-end text-xs text-slate-500 lg:col-span-1">
                    Developed by me. Designed by Peace Amehya.
                </div> */}
      </div>
    </footer>
  );
}
