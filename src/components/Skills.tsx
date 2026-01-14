export function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      items: [
        "React Native",
        "Expo",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      title: "State Management",
      items: ["Redux", "Zustand", "React Context API"],
    },
    {
      title: "3D Graphics",
      items: ["React Three Fiber"],
    },
    {
      title: "Databases & APIs",
      items: ["Supabase", "Firebase", "REST APIs"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      items: [
        "Analytical thinking",
        "Self-directed learner",
        "Technical communication",
      ],
    },
  ];

  return (
    <section className="bg-[#0f141b] px-6 pb-16 pt-4 sm:pb-20 lg:px-0">
      <div className="mx-auto grid gap-12 section-shell lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-4 text-slate-300">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Skills</p> */}
            <h2 className="text-2xl font-semibold text-white text-center mt-5">
              Technical <span className="text-[#07d2c7]">skills</span>
            </h2>
          </div>
          {/* <p>
                        Velit quasi pulvinar sed risus diam. Commodo tincidunt tincidunt ultricies faucibus nullam nec nisi. Nulla sit
                        lacus aliquam vulputate viverra habitasse convallis. Elit felis ipsum nec sed hendrerit tristique porttitor.
                        Mi cras dui in integer amet in quis nam.
                    </p>
                    <p>
                        Amet sed nisl commodo orci augue cras. Et odio sed erat amet eget eros vestibulum pulvinar. Ultrices ultrices
                        ipsum vel amet nunc faucibus non. Hendrerit faucibus odio augue neque. Ultricies semper tellus id neque
                        tincidunt commodo.
                    </p> */}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 self-start">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {group.title}
              </h3>
              <p className="text-sm text-slate-300">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
