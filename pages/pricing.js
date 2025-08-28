import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lock, ArrowRight, CheckCircle, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseBooking from '../components/CourseBooking';
import ServiceBooking from '../components/ServiceBooking';
import ConsultationBooking from '../components/ConsultationBooking';

const correctPassword = "HelloDeutsch123!";

const pricingData = [
  {
    step: 1,
    title: "2 Months German Course",
    duration: "2 months",
    location: "India (live online, 15 students per class)",
    description: "Prepare & pass TELC German exam – mandatory for employment in Germany",
    price: "€650",
    notes: "Includes tuition, materials & exam prep",
    bookingType: "course"
  },
  {
    step: "Alternative",
    title: "Listen-only Online Access",
    price: "€300",
    description: "A flexible option with no homework submissions or direct Q&A support.",
    bookingType: "course"
  },
  {
    step: 2,
    title: "“Fit4Germany” Professional Integration Training",
    duration: "4 weeks",
    location: "India (live online, 15 students per class)",
    description: "Covers German hospital protocols, workplace etiquette, medical terminology, and cultural orientation. Includes internal certification by Auxilla.",
    price: "€2,000",
    notes: "Includes training, materials & assessments",
    bookingType: "integration"
  },
  {
    step: "Service",
    title: "Visa Documentation Preparation",
    description: "We help you prepare and organize your visa documents, ensuring that everything needed for your application is correctly filled out. Our service includes guidance on required documents and assistance with completing the forms.\n\nWhile we cannot guarantee a successful application, we have worked on hundreds of visa applications with a 98% success rate. Get professional support to make your visa process smoother and stress-free!",
    price: "€75",
    bookingType: "service"
  },
  {
    step: "Service",
    title: "German Integration Course",
    description: "Want to be fully prepared for life in Germany? From understanding Steuernummer (tax ID) to knowing the difference between Kaltmiete and Warmmiete, and even important facts like why almost everything is closed on Sundays—we've got you covered!\n\n✅ Live Online Sessions: Interactive and practical learning\n✅ Flexible Booking: Choose a time that fits your schedule\n✅ Recap Provided: Summary of key points after each session\n\nWe don't just teach and leave you on your own—we support you every step of the way.",
    price: "€40",
    bookingType: "service"
  },
  {
    step: "Service",
    title: "Free 15-Minute Consultation Call",
    description: "Not sure which course or support you need? Book a free 15-minute consultation to discuss your goals, ask questions, and get guidance on what suits you best. Absolutely free, no pressure.\n\n✅ Duration: 15 minutes\n✅ Format: Online video call\n✅ Purpose: Quick Q&A to help you choose the right service",
    price: "Free",
    bookingType: "consultation"
  }
];

const PricingStep = ({ data }) => {
  const [showBooking, setShowBooking] = useState(false);
  
  const renderBookingComponent = () => {
    switch (data.bookingType) {
      case 'course':
        return <CourseBooking service={data} onClose={() => setShowBooking(false)} />;
      case 'integration':
        return <ServiceBooking service={data} type="integration" onClose={() => setShowBooking(false)} />;
      case 'service':
        return <ServiceBooking service={data} type="service" onClose={() => setShowBooking(false)} />;
      case 'consultation':
        return <ConsultationBooking service={data} onClose={() => setShowBooking(false)} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardDescription>Step {data.step}</CardDescription>
            <CardTitle className="mt-1">{data.title}</CardTitle>
          </div>
          <div className="text-2xl font-bold text-teal-600 text-right">{data.price}</div>
        </div>
      </CardHeader>
      <CardContent>
        {data.duration && data.location && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-4">
            <span><strong>Duration:</strong> {data.duration}</span>
            <span><strong>Location:</strong> {data.location}</span>
          </div>
        )}
        <p className="text-gray-700 mb-4 whitespace-pre-line">{data.description}</p>
        {data.notes && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Info className="w-4 h-4" />
            <span>{data.notes}</span>
          </div>
        )}
        {data.bookingType && (
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => setShowBooking(true)}
          >
            Book Now
          </Button>
        )}
        
        {showBooking && (
          <div className="mt-6 p-4 border-t border-gray-200">
            {renderBookingComponent()}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const PricingPageContent = () => (
  <div className="bg-gray-50/70">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Our Program Pricing
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A clear, step-by-step investment plan for your journey to becoming a licensed nurse in Germany.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {pricingData.map((item, index) => (
          <PricingStep key={index} data={item} />
        ))}
      </div>
    </div>
  </div>
);

const PasswordProtection = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError(false);
      onAuthenticated(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Access Restricted</h2>
            <p className="text-gray-600 mt-2">Please enter the password to view this page.</p>
          </div>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={error ? 'border-red-500' : ''}
            />
            {error && <p className="text-red-500 text-sm">Incorrect password. Please try again.</p>}
            <Button type="submit" className="w-full">
              Unlock
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default function PricingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        {isAuthenticated ? (
          <PricingPageContent />
        ) : (
          <PasswordProtection onAuthenticated={setIsAuthenticated} />
        )}
      </main>
      <Footer />
    </div>
  );
}
