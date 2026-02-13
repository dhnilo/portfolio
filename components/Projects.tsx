export default function Projects() {
    const projects = [
      {
        title: "Enterprise AD Group Automation Platform",
        description: "Designed and implemented a comprehensive Ansible-based automation platform for Active Directory group provisioning and network drive access management. Migrated from standalone Ansible to enterprise AWX24 deployment.",
        tech: ["Ansible", "AWX24", "Active Directory", "PowerShell", "YAML"],
        highlights: [
          "Eliminated manual AD group provisioning across 500+ users",
          "Reduced ticket resolution time from 2 hours to 5 minutes",
          "Successfully migrated to AWX24 under tight deadline constraints",
          "Built role-based access control for different organizational units"
        ],
        status: "Production",
        type: "Infrastructure"
      },
      {
        title: "Personal Portfolio Website",
        description: "Modern, responsive portfolio built with Next.js and TypeScript, featuring dynamic project showcases and skill progression tracking.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        highlights: [
          "Static site generation for optimal performance",
          "Responsive design across all devices",
          "Modular component architecture",
          "Optimized for search engines"
        ],
        status: "In Development",
        type: "Web Development"
      },
      {
        title: "IT Workflow Automation Suite",
        description: "Collection of scripts and tools designed to streamline common IT operations and reduce manual intervention in routine tasks.",
        tech: ["Python", "Bash", "PowerShell", "REST APIs"],
        highlights: [
          "Automated user onboarding workflows",
          "System health monitoring and alerting",
          "Integration with existing ticketing systems",
          "Modular design for easy extension"
        ],
        status: "Planning",
        type: "Automation"
      }
    ]
  
    const getStatusColor = (status: string) => {
      switch(status) {
        case 'Production': return 'text-green-400 bg-green-400/20'
        case 'In Development': return 'text-blue-400 bg-blue-400/20'
        case 'Planning': return 'text-yellow-400 bg-yellow-400/20'
        default: return 'text-gray-400 bg-gray-400/20'
      }
    }
  
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="card">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.type}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary text-sm rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }