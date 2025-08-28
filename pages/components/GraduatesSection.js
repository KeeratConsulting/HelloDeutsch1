import React, { useState, useEffect } from 'react';
import VideoUpload from './VideoUpload';
import { SiteContent } from '@/entities/SiteContent';

export default function GraduatesSection() {
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
        updatedContent = await SiteContent.update(siteContent.id, { graduate_video_url: url });
      } else {
        updatedContent = await SiteContent.create({ graduate_video_url: url });
      }
      setSiteContent(updatedContent);
    } catch (error) {
      console.error("Failed to update/create site content with video URL:", error);
    }
  };

  return (
    <section className="bg-gray-50/70 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-teal-600 tracking-wider uppercase">Hear from Our Graduates</h2>
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Real Stories, Real Success
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-last">
             <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500 rounded-full opacity-10"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
            
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed italic relative z-10">
              "I completed my 2-month TELC B1 German course at Auxila Akademie in Chandigarh with native German trainers. Soon after, I passed my interview with University Clinic, received my visa, and moved to Germany to start my new career."
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <div>
                <p className="font-bold text-gray-900">Albi Alex</p>
                <p className="text-gray-600">Hello Deutsch Graduate</p>
              </div>
            </figcaption>
          </div>

          <VideoUpload 
            onVideoUploaded={handleVideoUpload}
            initialVideoUrl={siteContent?.graduate_video_url}
          />
        </div>
      </div>
    </section>
  );
}
