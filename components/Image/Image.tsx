import React, { useState, useEffect } from "react";
import ExpandedImageView from "./ExpandedImage";

interface InstagramCardProps {
  imageUrl: string;
  date: string;
  id: number;
  seeLike: boolean;
  setDisliked: React.Dispatch<React.SetStateAction<boolean>>;
  nameCamera: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({
  imageUrl,
  id,
  date,
  setDisliked,
  seeLike,
  nameCamera,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isOpened, setIsOpened] = useState(false);
  const [isLiked, setIsLiked] = useState({ id: 0, isLiked: false });

  useEffect(() => {
    // Verifica si la tarjeta tiene un "Me gusta" guardado en el Local Storage
    const liked = localStorage.getItem(`liked_${id}`);
    if (liked === "true") {
      setIsLiked((old) => ({ ...old, id, isLiked: true }));
    } else {
      localStorage.removeItem(`liked_${id}`);
    }
  }, [id, isLiked.isLiked]);

  const onClickExpanded = () => {
    setIsExpanded(false);
    setIsOpened(!isOpened);
  };

  const handleLikeClick = () => {
    // Cambia el estado de "Me gusta" localmente
    localStorage.setItem(`liked_${id}`, isLiked.isLiked ? "false" : "true");
    setIsLiked((old) => ({ ...old, id, isLiked: !old.isLiked }));
    // Guarda el estado de "Me gusta" en el Local Storage

    if (seeLike) {
      setDisliked((old) => !old);
    }
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="image-container">
        {/* Si está expandida, muestra la imagen a tamaño completo */}
        {isOpened ? (
          <ExpandedImageView imageUrl={imageUrl} onClose={onClickExpanded} />
        ) : (
          <>
            <img
              className="image"
              src={imageUrl}
              alt="Instagram"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              onClick={onClickExpanded}
            />{" "}
            <div className="overlay">
              <p>¡Haz clic para agrandar!</p>
            </div>
          </>
        )}
      </div>
      <div className="info">
        <div className="id-and-date">
          <div className="id">{id}</div>
          <div className="date">{date}</div>
        </div>
        <div className="name-camera">{nameCamera}</div>
        <div className="like-button-container">
          <button className="like-button" onClick={handleLikeClick}>
            {isLiked.isLiked && isLiked.id === id ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: calc(
            20% - 25px
          ); /* Ancho calculado para 5 tarjetas por fila */
          margin: 10px;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: width 0.3s ease-in-out;
          background-color: #fff;
          position: relative;
        }

        .image-container {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s; /* Transición suave de la transformación */
        }

        /* Aplicar zoom al pasar el mouse por encima */
        .image-container:hover {
          transform: scale(1.05); /* Aumenta el tamaño en un 5% */
        }

        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px 8px 0 0;
        }

        /* Estilo para la etiqueta de "Clic para agrandar" */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .image-container:hover .overlay {
          opacity: 1;
        }

        .overlay p {
          margin: 0;
          padding: 10px;
          border: 2px solid #fff;
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0.7);
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
        }

        /* Estilo para la información */
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        /* Estilo para el ID y la fecha en la misma línea */
        .id-and-date {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-weight: bold;
          font-size: 10px;
        }

        /* Estilo para el botón de "Me gusta" y el nombre de la cámara en el centro */
        .like-button-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .like-button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .name-camera {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default InstagramCard;
