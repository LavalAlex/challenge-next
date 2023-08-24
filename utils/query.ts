const _sol = [
  {
    rover: "curiosity",
    camera: "MAHLI",
    sol: 1,
  },
  {
    rover: "all",
    camera: "RHAZ",
    sol: 1000,
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
    camera: " MINITES",
    sol: 100,
  },
];

export const numberSol = (_camera: string | null | undefined): number => {
  let flag = 100;
  _sol.forEach(({ camera, sol }, _i) => {
    if (camera == _camera) {
      flag = sol;
    }
  });

  return flag;
};
