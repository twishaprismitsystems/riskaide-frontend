import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";
import AdminSubHeading from "@/common/AdminSubHeading";

export default function ChooseUsSection() {

  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "whyChooseUs.data",
    }
  );
  
  return (
    <>
      <AdminHeader title="About Choose Us Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <RHFTextField
          name="whyChooseUs.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter choose us title."
        />
        <RHFTextField
          name="whyChooseUs.subTitle"
          title="subTitle"
          isRequired={true}
          placeHolder="Please enter choose us sub title."
        />
      </div>

    <AdminSubHeading title="Choose Us Item" />
    {fields.map((item: any, index: number) => (
      <div
        key={index}
        className="pt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <RHFTextField
            name={`whyChooseUs.data.${index}.title`}
            title="Title"
            isRequired={true}
            placeHolder="Please enter title."
          />
          <RHFTextField
            name={`whyChooseUs.data.${index}.desc`}
            title="Description"
            isRequired={true}
            placeHolder="Please enter description."
            isTextArea={true}
          />
          <div className="flex items-center">
            <RHFImageUploader
              showImageRequiredMessage={true}
              savePath={`whyChooseUs.data.${index}.image`}
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
        {/* </div> */}
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
