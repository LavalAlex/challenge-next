import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/hook";

import usePaginate from "@/hook/usePaginate";

import InstagramCard from "../Image/Image";
import { getPhotos } from "@/actions/user";
import Filters from "../Filters";
import IPhotoModel, { PhotosQuery } from "@/utils/types/models/PhotoModel";
import { numberSol } from "@/utils/query";

function HomeUser() {
  const {
    store: { photos },
    dispatch,
  } = useUser();

  const [query, setQuery] = useState<PhotosQuery>({
    camera: "MAST",
    rover: "curiosity",
  });
  const [_section, _setSection] = useState<number | null>(null);
  const [_details, _setDetails] = useState<IPhotoModel | null>(null);

  const [seeLike, setSeeLike] = useState<boolean>(false);

  const [disliked, setDisliked] = useState<boolean>(false);

  const fetchPhotos = useCallback(async () => {
    const sol = numberSol(query.camera);
    console.log(sol);
    return await dispatch(getPhotos(query, sol));
  }, [dispatch, query.camera]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const _showDetails = (ticket: IPhotoModel) => {
    _setDetails(ticket);
    _setSection(3);
  };

  const _onQuery = (key: string, value: any) => {
    if (key === "camera") {
      setQuery((old) => ({
        ...old,
        camera: value || null,
      }));
    }
    if (key === "rover") {
      setQuery((old) => ({
        ...old,
        rover: value || null,
      }));
    }
  };
  const [likedImages, setLikedImages] = useState<number[]>([]);

  // Función para cargar las imágenes que han recibido "Me gusta" desde localStorage
  const loadLikedImages = () => {
    const likedImageIds = Object.keys(localStorage).filter((key) =>
      key.startsWith("liked_")
    );

    const likedIds = likedImageIds.map((key) =>
      parseInt(key.replace("liked_", ""), 10)
    );

    setLikedImages(likedIds);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verifica que estás en el lado del cliente antes de usar localStorage
      loadLikedImages();
    }
  }, [seeLike, disliked]);

  const filteredImages = photos?.filter((image) =>
    likedImages.includes(image.id)
  );

  const images = seeLike ? filteredImages : photos;
  const paginate = usePaginate(0, images?.length);

  console.log(images[0]);

  return (
    <div>
      <Filters
        data={images || []}
        onClick={_showDetails}
        onQuery={_onQuery}
        paginate={paginate}
        setSeeLike={setSeeLike}
        filters
      />
      <div className="gallery">
        {images
          .slice(paginate.from, paginate.to)
          ?.map(({ img_src, id, earth_date, camera }, index) => (
            <InstagramCard
              key={index}
              imageUrl={img_src}
              id={id}
              date={earth_date}
              seeLike={seeLike}
              setDisliked={setDisliked}
              nameCamera={camera.full_name}
            />
          ))}
      </div>

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
