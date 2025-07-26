
import React from 'react';

interface VslSectionProps {
  autoplay: boolean;
}

const VslSection: React.FC<VslSectionProps> = ({ autoplay }) => {
  const videoId = 'dQw4w9WgXcQ'; // Substitua pelo ID do seu vídeo

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                id="youtube-video"
                className="w-full h-full" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VslSection;
