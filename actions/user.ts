import { API_NASA_GET_PHOTOS } from "@/config";
import { Api } from "@/utils/axios";
import { PhotoModel } from "@/utils/types/models";

export enum USER_ACTIONS {
  GET_PHOTOS = "GET_PHOTOS",
  LOADING_PHOTOS = "LOADING_PHOTOS",
  ERROR = "ERROR",
}

export async function getPhotos() {
  try {
    const { data } = await Api.get<{ photos: PhotoModel[] }>(
      API_NASA_GET_PHOTOS
    );
    return { type: USER_ACTIONS.GET_PHOTOS, payload: data };
  } catch (e: any) {
    console.debug(e.reponse);
    return { type: USER_ACTIONS.ERROR, payload: [] };
  }
}
