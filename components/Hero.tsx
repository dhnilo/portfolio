export default function Hero() {
    return (
      <section className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="container text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Drew
          </h1>
          <h2 className="text-2xl text-gray-300 mb-8">
            Infrastructure Engineer & Developer
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Automating infrastructure, building solutions, and bridging the gap between 
            traditional IT and modern development practices. Currently specializing in 
            Ansible, AWX, and cloud automation.
          </p>
          <div className="space-x-4">
            <a 
              href="#projects" 
              className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    )
  }