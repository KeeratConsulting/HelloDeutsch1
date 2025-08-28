import React, { useState, useEffect } from 'react';
import VideoUpload from './VideoUpload';
import { SiteContent } from '@/entities/SiteContent';

export default function TestimonialSection() {
  const [siteContent, setSiteContent] = useState(null);

  const loadContent = async () => {
    try {
      const contentList = await SiteContent.list(null, 1);
      if (contentList.length > 0) {
        setSiteContent(contentList[0]);
      }
    } catch (error) {
      console.error("Failed to load site content:", error);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleVideoUpload = async (url) => {
    try {
      let updatedContent;
      if (siteContent) {
        updatedContent = await SiteContent.update(siteContent.id, { ambassador_video_url: url });
      } else {
        updatedContent = await SiteContent.create({ ambassador_video_url: url });
      }
      setSiteContent(updatedContent);
    } catch (error) {
      console.error("Failed to update/create site content with video URL:", error);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-teal-600 tracking-wider uppercase">Testimonial</h2>
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            A Word from the German Ambassador
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <VideoUpload 
            onVideoUploaded={handleVideoUpload}
            initialVideoUrl={siteContent?.ambassador_video_url}
          />
          
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500 rounded-full opacity-10"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
            
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed italic relative z-10">
              "It is impressive to see students achieve such a good level of German in only two months."
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div>
                <p className="font-bold text-gray-900">Philipp Ackermann</p>
                <p className="text-gray-600">German Ambassador to India</p>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
