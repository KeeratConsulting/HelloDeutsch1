import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  { question: "What is the duration of the intensive course?", answer: "Our intensive 'Turbo' course is designed to get you from beginner level to passing your B1 TELC exam in just 2 months." },
  { question: "Do you offer both online and in-person classes?", answer: "Yes! We welcome anyone to join our programs – either fully online from the comfort of your home or at our residential campus for a completely immersive experience." },
  { question: "What is the typical class size?", answer: "We believe in personalized attention. Our classes are kept small, with a maximum of 12 to 30 students, to ensure every student gets the support they need." },
  { question: "Do you provide assistance with the visa process for Germany?", answer: "Absolutely. We provide comprehensive relocation support, which includes step-by-step guidance for preparing and submitting your German visa application." },
  { question: "What makes your course different from others?", answer: "Our course is built on a proven, results-driven model with a 98% pass rate. We combine intensive training with native German teachers, personal feedback, and full integration support to ensure your success both in the exam and in your new life in Germany." },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common inquiries we receive from prospective students.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
