import { Api } from "@/utils/axios";
import { PhotoModel } from "@/utils/types/models";
import { PhotosQuery } from "@/utils/types/models/PhotoModel";

export enum USER_ACTIONS {
  GET_PHOTOS = "GET_PHOTOS",
  LOADING_PHOTOS = "LOADING_PHOTOS",
  ERROR = "ERROR",
}

export async function getPhotos({ camera, rover }: PhotosQuery, sol: number) {
  try {
    const {
      data: { photos },
    } = await Api.get<{ photos: PhotoModel[] }>(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja`
    );

    return { type: USER_ACTIONS.GET_PHOTOS, payload: photos };
  } catch (e: any) {
    console.debug(e.reponse);
    return { type: USER_ACTIONS.ERROR, payload: [] };
  }
}
