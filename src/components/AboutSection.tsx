import { FileDown, Globe2 } from "lucide-react";

const orbitBadges = [
  { label: "React Native", position: "-left-5 top-4" },
  { label: "Expo", position: "right-4 top-1" },
  { label: "JavaScript", position: "-left-4 bottom-8" },
  { label: "R3F", position: "right-0 bottom-10" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-16 sm:py-20 lg:px-0">
      <div className="mx-auto grid gap-20 section-shell lg:grid-cols-[1fr,1.2fr] lg:items-center">
        <div className="relative flex justify-center">
          <div className="relative h-[260px] w-[260px] rounded-full border border-[#07d2c7]/50 bg-gradient-to-br from-white/5 to-transparent p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            {/* Background image layer (behind badges) */}
            <div
              className="absolute inset-3 rounded-full bg-cover bg-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] z-0 pointer-events-none"
              style={{ backgroundImage: "url('/pp.jpg')" }}
              aria-hidden="true"
            />

            {orbitBadges.map((badge) => (
              <span
                key={badge.label}
                className={`absolute z-10 rounded-full bg-[#0c1119] px-3 py-1 text-xs font-semibold text-[#07d2c7] shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${badge.position}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-slate-300">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400 text-center">My Bio</p> */}
            <h2 className="text-2xl font-semibold text-white text-center">
              About <span className="text-[#07d2c7]">me</span>.
            </h2>
          </div>
          <p>
            Mobile App developer with hands-on experience building mobile applications using React Native. Skilled in
            TypeScript, Expo, Supabase, SQLite, and modern state management tools like Zustand and Redux. Experienced in
            real-time and offline-first systems, smooth UI/UX with animations, and interactive 3D interfaces using React
            Three Fiber. Strong CS foundation with experience in scalable component architecture, multiplayer logic, and data
            synchronization. Eager to contribute to a professional frontend team and grow as a full-stack-capable engineer.
          </p>
          {/* <p>
            Convalis tincidunt posuere nibh cras non morbi in varius arcu. Et libero diam sit risus tincidunt. Urna
            suscipit lectus magna amet sollicitudin habitant vestibulum. A sed mauris tristique. Metus sed vitae euismod
            fermentum nibh cursus ac. Et quis justo consequat viverra.
          </p> */}
          {/* <div className="flex flex-wrap gap-3 pt-1">
            <button className="flex items-center gap-2 rounded-md border border-[#07d2c7] px-4 py-2 text-sm font-semibold text-[#07d2c7] transition hover:bg-[#07d2c7] hover:text-black">
              <FileDown size={16} /> View Resume
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
