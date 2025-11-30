import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import Section from './ui/Section';
import { Code, Layout, Server, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { title, description, skills, experience_highlights } = PORTFOLIO_DATA.sections.about;

  return (
    <Section id="about" className="bg-black/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-12 h-1 bg-neonPurple rounded-full block"></span>
            {title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {description}
          </p>
          
          <div className="space-y-4">
            {experience_highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neonPurple/50 transition-colors">
                <div className="bg-neonPurple/20 p-2 rounded-lg text-neonPurple mt-1">
                  <Zap size={20} />
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Decorative background grid/dots could go here */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-neonBlue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-bold mb-6 text-white">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neonBlue/50 hover:text-neonBlue transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <Code className="mx-auto mb-2 text-neonBlue" size={24} />
                  <span className="text-sm text-gray-400">Clean Code</span>
               </div>
               <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <Layout className="mx-auto mb-2 text-neonPurple" size={24} />
                  <span className="text-sm text-gray-400">Responsive UI</span>
               </div>
               <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                  <Server className="mx-auto mb-2 text-neonGreen" size={24} />
                  <span className="text-sm text-gray-400">Scalable Backend</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;