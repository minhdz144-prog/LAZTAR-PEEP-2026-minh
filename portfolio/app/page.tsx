import Image from "next/image";
import { profileData, skillsData, projectsData } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-slate-200 antialiased font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS (Glow mờ ảo) --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      {/* --- FLOATING NAVBAR (Kính lơ lửng) --- */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-3xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 h-14 flex items-center justify-between shadow-2xl">
          <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-wide">
            Minh.dev
          </span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition hover:-translate-y-0.5 transform duration-200">Giới thiệu</a>
            <a href="#skills" className="hover:text-blue-400 transition hover:-translate-y-0.5 transform duration-200">Kỹ năng</a>
            <a href="#projects" className="hover:text-blue-400 transition hover:-translate-y-0.5 transform duration-200">Dự án</a>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* 1. HERO SECTION */}
        <section id="about" className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 pt-8">
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-wide text-blue-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {profileData.role}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Giang Văn <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Minh.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {profileData.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a href={profileData.peepReportUrl} target="_blank" rel="noreferrer" className="group relative px-6 py-3 rounded-full bg-slate-100 hover:bg-white text-slate-900 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center gap-2">
                Báo cáo PEEP Tuần 1
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2">
                GitHub Profile ↗
              </a>
            </div>
          </div>
          
          {/* Avatar có hiệu ứng nổi */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900">
              <Image 
                src="https://github.com/minhdz144-prog.png" 
                alt="Avatar của Minh" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 224px, 320px"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. SKILLS SECTION */}
        <section id="skills" className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Kỹ năng chuyên môn</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((skill, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                <p className="text-xs text-blue-400 mb-3 font-mono uppercase tracking-widest">{skill.category}</p>
                <p className="text-lg font-semibold text-slate-200 leading-snug">{skill.name}</p>
                <p className="text-sm text-slate-500 mt-2 font-medium">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Dự án nổi bật</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <a href={project.link} target="_blank" rel="noreferrer" key={project.id} className="block h-full">
                <div className="h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all">{project.title}</h3>
                    <p className="text-slate-400 mt-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((t, idx) => (
                         <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section id="contact" className="relative py-20 px-6 rounded-3xl border border-white/10 overflow-hidden text-center flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-emerald-900/10 z-0"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Sẵn sàng kết nối</h2>
            <p className="text-slate-400 text-base max-w-md mx-auto">
              Mình luôn cởi mở với các cơ hội nghề nghiệp mới và các dự án thú vị. Hãy gửi email cho mình nhé!
            </p>
            <a href={`mailto:${profileData.email}`} className="inline-flex items-center gap-2 mt-4 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105">
              ✉ {profileData.email}
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm font-medium text-slate-600 border-t border-white/5">
        Được thiết kế & lập trình bởi {profileData.name} © 2026
      </footer>
    </main>
  );
}