import { InputChange } from "@/utils/types/generics";
import { BiCloudUpload, BiTrashAlt } from "react-icons/bi";
import { FileContainer, FilesContainer, FilesInputContainer } from "./styles";

interface Props {
  onChange?: (e: InputChange) => any;
  files?: File[];
  remove?: (index: number) => any;
}
function FilesInput({ onChange, files, remove }: Props) {
  const _remove = (index: number) => {
    if (remove) remove(index);
  };

  return (
    <FilesInputContainer>
      <input type="file" onChange={onChange} multiple />

      <div className="upload-files">
        <BiCloudUpload size={22} /> Adjuntar archivos
      </div>

      {files?.length ? (
        <>
          <FilesContainer>
            {files.map((f, i) => (
              <FileContainer>
                <button onClick={() => _remove(i)} className="remove-file">
                  <BiTrashAlt />
                </button>

                <p className="name">{f.name}</p>
                <p
                  className={`type ${
                    f.type.includes("image") ? "image" : ""
                  } ${printType(f.type)}`}
                >
                  {printType(f.type)}
                </p>
                <p className="size">{(f.size / 1024).toFixed(1)}kb</p>
              </FileContainer>
            ))}
          </FilesContainer>

          <div className="footer">
            <p>Archivos: {files?.length || 0}</p>
            <p>
              {(files
                ? files.reduce((acc, cur) => acc + cur.size, 0) / 1024
                : 0
              ).toFixed(1)}
              kb
            </p>
          </div>
        </>
      ) : null}
    </FilesInputContainer>
  );
}

export default FilesInput;

function printType(type: string): string | null {
  if (type.includes("image")) return type.split("/")[1] as string;
  if (type.includes("pdf")) return "pdf";
  if (type.includes("excel")) return "xls";
  if (type.includes("spreadsheetml.sheet")) return "xlsx";
  return null;
}
