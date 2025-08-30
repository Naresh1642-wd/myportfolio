import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MERN Blog Platform",
      description: "A full-stack blogging platform with user authentication, CRUD posts, and comments.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop&auto=format",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 122,
      featured: true,
      comingSoon: true
    },
    {
      title: "AI Chatbot Assistant",
      description: "Conversational AI chatbot with NLP integration for customer support.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "Flask", "React", "OpenAI API"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 210,
      featured: true,
      comingSoon: true // mark this as coming soon
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with Next.js, TailwindCSS, and Framer Motion.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 89,
      featured: false,
      comingSoon: true
    },
    {
      
      title: "E-commerce App",
      description: "Shopping app with cart, payment integration, and admin dashboard.",
image: "https://media.assettype.com/outlookbusiness/2024-11-12/qayaup62/ecommerce.png?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
      technologies: ["React", "Stripe", "Spring Boot", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 178,
      featured: false,
      comingSoon: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  {project.comingSoon && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/50 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Coming Soon
                    </Badge>
                  )}
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs">{project.stars}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/30 text-cyan-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.comingSoon ? (
                    <Button variant="outline" size="sm" disabled className="border-gray-500/30 text-gray-400 cursor-not-allowed">
                      Coming Soon
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center">
                  {project.comingSoon && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/50 text-xs flex items-center gap-1 mr-2">
                      <Clock className="w-3 h-3" /> Coming Soon
                    </Badge>
                  )}
                  <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-xs">{project.stars}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs bg-cyan-500/10 border-cyan-400/30 text-cyan-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs text-gray-400">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  {project.comingSoon ? (
                    <Button variant="outline" size="sm" disabled className="border-gray-500/30 text-gray-400 cursor-not-allowed w-full">
                      Coming Soon
                    </Button>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:bg-cyan-400/10 p-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:bg-cyan-400/10 p-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
