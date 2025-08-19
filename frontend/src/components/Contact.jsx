import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      color: "text-purple-400"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      color: "text-green-400"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: data.location,
      href: "#",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: data.github,
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: data.linkedin,
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: `mailto:${data.email}`,
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology and research. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're interested in my research work, want to collaborate on a project, 
                or discuss opportunities in AI and software development, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className={`p-2 rounded-lg bg-gray-700 ${info.color}`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                    <a 
                      href={info.href}
                      className={`text-white hover:${info.color.replace('text-', 'text-')} transition-colors`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:-translate-y-1`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-700/5 border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      I typically respond to messages within 24 hours. For urgent inquiries, 
                      feel free to reach me via phone or LinkedIn.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;