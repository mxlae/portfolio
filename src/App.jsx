import { HiMenu, HiX } from "react-icons/hi"
import { useState } from 'react'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import profile from './assets/profile.png'
import { TypeAnimation } from 'react-type-animation'
import TopologyImg from './assets/topology/topology.png'
import ongoingImg from './assets/topology/ongoing.jpg'
import pingImg from './assets/topology/ping.png'

export default function Portfolio() {
const [selectedProject, setSelectedProject] = useState(null)
const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
    "TCP/IP",
    "Subnetting",
    "Networking",
    "Computer Technician",
    "Crimping & Cabling",
    "Cisco",
    "Linux",
    "Wireshark",
    "Routing & Switching",
    "VLAN",
  ];

  const certifications = [
  "2025 - 2028 BNSP (Junior Technical Support)",
];

const timeline = [

  {
  year:"Feb - Apr 2026 (3 Month)",
  title:"Computer Technician Training at PPKD Jakarta Pusat",
  desc:"Learning computer hardware and software, performing data backup and recovery, building simple networks, and providing remote support using third-party applications, certified by BNSP.",
  },

{
    year: "Aug - Nov 2025 (3 Month)",
    title: "Team Leader at PT. China Comservice Indonesia",
    desc: "Handled network equipment installation and tower site documentation to support network deployment and maintenance activities.",
  },

{
  year:"Apr 2025",
   title:"BNSP Certification at SMKN 7 Jakarta",
  desc:"Creating network equipment lists, building network topologies, performing LAN cable crimping, and certified by BNSP.",
  },

  {
    year: "Oct 2023 - Mar 2024 (6 Month)",
    title: "Internship at Yayasan Komunitas Open Source",
    desc: "Currently learning data analysis and data mining techniques to gain insights, identify patterns, and improve decision-making through data using KNIME Analytics Platform.",
  },

];

  const projects = [
{
  title: "Office Network Infrastructure",
  desc: "Designed and simulated a stable office network infrastructure using Cisco Packet Tracer, including DHCP configuration, router interconnection, switch management, and internet access distribution for multiple departments.",
  image: TopologyImg,
},
  {
      title: "Linux Networking",
      desc: "Basic Ubuntu Server networking setup including DHCP, SSH, and static IP configuration.",
      image: ongoingImg,
    },
    {
      title: "Network Troubleshooting",
      desc: "Diagnosing packet loss, DNS issues, and switch connectivity problems.",
      image: pingImg
    },
  ];

const particlesInit = async (engine) => {
  await loadSlim(engine)
}

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
        <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: {
      enable: false,
    },

    background: {
      color: {
        value: "#000000",
      },
    },

    fpsLimit: 60,

    particles: {

      color: {
        value: "#22d3ee",
      },

      links: {
        color: "#22d3ee",
        distance: 140,
        enable: true,
        opacity: 0.2,
        width: 1,
      },

      collisions: {
        enable: false,
      },

      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },

      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 45,
      },

      opacity: {
        value: 0.2,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: { min: 1, max: 3 },
      },
    },

    detectRetina: true,
  }}

  className="absolute inset-0 z-0"
/>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a
  href="#top"
  className="text-cyan-400 font-bold text-xl cursor-pointer hover:scale-105 transition-all duration-300"
>
  mxlae<span className="text-white">.git</span>
</a>

          <div className="hidden md:flex gap-6 text-zinc-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#certification" className="hover:text-cyan-400 transition">Certification</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>

        <button
  className="md:hidden text-cyan-400 text-3xl absolute right-6 top-4"
  onClick={() => setMenuOpen(!menuOpen)}
>

  {menuOpen ? <HiX /> : <HiMenu />}

</button>
       
        {menuOpen && (

  <div className="absolute right-2 top-14 md:hidden bg-black/95 border border-cyan-500/20 rounded-2xl px-6 py-6 flex flex-col gap-5 text-zinc-300 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 min-w-[200px] animate-fadeIn">

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      About
    </a>

    <a
      href="#skills"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      Labs
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      Contact
    </a>

  </div>

)}
      </nav>

      {/* Hero */}
     <section
  id="top"
  className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-32"
