interface ICamare {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface IRover {
  id: number;
  name: string;
  landing_date: Date;
  launch_date: Date;
  status: boolean;
  max_sol: number;
  max_date: Date;
  total_photos: number;
  cameras: ICamare[];
}

interface IPhotoModel {
  id: number;
  sol?: number;
  camera: ICamare;
  img_src: string;
  earth_date: string;
  rover: IRover;
}

export type CameraName =
  | "FHAZ"
  | "RHAZ"
  | "MAST"
  | "CHEMCAM"
  | "MAHLI"
  | "MARDI"
  | "NAVCAM"
  | "PANCAM"
  | "MINITES";

export type EarthDate =
  | "2023-08-25"
  | "2023-08-24"
  | "2023-08-23"
  | "2023-08-22"
  | "2023-08-22";

export interface PhotosQuery {
  earthDate?: string | null;
  camera?: string | null;
}

export default IPhotoModel;
