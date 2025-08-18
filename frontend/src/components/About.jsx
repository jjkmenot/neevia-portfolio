import React from 'react';
import { Code, Brain, Users, Award } from 'lucide-react';

const About = ({ data }) => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Research",
      description: "Specialized in post-quantum cryptography and IoT security research"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and databases"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Technical Leadership",
      description: "Leading teams and mentoring 60+ STEM students in technical communication"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Dean's List and President's List with 3.90 GPA"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Computer Science student at the University of North Texas, 
            balancing cutting-edge AI research with practical full-stack development. 
            My work spans from securing IoT infrastructure with post-quantum cryptography 
            to building user-friendly web applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Currently pursuing my Bachelor's in Computer Science at UNT, I've found my passion 
                in the intersection of theoretical research and practical application. My research 
                work focuses on enhancing IoT security through advanced cryptographic methods.
              </p>
              <p>
                Beyond research, I enjoy building full-stack applications that make a difference. 
                From healthcare management systems to roommate coordination apps, I believe 
                technology should solve real problems and improve people's lives.
              </p>
              <p>
                As a Technical Communication Lab Assistant, I help bridge the gap between complex 
                technical concepts and clear communication, working with students and faculty to 
                improve their technical writing and presentation skills.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-700/10 p-8 rounded-lg border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Current Focus</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Researching post-quantum cryptography for IoT security</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developing full-stack web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentoring STEM students in technical communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Exploring machine learning and AI applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;