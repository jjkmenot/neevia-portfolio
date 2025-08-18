import React from 'react';
import { Code, Globe, Brain, Settings, Palette, Monitor, Users } from 'lucide-react';
import { Badge } from './ui/badge';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: data.programming,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-5 w-5" />,
      skills: data.web,
      color: "bg-green-500/10 text-green-400 border-green-500/30"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      skills: data.ai_ml,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="h-5 w-5" />,
      skills: data.tools,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/30"
    },
    {
      title: "Design & Creative",
      icon: <Palette className="h-5 w-5" />,
      skills: data.adobe,
      color: "bg-pink-500/10 text-pink-400 border-pink-500/30"
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="h-5 w-5" />,
      skills: data.os,
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: data.soft_skills,
      color: "bg-teal-500/10 text-teal-400 border-teal-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies across 
            various domains in computer science and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg border ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-900/50 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white transition-all duration-200 text-sm py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-gray-800/50 to-purple-500/10 p-8 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set through hands-on projects, research work, 
              and staying up-to-date with the latest technologies in AI, web development, 
              and cybersecurity. Currently exploring advanced topics in quantum computing 
              and machine learning applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;