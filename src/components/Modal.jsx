import React from "react";

const Modal = ({ isOpen, onClose, imgSrc }) => {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div className="relative">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imgSrc} alt="Full Size" className="max-h-screen max-w-full" />
      </div>
    </div>
  );
};

export default Modal;
