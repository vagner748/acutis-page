import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999]" onClick={onClose}>
      <div className="w-full max-w-sm p-4">
        <img src="/gifs/popup-video.gif" alt="Clique para assistir" className="w-full h-auto cursor-pointer rounded-lg mx-auto" onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;
