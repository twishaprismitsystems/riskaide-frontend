import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";

export default function AdminServiceSection() {
  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "service.data",
    }
  );

  return (
    <>
      <AdminHeader title="Service Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <RHFTextField
          name="service.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter  title."
        />
        <RHFTextField
          name="service.subTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
        <RHFTextField
          name="service.desc"
          title="Description"
          isRequired={true}
          placeHolder="Please enter service description."
        />
        <RHFTextField
          name="service.btnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
      </div>
      <AdminSubHeading title="Service Item" />
      {fields.map((item: any, index: number) => (
        <div
          className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          key={index}
        >
          <RHFTextField name={`service.data.${index}.title`} title={" Title"} />
          <RHFTextField
            isTextArea={true}
            name={`service.data.${index}.desc`}
            title={"Description"}
          />
          <div className="flex items-center">
            <RHFImageUploader showImageRequiredMessage={true}
              savePath={`service.data.${index}.image`}
              isRounded={true}
              label={"Select Service image"}
            />
            <i
              onClick={() => {
                remove(index);
              }}
              className="cursor-pointer pl-8 self-center fa fa-trash text-red-600"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          append({
            image: "",
            title: "",
            desc: "",
          });
        }}
        className=" mt-4 rounded-md block p-4 bg-slate-300"
        type="button"
      >
        Add Item
        <i
          className="cursor-pointer pl-3 self-center fa fa-add"
          aria-hidden="true"
        />
      </button>
    </>
  );
}
