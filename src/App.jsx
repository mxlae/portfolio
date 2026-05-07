export default function Portfolio() {
  const skills = [
    "TCP/IP",
    "Subnetting",
    "Networking",
    "Computer Engineering",
    "Crimping & Cabling",
  ];

  const projects = [
    {
      title: "VLAN Routing Lab",
      desc: "Inter-VLAN routing simulation using Cisco Packet Tracer with DHCP and trunk configuration.",
    },
    {
      title: "Network Troubleshooting",
      desc: "Diagnosing packet loss, gateway failures, DNS issues, and switch connectivity problems.",
    },
    {
      title: "Linux Networking",
      desc: "Basic Ubuntu Server networking setup including DHCP, SSH, and static IP configuration.",
    },
    {
      title: "Cabling & Crimping",
      desc: "RJ45 cable assembly, straight-through and crossover testing, and cable management.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-32">
        <div className="border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 rounded-full text-cyan-300 text-sm tracking-widest uppercase mb-6 shadow-lg shadow-cyan-500/10">
          Network Engineer Portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Fatir <span className="text-cyan-400">Javariansyah</span>
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg md:text-xl leading-relaxed">
          Building reliable networks, mastering infrastructure, and exploring
          the digital veins of modern systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black font-semibold shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="https://github.com"
            className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-950 shadow-2xl shadow-cyan-500/10 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800 bg-zinc-900">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-zinc-500 text-sm">
              terminal@fatir-network
            </span>
          </div>

          <div className="p-6 font-mono text-sm md:text-base text-green-400 space-y-3">
            <p>$ whoami</p>
            <p className="text-cyan-300">Fatir Javariansyah</p>

            <p>$ skills --list</p>
            <p className="text-zinc-300">
              TCP/IP | Subnetting | Networking | Computer Engineering |
              Crimping & Cabling
            </p>

            <p>$ ping future.career</p>
            <p className="text-zinc-300">Reply from success: bytes=32 time&lt;1ms TTL=128</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            I am passionate about networking infrastructure, troubleshooting,
            and computer engineering. I enjoy building stable connections,
            solving technical issues, and exploring how modern networks operate
            behind the scenes.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-xl shadow-cyan-500/10">
          <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400">Projects</h2>
            <p className="text-zinc-500 mt-2">
              Labs, simulations, and infrastructure experiments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-300 transition-all duration-300">
                  {project.title}
                </h3>

                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <p className="text-zinc-400 leading-relaxed">{project.desc}</p>

              <div className="mt-6 text-cyan-400 text-sm tracking-wide uppercase">
                Network Lab
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 mt-20 py-10 text-center text-zinc-500">
        <p>
          © 2026 Fatir Javariansyah • Network Engineer Portfolio
        </p>
      </footer>
    </div>
  );
}
