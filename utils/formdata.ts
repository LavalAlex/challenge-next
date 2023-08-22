import { isFile } from "./helpers";

function formData(data: any) {
  const _form = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (!value) return;

    if (isFile(value)) return _form.append(key, value);
    if (Array.isArray(value)) return value.forEach((v) => _form.append(key, v));
    return _form.append(key, value.toString());
  });

  return _form;
}

export default formData;
