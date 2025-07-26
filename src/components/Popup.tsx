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
      <div className="max-w-md">
        <img src="/gifs/popup-video.gif" alt="Clique para assistir" className="w-[90%] h-auto cursor-pointer rounded-lg" onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;
