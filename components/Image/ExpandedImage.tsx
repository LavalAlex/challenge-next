// ExpandedImageView.tsx

import React from "react";

interface ExpandedImageViewProps {
  imageUrl: string;
  onClose: () => void; // Función para cerrar la vista expandida
}

interface ExpandedImageViewProps {
  imageUrl: string;
  onClose: () => void; // Función para cerrar la vista expandida
}

const ExpandedImageView: React.FC<ExpandedImageViewProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="expanded-image-view">
      <div className="expanded-image-container">
        <img className="expanded-image" src={imageUrl} alt="Instagram" />
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>

      <style jsx>{`
        /* Estilos CSS para la vista expandida */
        .expanded-image-view {
          width: 100%;
          height: 100%;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.9); /* Fondo oscuro */
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999; /* Asegura que esté en la parte superior */
        }

        .expanded-image-container {
          position: relative;
        }

        .expanded-image {
          max-width: 100%; /* Tamaño máximo para la imagen */
          max-height: 90vh; /* Altura máxima */
        }

        .close-button {
          background-color: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
};
export default ExpandedImageView;
