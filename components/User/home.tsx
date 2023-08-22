import { useCallback, useEffect, useState } from "react";
import { BiListUl, BiPlus } from "react-icons/bi";
import { useRouter } from "next/router";

import { useAuth, useUser } from "@/hook";
import { OnEvent, Event } from "@/utils/types/events";
import { ActionTicket, TicketModel } from "@/utils/types/models";

import { HomeUserContainer } from "./styles";
import usePaginate from "@/hook/usePaginate";
import { TicketsQuery } from "@/utils/types/models/TicketModel";
import { UserService } from "@/services/api/user";
import InstagramCard from "../Image/Image";
import { getPhotos } from "@/actions/user";

type TQuery = {
  [prop in keyof TicketsQuery]: TicketsQuery[prop] | null;
};

const imagesPerPage = 25;

function HomeUser() {
  const { store: auth } = useAuth();
  const {
    store: { photos },
    dispatch,
  } = useUser();

  const [query, setQuery] = useState<TQuery>({
    orderBy: null,
    priority: null,
    category: null,
  });
  const [_section, _setSection] = useState<number | null>(null);
  const [_details, _setDetails] = useState<TicketModel | null>(null);

  const fetchPhotos = useCallback(async () => {
    return await dispatch(getPhotos());
  }, [dispatch]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  console.log("home===>", photos);

  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y fin para las imágenes en la página actual
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Filtrar las imágenes que se mostrarán en la página actual
  const imagesToDisplay = photos.slice(startIndex, endIndex);

  // Función para cambiar de página
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Renderizar las imágenes */}
      <div className="gallery">
        {imagesToDisplay.map(({ img_src }, index) => (
          <InstagramCard key={index} imageUrl={img_src} likes={0} />
        ))}
      </div>

      {/* Renderizar los botones de paginación */}
      <div className="pagination">
        {Array.from({
          length: Math.ceil(photos.length / imagesPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .pagination button {
          margin: 0 5px;
          padding: 5px 10px;
          border: none;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }

        .pagination button.active {
          background-color: #555;
        }
      `}</style>
    </div>
  );
}

export default HomeUser;
