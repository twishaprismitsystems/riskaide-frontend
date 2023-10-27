import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  title?: string | ReactNode;
  type?: string;
  isTextArea?: boolean;
  isRequired?: boolean;
  placeHolder?: string;
  rows?: number;
}

export default function RHFTextField(props: ITextField) {
  const objForm = useFormContext();
  const { control, register } = objForm;

  function getError(name: string, objForm: any) {
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

  return (
    <>
      <div className="form_field border-b-[1px] border-b-primary hover:border-b-black focus-within:border-b-black  pb-3 xs:mb-8 sm:mb-16 transition-all duration-300 ease-linear">
        {props.title && (
          <label
            style={{
              marginBottom: "1rem",
              color: !!getError(props.name, objForm) ? "red" : "inherit",
            }}
            className={`font-light text-3xl text-black w-full inline-block text-left select-none `}
          >
            {props.title}
          </label>
        )}
        {props.isTextArea ? (
          <textarea
            rows={props.rows ? props.rows : 5}
            className="rhfInput w-full h-auto text-3xl mt-1  font-light text-primaryTitle placeholder:text-primaryHover bg-transparent"
            placeholder={props.placeHolder ? props.placeHolder : ""}
            {...register(props.name)}
          />
        ) : (
          <input
            className={`rhfInput w-full p-4 text-3xl mt-1 `}
            type={props.type || "text"}
            placeholder={props.placeHolder ? props.placeHolder : ""}
            {...register(props.name)}
          />
        )}
      </div>
    </>
  );
}
