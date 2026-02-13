export default function Skills() {
    const skillCategories = [
      {
        title: "Infrastructure & Automation",
        icon: "⚙️",
        skills: [
          { name: "Ansible/AWX", level: 85 },
          { name: "Active Directory", level: 90 },
          { name: "Linux Systems", level: 75 },
          { name: "Network Configuration", level: 80 }
        ]
      },
      {
        title: "Development",
        icon: "💻",
        skills: [
          { name: "JavaScript/TypeScript", level: 80 },
          { name: "React/Next.js", level: 75 },
          { name: "Node.js", level: 70 },
          { name: "Git/Version Control", level: 85 }
        ]
      },
      {
        title: "Emerging Tech",
        icon: "🚀",
        skills: [
          { name: "AI Integration", level: 60 },
          { name: "API Development", level: 70 },
          { name: "Cloud Platforms", level: 55 },
          { name: "DevOps Practices", level: 65 }
        ]
      }
    ]
  
    return (
      <section id="skills" className="section bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="card">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-2 block">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }