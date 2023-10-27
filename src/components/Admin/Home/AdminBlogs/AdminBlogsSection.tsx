import RHFImageSelector from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";

export default function AdminBlogsSection() {
  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "blogs.data",
    }
  );

  return (
    <>
      <AdminHeader title="Blogs Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <RHFTextField
          name="blogs.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="blogs.subTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
        <RHFTextField
          name="blogs.desc"
          title="Description"
          isRequired={true}
          isTextArea={true}
          placeHolder="Please enter description."
        />
        <RHFTextField
          name="blogs.btnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
      </div>
      <AdminSubHeading title="Blog Item" />
      {fields.map((item: any, index: number) => (
        <div
          className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
          key={index}
        >
          <RHFTextField name={`blogs.data.${index}.title`} title={"Title"} />
          {/* <RHFTextField
            isTextArea={true}
            name={`blogs.data.${index}.desc`}
            title={"Description"}
          /> */}
          <div className="flex items-center">
            <RHFImageUploader
              showImageRequiredMessage={true}
              savePath={`blogs.data.${index}.img`}
              isRounded={true}
              label={"Select Blog Image"}
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
