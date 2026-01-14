const portfolioItems = [
    {
        id: 1,
        title: "Draft – Cricket Drafting Game",
        subtitle:
            "Cricket drafting multiplayer and single player mobile game featuring real-time team  drafting and management. The application was built  with React Native, Expo, Supabase, Expo SQLite,  React Three Fiber, and Reanimated, delivering an  interactive and visually engaging 3D experience.",
        image:
            "/draft.png",
    },
    {
        id: 2,
        title: "Progressive Overload App",
        subtitle:
            "Fitness tracking local first  mobile app focused on progressive overload training.  The application was built with React Native, Expo  and ExpoSqlite using Drizzle ORM, offering a clean  and user-friendly interface",
        image:
            "/po.png",
    },
    {
        id: 3,
        title: "Snooky – Snooker Scoring App",
        subtitle:
            "Mobile application that allows users to  score snooker games in real time and store  performance data to build a personal snooker profile.  Utilized React Native with Expo for cross-platform  UI and Supabase for backend services including  authentication and real-time data storage.",
        image:
            "/snooky.png",
    },
];


export function PortfolioGrid() {
    return (
        <section id="projects" className="bg-[#0f141b] px-6 py-16 sm:py-20 lg:px-0">
            <div className="mx-auto flex flex-col gap-10 section-shell">
                <div className="text-center space-y-1">
                    {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio</p> */}
                    <h2 className="text-2xl font-semibold">
                        Featured <span className="text-[#07d2c7]">Applications</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col overflow-hidden rounded-xl border border-[#07d2c7]/20 bg-[#0c1017] shadow-lg transition hover:-translate-y-1 hover:border-[#07d2c7]/50 hover:shadow-2xl"
                        >
                            <div className="relative aspect-auto overflow-hidden border-b border-white/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                                />
                            </div>
                            <div className="px-5 pb-4 pt-4">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
