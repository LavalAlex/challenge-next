interface Img {
  type: "Buffer";
  data: ArrayBuffer;
}
interface ImageModel {
  id: string | number;
  createdDate: string;
  updateDate: string;
  mimetype: string;

  images?: Img;
  files?: Img;
  file?: Img;
}


export default ImageModel;
