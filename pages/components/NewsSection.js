import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

export default function NewsSection() {
  return (
    <section className="bg-teal-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Latest News and Resources
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-teal-600" />
            <Users className="w-8 h-8 text-teal-600" />
            <Globe className="w-8 h-8 text-teal-600" />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Exciting news! Our blog is on the way – packed with student stories, German learning tips, and relocation advice.
          </p>
        </div>
      </div>
    </section>
  );
}