>

        {/* Profile */}
        <div className="mb-10">
          <img
            src={profile}
            alt="Fatir"
            className="w-52 h-52 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 object-cover"
          />
        </div>

        <div className="border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 rounded-full text-cyan-300 text-sm tracking-widest uppercase mb-6 shadow-lg shadow-cyan-500/10">
          Network Engineer
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Fatir <span className="text-cyan-400">Javariansyah</span>
        </h1>

        {/* Typing Animation */}
        <div className="mt-6">
          <TypeAnimation
            sequence={[
              'IT Support',
              2000,
              'CyberSecurity Enthusiast',
              2000,
              'Linux Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-2xl md:text-3xl font-semibold"
          />
        </div>

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
            href="https://github.com/mxlae"
            className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Computer and Network Engineering graduate with practical experience in building network topologies, troubleshooting connectivity issues, and maintaining computer hardware and software. Enthusiastic about Linux exploration, system administration, and continuously improving skills in networking and IT infrastructure.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl border border-cyan-500/20 bg-zinc-950 hover:scale-105 hover:border-cyan-400 transition-all duration-300 text-center shadow-lg shadow-cyan-500/5"
            >
              <h3 className="text-cyan-300 font-semibold">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </section>

{/*  Certification */}
<section 
id="certification"
className="relative z-10 max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-cyan-400 mb-14 text-center">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {certifications.map((cert, index) => (

      <div className="border border-cyan-500/20 rounded-3xl p-8 bg-black/40 backdrop-blur-sm shadow-lg shadow-cyan-500/10">

  <span className="inline-block text-sm px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
    2025 - 2028
  </span>

  <h3 className="text-2xl font-bold text-cyan-400 mt-6">
    BNSP (Junior Technical Support)
  </h3>

  <p className="text-gray-400 mt-4 text-lg">
    Certified.
  </p>

</div>

    ))}

  </div>

</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">
    Journey Timeline
  </h2>

  <div className="relative border-l border-cyan-500/20">

    {timeline.map((item, index) => (

      <div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="ml-8 mb-16 relative"
      >

        <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

        <span className="text-cyan-400 font-bold text-lg">
          {item.year}
        </span>

        <h3 className="text-2xl font-semibold mt-2">
          {item.title}
        </h3>

        <p className="text-zinc-400 mt-3 leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>

      {/* Projects */}
      <section
  id="projects"
  className="relative z-10 max-w-7xl mx-auto px-6 py-24"
>

  <h2 className="text-4xl font-bold text-cyan-400 mb-14 text-center">
    Network Labs
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {projects.map((project, index) => (

      <div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-cyan-400 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl cursor-pointer"
      >

        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-contain"
        />

        <div className="p-8">

          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            {project.title}
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            {project.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>


      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://github.com/mxlae"
            className="px-6 py-3 rounded-2xl border border-cyan-500/20 hover:bg-cyan-500/10 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:fatir.javariansyah@gmail.com"
            className="px-6 py-3 rounded-2xl border border-cyan-500/20 hover:bg-cyan-500/10 transition"
          >
            Email
          </a>

        </div>
      </section>

{selectedProject && (

  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">

    <div className="bg-zinc-950 border border-cyan-500/20 rounded-3xl max-w-2xl w-full overflow-hidden">

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="h-44 w-full object-contain bg-black"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          {selectedProject.title}
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          {selectedProject.desc}
        </p>

        <button
          onClick={() => setSelectedProject(null)}
          className="mt-8 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300"
        >
          Close
        </button>

      </div>

    </div>

  </div>

)} 

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-10 text-center text-zinc-500">
        <p>
          © 2026 Fatir Javariansyah. All rights reserved.
        </p>
      </footer>

    </div>
  );
}