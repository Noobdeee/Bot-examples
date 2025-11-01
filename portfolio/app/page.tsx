"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex gap-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              JD
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 animate-slide-up-delay">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up-delay-2">
            Crafting beautiful, functional, and user-centric digital experiences
            with modern technologies and best practices.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up-delay-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
            About Me
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Hello! I&apos;m a passionate full stack developer with a love for creating
              elegant solutions to complex problems. With years of experience in
              web development, I specialize in building responsive, accessible, and
              performant applications.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how things work,
              which evolved into a career dedicated to continuous learning and
              innovation. I thrive in collaborative environments and enjoy
              mentoring others in the development community.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              technical writing and speaking at local meetups.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
              },
              {
                category: "DevOps",
                skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
              },
              {
                category: "Mobile",
                skills: ["React Native", "Flutter", "iOS", "Android"],
              },
              {
                category: "Tools",
                skills: ["VS Code", "Figma", "Postman", "Jira", "Slack"],
              },
              {
                category: "Soft Skills",
                skills: ["Leadership", "Communication", "Problem Solving", "Agile", "Mentoring"],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-slate-600 dark:text-slate-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.",
                tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative project management tool with real-time updates, team chat, and advanced filtering capabilities.",
                tech: ["React", "Firebase", "Tailwind CSS"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "AI Content Generator",
                description:
                  "Machine learning powered content creation tool that helps writers generate ideas and improve their writing.",
                tech: ["Python", "FastAPI", "OpenAI", "React"],
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Social Media Dashboard",
                description:
                  "Analytics dashboard for managing multiple social media accounts with scheduling and performance tracking.",
                tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Fitness Tracking App",
                description:
                  "Mobile app for tracking workouts, nutrition, and progress with personalized recommendations and goals.",
                tech: ["React Native", "Node.js", "MySQL"],
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                title: "Real Estate Platform",
                description:
                  "Property listing and management system with virtual tours, mortgage calculator, and agent matching.",
                tech: ["Next.js", "PostgreSQL", "AWS", "Mapbox"],
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl font-bold`}>
                  {index + 1}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-800 dark:text-slate-100">
            Let&apos;s Connect
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="mailto:hello@johndoe.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              hello@johndoe.com
            </a>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: "GitHub", url: "https://github.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Medium", url: "https://medium.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 John Doe. All rights reserved.</p>
          <p className="text-sm text-slate-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
