export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YourBrand
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Build Something
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Amazing{" "}
              </span>
              Today
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              Transform your ideas into reality with our powerful platform. 
              Simple, elegant, and built for modern creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to succeed, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Experience blazing fast performance with our optimized infrastructure. 
                Your users will love the speed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Secure by Default
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade security built in from day one. 
                Your data is protected with industry-leading encryption.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Beautiful Design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Stunning interfaces that users love. Every pixel is crafted 
                with care for the perfect experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built for the Future
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We believe in creating tools that empower people to do their best work. 
                Our platform is designed with simplicity and power in mind.
              </p>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join thousands of creators, developers, and businesses who trust us 
                to bring their vision to life.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">10K+</div>
                  <div className="text-slate-600">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="text-slate-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Join our community and start building amazing things today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full border-2 border-slate-200 focus:border-blue-600 focus:outline-none text-lg w-full sm:w-96"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Get Started
            </button>
          </div>
          <p className="text-slate-500">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                YourBrand
              </div>
              <p className="text-slate-400">
                Building the future, one line of code at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
