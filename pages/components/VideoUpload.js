import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Video } from 'lucide-react';
import { UploadFile } from '@/integrations/Core';

export default function VideoUpload({ onVideoUploaded, initialVideoUrl }) {
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);

  useEffect(() => {
    setVideoUrl(initialVideoUrl);
  }, [initialVideoUrl]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await UploadFile({ file });
      setVideoUrl(result.file_url);
      if (onVideoUploaded) {
        onVideoUploaded(result.file_url);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      setUploading(false);
    }
  };

  if (videoUrl) {
    return (
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
        <video
          controls
          className="w-full h-full object-contain"
          src={videoUrl}
          key={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer group shadow-lg border-2 border-dashed border-gray-300 hover:border-teal-400 transition-colors">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
        className="absolute inset-0 opacity-0 cursor-pointer"
        disabled={uploading}
      />
      
      <div className="text-center">
        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mb-4"></div>
            <p className="text-gray-600 font-medium">Uploading video...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
              <Video className="w-8 h-8 text-teal-600" />
            </div>
            <p className="text-gray-700 font-medium mb-2">Upload Your Video</p>
            <p className="text-sm text-gray-500">Click to select video file</p>
          </div>
        )}
      </div>
    </div>
  );
}
