import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
   {
  "title": "Full Stack Developer Intern",
  "company": "Saarc Masts Tech",
  "location": "India",
  "period": "Aug 2025 - Present",
  "type": "Internship",
  "description": "Working on AI-driven full-stack applications by contributing to both frontend and backend development. Collaborating with senior engineers on scalable architectures, authentication workflows, and cloud deployments.",
  "technologies": ["Angular", "Node.js", "Hapi.js", "PostgreSQL","DrizzleORM", "Docker","AWS"],
  "link": "https://saarcmaststech.com"
}

  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Professional journey building innovative solutions and leading teams
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col space-y-4 sm:space-y-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-purple-400 mb-2">
  <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
  <a 
    href={exp.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center font-semibold text-sm sm:text-base hover:text-cyan-400 transition-colors"
  >
    {exp.company}
    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
</div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm sm:text-base">
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 w-fit text-xs sm:text-sm">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                     
                      {/* Technologies */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 transition-colors duration-300 text-xs sm:text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;