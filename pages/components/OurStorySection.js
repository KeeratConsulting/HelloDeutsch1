import React from 'react';

export default function OurStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-teal-600 tracking-wider uppercase">Our Story</h2>
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            From 30 Nurses to Hundreds of Success Stories
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-center">
            <p>
              We began our journey in <span className="font-semibold text-gray-800">2021 in Vijayawada</span>, training 30 nurses to reach B1 level in just 2 months, proving that intensive German learning could deliver real results.
            </p>
            <p>
              Later, in <span className="font-semibold text-gray-800">Chandigarh</span>, we achieved a remarkable <span className="font-semibold text-teal-600">98% pass rate</span> with our unique, results-driven teaching model.
            </p>
            <p>
              <span className="font-semibold text-gray-800">Today</span>, we welcome anyone to join our programs – either fully online or at our residential campus, where you can focus entirely on your German learning.
            </p>
          </div>

          <div className="mt-16 bg-teal-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete German Learning Solution</h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                With qualified German trainers, we prepare students for <span className="font-semibold text-teal-600">A1, A2, B1, B2, and C1 levels</span>, and also provide comprehensive relocation support – from visa guidance to document preparation – to help you move to Germany with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
