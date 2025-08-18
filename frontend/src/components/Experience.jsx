import React from 'react';
import { Calendar, MapPin, Building, Users } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = ({ data }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'research':
        return <Building className="h-5 w-5 text-purple-400" />;
      case 'technical':
        return <Users className="h-5 w-5 text-blue-400" />;
      default:
        return <Building className="h-5 w-5 text-gray-400" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'research':
        return 'border-purple-500/50 bg-purple-500/10';
      case 'technical':
        return 'border-blue-500/50 bg-blue-500/10';
      default:
        return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Balancing cutting-edge research with practical application through various roles and responsibilities.
          </p>
        </div>

        <div className="space-y-8">
          {data.map((experience, index) => (
            <div 
              key={experience.id}
              className={`p-8 rounded-lg border ${getTypeColor(experience.type)} hover:border-opacity-80 transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    {getTypeIcon(experience.type)}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li 
                          key={highlightIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;