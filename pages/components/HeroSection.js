import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Users, Calendar, BarChart, Clock, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const KeyBenefit = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    {icon}
    <span className="text-teal-100 font-medium">{text}</span>
  </div>
);

const FloatingBubble = ({ icon, iconBg, title, subtitle, className, delay = 0 }) => (
  <Card 
    className={`absolute p-3 bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl max-w-[200px] animate-pulse ${className}`}
    style={{ animationDelay: `${delay}ms`, animationDuration: '3s' }}
  >
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-xs leading-tight">{title}</p>
        {subtitle && <p className="text-gray-600 text-xs mt-1">{subtitle}</p>}
      </div>
    </div>
  </Card>
);

export default function HeroSection() {
  return (
    <section className="bg-teal-500 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32 relative">
        
        <FloatingBubble
          icon={<Calendar className="w-4 h-4 text-blue-600" />}
          iconBg="bg-blue-100"
          title="Limited Seats"
          subtitle="Apply Today"
          className="top-16 left-4 lg:left-20 hidden md:block"
          delay={500}
        />

        <FloatingBubble
          icon={<Award className="w-4 h-4 text-green-600" />}
          iconBg="bg-green-100"
          title="98% Success Rate"
          subtitle="Guaranteed Results"
          className="top-32 right-4 lg:right-20 hidden md:block"
          delay={1000}
        />

        <FloatingBubble
          icon={<Clock className="w-4 h-4 text-orange-600" />}
          iconBg="bg-orange-100"
          title="Next Batch"
          subtitle="Starts Feb 1st"
          className="bottom-32 left-8 lg:left-32 hidden lg:block"
          delay={1500}
        />

        <FloatingBubble
          icon={<BarChart className="w-4 h-4 text-purple-600" />}
          iconBg="bg-purple-100"
          title="B1 Level"
          subtitle="In 8 Weeks"
          className="bottom-40 right-8 lg:right-32 hidden lg:block"
          delay={2000}
        />

        <FloatingBubble
          icon={<Users className="w-4 h-4 text-pink-600" />}
          iconBg="bg-pink-100"
          title="Small Classes"
          subtitle="Max 12 Students"
          className="top-1/2 left-2 lg:left-12 hidden xl:block"
          delay={2500}
        />

        <FloatingBubble
          icon={<Zap className="w-4 h-4 text-yellow-600" />}
          iconBg="bg-yellow-100"
          title="Intensive Training"
          subtitle="4 Hours Daily"
          className="top-1/2 right-2 lg:right-12 hidden xl:block"
          delay={3000}
        />

        <div className="text-center relative z-10">
          <div className="space-y-8 text-white max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Pass <span className="text-orange-400">B1</span> in Just <span className="text-orange-400">2 Months</span>
              <br />
              <span className="font-semibold">– Turbo German Course</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-teal-100 leading-relaxed max-w-2xl mx-auto">
              Pass your TELC exam in just 2 months with our intensive German language training – proven with a 98% pass rate.
            </p>
            
            <Button 
              size="lg"
              className="bg-teal-200 hover:bg-teal-100 text-teal-900 rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector('#waiting-list');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join our waitinglist
            </Button>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <KeyBenefit 
                icon={<CheckCircle className="w-6 h-6 text-green-300" />} 
                text="98% Pass Rate" 
              />
              <KeyBenefit 
                icon={<Zap className="w-6 h-6 text-yellow-300" />} 
                text="Intensive Turbo Course" 
              />
              <KeyBenefit 
                icon={<Users className="w-6 h-6 text-blue-300" />} 
                text="Small, Focused Classes" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,100 C150,50 350,0 720,0 C1090,0 1290,50 1440,100 L1440,100 L0,100 Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
