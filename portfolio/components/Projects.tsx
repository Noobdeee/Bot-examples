export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool that helps create engaging blog posts, social media content, and marketing copy.",
      tags: ["Python", "FastAPI", "OpenAI", "React"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with real-time data, forecasts, and interactive maps for multiple locations.",
      tags: ["React", "TypeScript", "Weather API", "Charts"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive analytics platform for tracking social media performance across multiple platforms with detailed insights.",
      tags: ["Next.js", "Python", "PostgreSQL", "D3.js"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Portfolio Builder",
      description:
        "No-code portfolio builder that allows users to create stunning portfolio websites with drag-and-drop functionality.",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
