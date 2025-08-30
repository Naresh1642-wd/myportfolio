import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Sri Krishna College of Technology",
      location: "Coimbatore, TN",
      period: "2021 - 2024",
      description: "Specialized in software development, full-stack technologies, and problem-solving with hands-on projects.",
      achievements: ["GPA: 6.7/10"]
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Christ the King Polytechnic College",
      location: "Coimbatore, TN",
      period: "2018 - 2021",
      description: "Built a strong foundation in programming, databases, and computer systems through practical and theoretical learning.",
      achievements: ["Percentage: 77/100"]
    }
    
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            My academic journey through technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

            <div className="space-y-8 sm:space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden sm:block absolute left-4 lg:left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/80 transition-all duration-300" />

                  {/* Content card */}
                  <div className="w-full sm:ml-12 lg:ml-16">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/10">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col space-y-3 sm:space-y-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center text-purple-400 mb-2">
                              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                              <span className="font-semibold text-sm sm:text-base">{edu.institution}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm sm:text-base">
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                                <span>{edu.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                                <span className="text-cyan-400">{edu.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs sm:text-sm text-cyan-300"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;