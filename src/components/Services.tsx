import {
  PhoneOutlined,
  Globe1Outlined,
  Database2Outlined,
} from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using React Native and Expo with TypeScript. Focused on performance, clean architecture, offline-first data, and real-time features.",
    number: "01",
    Icon: PhoneOutlined,
  },
  {
    title: "Frontend & UI Engineering",
    description:
      "Developing responsive, user-friendly interfaces using React, Next.js, Tailwind, and Reanimated. Emphasis on smooth animations, scalable components, and modern UI/UX practices.",
    number: "02",
    Icon: Globe1Outlined,
  },
  {
    title: "Backend Integration & State Management",
    description:
      "Integrating applications with Supabase, SQLite, and REST APIs. Experienced in managing complex state using Zustand and Redux, including real-time and multiplayer logic.",
    number: "03",
    Icon: Database2Outlined,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#0f141b] px-6 py-16 sm:py-20 lg:px-0">
      <div className="mx-auto flex flex-col gap-10 section-shell">
        <div className="text-center space-y-1">
          {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Services</p> */}
          <h2 className="text-2xl font-semibold">
            What <span className="text-[#07d2c7]">I do</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map(({ title, description, number, Icon }) => (
            <div
              key={title}
              className="relative flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-[#0c1017] px-6 py-6 text-sm text-slate-200 shadow-lg transition hover:-translate-y-1 hover:border-[#07d2c7]/40 hover:bg-[#0c1119] hover:text-slate-100 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#07d2c7]">
                  <Lineicons icon={Icon} size={20} />
                </div>
                <span className="text-lg font-semibold text-white/30">
                  {number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-slate-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
