import { PhotosQuery } from "./types/models/PhotoModel";

const _sol = [
  {
    rover: "curiosity",
    camera: "MAHLI",
    sol: 1,
  },
  {
    rover: "all",
    camera: "RHAZ",
    sol: 100,
  },
  {
    rover: "curiosity",
    camera: "MAST",
    sol: 1000,
  },
  {
    rover: "curiosity",
    camera: "CHEMCAM",
    sol: 90,
  },
  {
    rover: "all",
    camera: " FHAZ",
    sol: 1000,
  },
  {
    rover: "curiosity",
    camera: " MARDI",
    sol: 100,
  },
  {
    rover: "all",
    camera: " NAVCAM",
    sol: 100,
  },
  {
    rover: "both",
    camera: " PANCAM",
    sol: 100,
  },
  {
    rover: "both",
    camera: "MINITES",
    sol: 1000,
  },
];

export const numberSol = (query: PhotosQuery) => {
  let flag = { sol: 100, query: { ...query } };
  _sol.forEach(({ camera, sol }, _i) => {
    if (camera == query.camera) {
      flag.sol = sol;
    }
    if (
      (query.rover === "opportunity" || query.rover === "spirit") &&
      query.camera === "MAST"
    ) {
      flag.query.camera = "PANCAM";
    }
  });
  return flag;
};
