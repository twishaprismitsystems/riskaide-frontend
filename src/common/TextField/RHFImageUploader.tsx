import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function RHFImageUploader({
  srcPath,
  savePath,
  label,
  folderPath,
  isIDNotAvailable,
  showImageRequiredMessage,
  isRounded,
  imgPlaceholder,
}: {
  imgPlaceholder?: Node | any;
  srcPath?: any;
  savePath: string;
  label: string;
  folderPath?: string;
  isIDNotAvailable?: boolean;
  isRounded?: boolean;
  showImageRequiredMessage?: boolean;
}) {
  const objForm = useFormContext();
  const [selectedImagePath, setSelectedImagePath] = useState(objForm.getValues(savePath) || null);

  function getError(name: string, objForm: any) {
    if (selectedImagePath) {
      return false;
    }

    if (objForm?.formState?.errors[name])
      return objForm?.formState?.errors[name]?.message?.toString();
    try {
      let value = getPerfectResultForErrorMsg(objForm?.formState?.errors, name);
      if (value) return value?.message?.toString();
    } catch (ex) {
      console.debug("Error occurred while reading error from form. ", name, ex);
    }

    return "";
  }

  function getPerfectResultForErrorMsg(obj: any, desc: any) {
    var arr = desc.split(".");
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
  }

  const convertBase64 = async (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  useEffect(() => {
    if (objForm.getValues(savePath) && !selectedImagePath) {
      setSelectedImagePath(objForm.getValues(savePath))
    }
  }, [objForm.getValues(savePath)])


  // eslint-disable-next-line @next/next/no-img-element
  return (
    <div className={`upload_private`}>
      <div className="imageSelectorParent">
        <div className={`relative h-full w-full ${isRounded ? "upload_here" : "item_image"}`}>
          {!selectedImagePath && !!getError(savePath, objForm) && (
            <span className="text-red-600">Image Required!</span>
          )}

          {!selectedImagePath && !getError(savePath, objForm) && 'Please select image.'}

          {selectedImagePath && (
            <img
              suppressHydrationWarning
              src={`${selectedImagePath}`}
              alt="image.png"
              className={`${isRounded
                ? "isRoundedImageUploader"
                : "isRoundedImageUploaderNot"
                }`}
            />
          )}
        </div>
        <div
          className="upload_btn  "
          style={{
            transition: "all",
            transitionDuration: "0.3s",
            animation: "linear",
          }}
        >
          <input
            type="file"
            className="btn_100"
            onChange={async (event: any) => {
              const files = event.target.files[0];
              if (files) {
                setSelectedImagePath(URL.createObjectURL(files));
                let imagePath = await convertBase64(files)
                // console.log(imagePath, "BASE64")
                objForm.setValue(savePath, imagePath);
              }
            }}
          />
          <p className="site_btn">{label}</p>
        </div>
      </div>
    </div>
  );
}
