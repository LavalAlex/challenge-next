import { useCallback, useEffect, useState } from "react";
import {  useUser } from "@/hook";


import usePaginate from "@/hook/usePaginate";


import InstagramCard from "../Image/Image";
import { getPhotos } from "@/actions/user";
import Filters from "../Filters";
import IPhotoModel, { PhotosQuery } from "@/utils/types/models/PhotoModel";


function HomeUser() {
  const {
    store: { photos },
    dispatch,
  } = useUser();

  const [query, setQuery] = useState<PhotosQuery>({
    // orderBy: null,
    camera: "MAST",
    rover: "curiosity",
  });
  const [_section, _setSection] = useState<number | null>(null);
  const [_details, _setDetails] = useState<IPhotoModel | null>(null);

  const fetchPhotos = useCallback(async () => {
    return await dispatch(getPhotos(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const paginate = usePaginate(0, photos?.length);

  const imagesToDisplay = photos?.slice(paginate.from, paginate.to);

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

  return (
    <div>
      <Filters
        data={photos || []}
        onClick={_showDetails}
        onQuery={_onQuery}
        paginate={paginate}
        filters
      />
      {/* Renderizar las imágenes */}
      <div className="gallery">
        {imagesToDisplay?.map(({ img_src }, index) => (
          <InstagramCard key={index} imageUrl={img_src} likes={0} />
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
