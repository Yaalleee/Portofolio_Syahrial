import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="py-32 px-6 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tentang Saya
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* FOTO */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Foto Profil"
              className="w-60 h-96 object-cover rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Saya adalah seorang Frontend Developer yang tertarik
              membangun website modern, cepat, dan responsif
              menggunakan React dan Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Fokus saya adalah membuat tampilan yang bersih,
              mudah digunakan, dan scalable.
            </p>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-3 rounded-2xl border border-slate-600 hover:from-purple-800 hover:to-blue-500/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Keahlian Saya:</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span>Background IT / Web</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚛️</span>
                  <span>React Developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  <span>UI/UX Enthusiast</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Fast Learner</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
