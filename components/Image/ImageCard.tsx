import React, { useState, useEffect } from "react";
import ExpandedImage from "./ExpandedImage";
import {
  CardContainer,
  Date,
  Id,
  IdAndDateContainer,
  Image,
  ImageContainer,
  InfoContainer,
  LikeButton,
  LikeButtonContainer,
  NameCamera,
} from "./styles";

interface ImageCardProps {
  imageUrl: string;
  date: string;
  id: number;
  seeLike: boolean;
  setDisliked: React.Dispatch<React.SetStateAction<boolean>>;
  nameCamera: string;
}

function ImageCard({
  imageUrl,
  id,
  date,
  setDisliked,
  seeLike,
  nameCamera,
}: ImageCardProps) {
  const [isExpanded, _] = useState(false);

  const [isOpened, setIsOpened] = useState(false);
  const [isLiked, setIsLiked] = useState({ id: 0, isLiked: false });

  useEffect(() => {
    // Check if the card has a "Like" saved in the Local Storage
    const liked = localStorage.getItem(`liked_${id}`);
    if (liked === "true") {
      setIsLiked((old) => ({ ...old, id, isLiked: true }));
    } else {
      localStorage.removeItem(`liked_${id}`);
    }
  }, [id, isLiked.isLiked]);

  const onClickExpanded = () => {
    setIsOpened(!isOpened);
  };

  const handleLikeClick = () => {
    // Change the "Like" status locally
    localStorage.setItem(`liked_${id}`, isLiked.isLiked ? "false" : "true");
    setIsLiked((old) => ({ ...old, id, isLiked: !old.isLiked }));

    // Save "Like" status in Local Storage
    if (seeLike) {
      setDisliked((old) => !old);
    }
  };

  return (
    <CardContainer className={`card ${isExpanded ? "expanded" : ""}`}>
      <ImageContainer>
        {isOpened ? (
          <ExpandedImage imageUrl={imageUrl} onClose={onClickExpanded} />
        ) : (
          <>
            <Image className="image" src={imageUrl} alt="" />{" "}
            <div className="overlay" onClick={onClickExpanded}>
              <p>¡Click to enlarge!</p>
            </div>
          </>
        )}
      </ImageContainer>
      <InfoContainer>
        <IdAndDateContainer>
          <Id>{id}</Id>
          <Date>{date}</Date>
        </IdAndDateContainer>
        <NameCamera>{nameCamera}</NameCamera>
        <LikeButtonContainer>
          <LikeButton onClick={handleLikeClick}>
            {isLiked.isLiked && isLiked.id === id ? "❤️" : "🤍"}
          </LikeButton>
        </LikeButtonContainer>
      </InfoContainer>
    </CardContainer>
  );
}

export default ImageCard;
export type { ImageCardProps };
