import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, ExternalLink } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-teal-500 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Join our Waiting List Today!
          </h2>
          <p className="text-lg lg:text-xl text-teal-100 leading-relaxed max-w-4xl mx-auto">
            Be the first to secure your spot in our 2-month intensive German courses – available online and at our residential campus. Learn from qualified German trainers, prepare for A1, A2, B1, B2, or C1 TELC exams, and get ready for your future in Germany.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Students</h3>
            <p className="text-teal-100 mb-6 leading-relaxed flex-grow">
              Ready to start your German learning journey? Join our classes and achieve your language goals with our proven teaching methods.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 mt-auto"
            >
              <a 
                href__="https://forms.gle/qLAHHz6FLJpAU7c26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Join Our Classes
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Instructors</h3>
            <p className="text-teal-100 mb-6 leading-relaxed flex-grow">
              Are you a qualified German trainer? Join our team and help students achieve their dreams of living and working in Germany.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 mt-auto"
            >
              <a 
                href__="https://forms.gle/LWLUbBPTktgcfkZi6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Join Our Team
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-teal-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-200 rounded-full"></span>
              <span>Online & Residential Options</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-200 rounded-full"></span>
              <span>All TELC Levels (A1-C1)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-200 rounded-full"></span>
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-200 rounded-full"></span>
              <span>Qualified German Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
