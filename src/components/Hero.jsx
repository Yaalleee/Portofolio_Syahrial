import { useState, useEffect } from "react";
import { motion } from "framer-motion";


function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const fullText = "Frontend Developer yang fokus membangun website modern, cepat, dan responsif menggunakan React.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
  id="home"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="mb-6">
              <p className="text-blue-400 text-lg font-semibold mb-2">Welcome to my portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Halo, Saya{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Syahrial Hardi Akbar
                </span>
              </h1>
              
              <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                  I'm a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Frontend Developer
                  </span>
                </h2>
              </div>
            </div>

            {/* Typing Animation */}
            <div className="min-h-20 mb-8">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {displayedText}
                {!isDone && (
    <span className="inline-block w-2 h-6 md:h-8 bg-cyan-400 ml-1 animate-pulse"></span>
  )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Project
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Tentang Saya
              </button>
            </div>

            {/* Social Links / Stats */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 md:gap-8 text-center md:text-left">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">5+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">2+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for Profile Image */}
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <svg
                      className="w-48 h-48 md:w-64 md:h-64 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-500 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-cyan-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
