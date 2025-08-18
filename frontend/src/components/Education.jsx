import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy, Certificate } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Education = ({ education, certifications }) => {
  const getCertificationType = (type) => {
    switch (type) {
      case 'cloud':
        return { color: 'bg-blue-500/10 text-blue-400 border-blue-500/30', icon: '☁️' };
      case 'analytics':
        return { color: 'bg-green-500/10 text-green-400 border-green-500/30', icon: '📊' };
      case 'ai':
        return { color: 'bg-purple-500/10 text-purple-400 border-purple-500/30', icon: '🤖' };
      default:
        return { color: 'bg-gray-500/10 text-gray-400 border-gray-500/30', icon: '📜' };
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications that form the foundation of my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-white mb-2">
                    {education.degree}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Award className="h-4 w-4" />
                      <span className="font-medium text-purple-400">{education.school}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{education.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-center">
                    <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{education.gpa}</p>
                    <p className="text-sm text-gray-400">GPA</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-white">May 2027</p>
                    <p className="text-sm text-gray-400">Expected Graduation</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Academic Honors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.honors.map((honor, index) => (
                    <Badge 
                      key={index}
                      className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1"
                    >
                      {honor}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Status */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                  <Trophy className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-white mb-2">
                    Current Academic Standing
                  </CardTitle>
                  <p className="text-gray-400">
                    Junior year at University of North Texas
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="text-gray-300">Current GPA</span>
                  <span className="text-xl font-bold text-green-400">{education.gpa}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="text-gray-300">Expected Graduation</span>
                  <span className="font-semibold text-purple-400">May 2027</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="text-gray-300">Academic Standing</span>
                  <span className="font-semibold text-yellow-400">Dean's List</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const certType = getCertificationType(cert.type);
              return (
                <Card 
                  key={cert.id}
                  className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-lg border flex items-center justify-center ${certType.color}`}>
                      <Certificate className="h-8 w-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <Badge 
                      className={`${certType.color} px-3 py-1 text-xs font-medium border`}
                    >
                      {cert.type.toUpperCase()}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;