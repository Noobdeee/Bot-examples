export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions
              to complex problems. With expertise in modern web technologies, I
              specialize in building responsive, performant, and user-friendly
              applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development has equipped me with a diverse
              skill set and a keen eye for detail. I'm constantly learning and
              adapting to new technologies to stay at the forefront of the industry.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Your City, Country</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Experience</p>
                    <p className="text-white font-medium">X+ Years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Education</p>
                    <p className="text-white font-medium">Your Degree</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Interests</p>
                    <p className="text-white font-medium">Web Dev, AI, Open Source</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
