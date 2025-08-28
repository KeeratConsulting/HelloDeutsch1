import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserCheck, 
  FileText, 
  GraduationCap, 
  FileCheck, 
  Globe, 
  Home,
  ExternalLink 
} from 'lucide-react';

const ProcessStep = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function HowWeWorkSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How We Work – Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We combine a focused, two-month learning plan with full support for your move to Germany.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProcessStep
            icon={<Users className="w-6 h-6 text-teal-600" />}
            title="Interactive Classes"
            description="Live, engaging lessons designed to make learning German enjoyable and effective."
          />
          <ProcessStep
            icon={<UserCheck className="w-6 h-6 text-teal-600" />}
            title="Native German Teachers"
            description="Learn directly from experienced, native-speaking trainers for authentic language skills."
          />
          <ProcessStep
            icon={<FileText className="w-6 h-6 text-teal-600" />}
            title="Personal Homework Feedback"
            description="Every assignment is checked, so you get personalised guidance to improve quickly."
          />
          <ProcessStep
            icon={<GraduationCap className="w-6 h-6 text-teal-600" />}
            title="Exam Preparation"
            description="Our proven 2-month intensive training method is available in multiple languages to ensure you pass your TELC exam with confidence."
          />
          <ProcessStep
            icon={<FileCheck className="w-6 h-6 text-teal-600" />}
            title="Visa & Documentation Assistance"
            description="Step-by-step support to prepare and submit your German visa application."
          />
          <ProcessStep
            icon={<Globe className="w-6 h-6 text-teal-600" />}
            title="German Integration Courses"
            description="Learn not just the language, but also German culture and workplace etiquette."
          />
          <div className="md:col-span-2 lg:col-span-1 mx-auto">
            <ProcessStep
              icon={<Home className="w-6 h-6 text-teal-600" />}
              title="Accommodation Support in Germany"
              description="Help in finding housing so you can settle in quickly and focus on your new life."
            />
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a 
              href__="https://forms.gle/qLAHHz6FLJpAU7c26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Reserve Your Spot
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
