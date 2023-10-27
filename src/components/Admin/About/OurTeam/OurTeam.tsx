import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";
import AdminSubHeading from "@/common/AdminSubHeading";

export default function OurTeamSection() {

  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "ourTeam.data",
    }
  );
  
  return (
    <>
      <AdminHeader title="About Our Team Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <RHFTextField
          name="ourTeam.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter our team title."
        />
        <RHFTextField
          name="ourTeam.subTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter our team sub title."
        />
      </div>
      <AdminSubHeading title="Our Team Item" />
      {fields.map((item: any, index: number) => (
        <div
          key={index}
          className="pt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <RHFTextField
              name={`ourTeam.data.${index}.fullName`}
              title="FullName"
              isRequired={true}
              placeHolder="Please enter full name."
            />
            <RHFTextField
              name={`ourTeam.data.${index}.designation`}
              title="Designation"
              isRequired={true}
              placeHolder="Please enter designation."
              isTextArea={true}
            />
            <div className="flex items-center">
              <RHFImageUploader
                showImageRequiredMessage={true}
                savePath={`ourTeam.data.${index}.image`}
                isRounded={true}
                label={"Select Image"}
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
        className="mt-4 rounded-md block p-4 bg-slate-300"
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
