import React from 'react';
import AnimatedStat from './AnimatedStat';

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50/70 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-base font-semibold text-teal-600 tracking-wider uppercase">Our Success</h2>
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Proven Results, Real Transformations
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            With over 50+ students now living in Germany and a 98% TELC exam pass rate, our 2-month intensive training has transformed dreams into reality. From A1 to B2, we've helped students master German quickly and confidently – both online and in our residential campus programs.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          <AnimatedStat target="50+" label="Students in Germany" />
          <AnimatedStat target="98" suffix="%" label="TELC Exam Pass Rate" />
          <AnimatedStat target="100" suffix="+" label="Courses Completed" />
          <AnimatedStat target="1000" suffix="+" label="Hours of Training" />
        </div>
      </div>
    </section>
  );
}
