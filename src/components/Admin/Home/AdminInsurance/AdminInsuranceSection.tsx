import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";

export default function AdminInsuranceSection() {
  const objForm = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "insurance.data",
    }
  );

  return (
    <>
      <AdminHeader title="Insurance Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <RHFTextField
          name="insurance.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="insurance.description"
          title="Description"
          isRequired={true}
          placeHolder="Please enter description."
        />
      </div>
      <AdminSubHeading title="Insurance Item" />
      {fields.map((item, index) => (
        <div
          key={index}
          className="pt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          <RHFTextField placeHolder="Please enter title." name={`insurance.data.${index}.title`} title={"Title"} />
          <RHFTextField
            isTextArea={true}
            name={`insurance.data.${index}.description`}
            title={"Description"}
            placeHolder="Please enter description."
          />
          <div className="flex items-center">
            <RHFImageUploader showImageRequiredMessage={true}
              isRounded={true}
              savePath={`insurance.data.${index}.normalImage`}
              label="Select Normal Image"
              imgPlaceholder={'Select Image Please'}
            />
          </div>
          <div className="flex items-center">
            <RHFImageUploader showImageRequiredMessage={true}
              isRounded={true}
              savePath={`insurance.data.${index}.hoverImage`}
              label="Select Hover Image"
              imgPlaceholder={'Select Image Please'}
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
        className="rounded-md mt-4 block p-4 bg-slate-300"
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
