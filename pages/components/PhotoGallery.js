import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/52839259e_359827018_6326065580764162_8971500634401969788_n1.jpg", caption: "Interactive Computer-Based Learning" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/86c60c533_359831295_6326064954097558_3781339824714225820_n.jpg", caption: "Happy Students Achieving Their Goals" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/258062a0b_359832615_6326065440764176_8362787755560647430_n.jpg", caption: "Engaged Learning Environment" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0c6f904c7_373661107_768620358604727_6312641288315688797_n.jpg", caption: "Modern Computer Lab Facilities" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26364f177_411185775_837101055089988_2468507939361959661_n1.jpg", caption: "Professional Presentation Rooms" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c69a63d92_419704187_858996596233769_120801313991407906_n.jpg", caption: "Focused Learning Sessions" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/49579e9fc_Medien2.jpg", caption: "Traditional Classroom Setup" },
  { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a113a13f6_Medien8.jpg", caption: "Celebrating Success Together" }
];

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="bg-gray-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-teal-400 tracking-wider uppercase">Our Learning Environment</h2>
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            See Our Students in Action
          </p>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Take a look inside our classrooms and see the engaging, supportive environment where students achieve their German language goals.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-xl font-semibold text-center">
                {images[currentImage].caption}
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-12 w-12"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-12 w-12"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-10 w-10"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-teal-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="hidden lg:flex justify-center mt-12 space-x-4">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImage
                  ? 'ring-2 ring-teal-400 scale-110'
                  : 'opacity-60 hover:opacity-80'
              }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
