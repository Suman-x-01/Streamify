import React from "react";
import "./Modal.css";

const Modal = ({ videoLink, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <iframe
          width="100%"
          height="400px"
          src={videoLink}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Modal;
