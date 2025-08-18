import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Neevia
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-light">
                {data.title}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                {data.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.phone}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6">
              <a 
                href={data.github}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href={data.linkedin}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${data.email}`}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:flex lg:justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-500/10 to-purple-700/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">NV</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-purple-400 font-medium">GPA</p>
                      <p className="text-2xl font-bold text-white">{data.gpa}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-purple-400 font-medium">Graduation</p>
                      <p className="text-sm text-gray-300">{data.expectedGraduation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;