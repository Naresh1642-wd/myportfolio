import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          {/* Profile Picture Circle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/40 overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Naresh Kumar" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Full Stack 
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Crafting digital experiences with cutting-edge technology and innovative design. 
              Transforming ideas into reality through code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8">
            {[
              { icon: Github, href: 'https://github.com/Naresh1642-wd', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nareshkumar-s/', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
