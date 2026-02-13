export default function Contact() {
    return (
      <section id="contact" className="section bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in discussing automation opportunities, 
                  infrastructure challenges, or potential collaborations. Whether you're 
                  looking for engineering expertise or want to chat about the latest 
                  in DevOps and AI integration.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-accent">📧</span>
                    <span>Available via contact form</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-accent">💼</span>
                    <span>Open to interesting opportunities</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-accent">🤝</span>
                    <span>Happy to discuss automation projects</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h4 className="text-xl font-semibold mb-6">Send a Message</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none">
                      <option>General Inquiry</option>
                      <option>Job Opportunity</option>
                      <option>Automation Project</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-2 bg-primary border border-gray-600 rounded-lg focus:border-accent focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }