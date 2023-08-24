import React, { useState, useEffect } from "react";
import ExpandedImageView from "./ExpandedImage";

interface InstagramCardProps {
  imageUrl: string;
  likes: number;
  date: string;
  id: number;
}

const InstagramCard: React.FC<InstagramCardProps> = ({
  imageUrl,
  likes,
  id,
  date,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isOpened, setIsOpened] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Verifica si la tarjeta tiene un "Me gusta" guardado en el Local Storage
    const liked = localStorage.getItem(`liked_${id}`);
    if (liked === "true") {
      setIsLiked(true);
    }
  }, [id]);

  const onClickExpanded = () => {
    setIsExpanded(false);
    setIsOpened(!isOpened);
  };

  const handleLikeClick = () => {
    // Cambia el estado de "Me gusta" localmente
    setIsLiked(!isLiked);

    // Guarda el estado de "Me gusta" en el Local Storage
    localStorage.setItem(`liked_${id}`, isLiked ? "false" : "true");
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="image-container">
        {/* Si está expandida, muestra la imagen a tamaño completo */}
        {isOpened ? (
          <ExpandedImageView imageUrl={imageUrl} onClose={onClickExpanded} />
        ) : (
          <img
            className="image"
            src={imageUrl}
            alt="Instagram"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={onClickExpanded}
          />
        )}
      </div>{" "}
      <div>id: {id}</div>
      <div>Date: {date}</div>
      <button className="like-button" onClick={handleLikeClick}>
        {isLiked ? "❤️" : "🤍"}
      </button>
      {/* Botón para expandir o contraer la imagen */}
      {/* <button className="expand-button" onClick={toggleExpanded}>
        {isExpanded ? "Contraer" : "Expandir"}
      </button> */}
      <style jsx>{`
        /* Estilos CSS para la tarjeta */
        .card {
          width: 220px; /* Ancho fijo de la tarjeta */
          border: 1px solid #ccc;
          margin: 10px;
          padding: 10px;
          text-align: center;
          transition: width 0.3s ease-in-out; /* Transición suave del ancho */
        }

        /* Estilos CSS para la tarjeta expandida */
        .card.expanded {
          width: 250px; /* Ancho cuando está expandida */
        }

        .image-container {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
          overflow: hidden;
        }

        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .like-button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          margin-top: 10px;
        }

        .expand-button {
          background-color: transparent;
          border: none;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default InstagramCard;
