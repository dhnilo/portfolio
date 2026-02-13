export default function About() {
    return (
      <section id="about" className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                From Problem-Solver to Solution-Builder
              </h3>
              <p className="text-gray-300 mb-6">
                With several years in IT operations, I've seen firsthand the pain points 
                that slow teams down. Instead of accepting "that's just how it works," 
                I build solutions that eliminate repetitive tasks and streamline workflows.
              </p>
              <p className="text-gray-300 mb-6">
                My expertise spans infrastructure automation, Active Directory integration, 
                and modern development practices. I believe the best IT professionals are 
                the ones who code themselves out of tedious work.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Infrastructure Automation with Ansible & AWX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Active Directory & Network Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>JavaScript/TypeScript Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Linux Systems & Command Line</span>
                </div>
              </div>
            </div>
            <div className="card">
              <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
              <ul className="space-y-3 text-gray-300">
                <li>🎯 Completing Linux Essentials certification</li>
                <li>🔧 Building automation solutions that scale</li>
                <li>🚀 Exploring AI integration for IT workflows</li>
                <li>💡 Developing side projects that solve real problems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }