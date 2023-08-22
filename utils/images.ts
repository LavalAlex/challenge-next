function getImageUrl(arr: ArrayBuffer, name: string, mimetype: string) {
  const buf = Buffer.from(arr);
  const file = new File([buf], name, { type: mimetype });
  return URL.createObjectURL(file);
}

export default getImageUrl;
