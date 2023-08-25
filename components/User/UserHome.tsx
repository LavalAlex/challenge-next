import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/hook";

import usePaginate from "@/hook/usePaginate";

import ImageCard from "../Image/ImageCard";
import { getPhotos } from "@/actions/user";
import Filters from "../Filters";
import { PhotosQuery } from "@/utils/types/models/PhotoModel";
import { numberSol } from "@/utils/query";
import { styled } from "styled-components";

function UserHome() {
  const {
    store: { photos },
    dispatch,
  } = useUser();

  const [query, setQuery] = useState<PhotosQuery>({
    camera: "CHEMCAM",
    earthDate: "2023-08-25",
  });

  const [_section, _setSection] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [disliked, setDisliked] = useState<boolean>(false);
  const [seeLike, setSeeLike] = useState<boolean>(false);

  const [_paginate, _setPaginate] = useState();

  const fetchPhotos = useCallback(async () => {
    return await dispatch(getPhotos(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const _onQuery = (key: string, value: any) => {
    if (key === "camera") {
      setQuery((old) => ({
        ...old,
        camera: value || null,
      }));
    }
    if (key === "earthDate") {
      setQuery((old) => ({
        ...old,
        earthDate: value || null,
      }));
    }
  };

  // Function to load the images that have received "Likes" from localStorage
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
      loadLikedImages();
    }
  }, [seeLike, disliked]);

  const filteredImages = photos?.filter((image) =>
    likedImages.includes(image.id)
  );

  const images = seeLike ? filteredImages : photos;
  const paginate = usePaginate(0, images?.length);

  return (
    <Container>
      <Filters
        data={images || []}
        onQuery={_onQuery}
        paginate={paginate}
        setSeeLike={setSeeLike}
        filters
      />
      <Gallery>
        {images
          .slice(paginate.from, paginate.to)
          ?.map(({ img_src, id, earth_date, camera }, index) => (
            <ImageCard
              key={index}
              imageUrl={img_src}
              id={id}
              date={earth_date}
              seeLike={seeLike}
              setDisliked={setDisliked}
              nameCamera={camera.full_name}
            />
          ))}
      </Gallery>
    </Container>
  );
}

export default UserHome;

const Container = styled.div``;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
