import projects from "../Data/projects";

function Projects() {
  return (
    <section className="py-24 bg-slate-100" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-sm font-medium text-gray-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
