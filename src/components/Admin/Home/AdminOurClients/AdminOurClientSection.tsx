import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";

export default function AdminOurClientSection() {
  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "ourClientData",
    }
  );

  return (
    <>
      <AdminHeader title="Our Client Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          name="ourClientTitle"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="ourClientSubTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
      </div>
      <AdminSubHeading title="Our Client Item" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {fields.map((item: any, index: number) => (
          <div key={index} className="flex items-center">
            <RHFImageUploader showImageRequiredMessage={true}
              savePath={`ourClientData.${index}.image`}
              label={"Select Client Image"}
              isRounded={true}
            />
            <i
              onClick={() => {
                remove(index);
              }}
              className="cursor-pointer pl-8 self-center fa fa-trash text-red-600"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          append({
            image: "",
          });
        }}
        className="rounded-md mt-6 block p-4 bg-slate-300"
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
