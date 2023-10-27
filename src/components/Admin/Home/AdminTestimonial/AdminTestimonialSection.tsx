import RHFImageSelector from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";

export default function AdminTestimonialSection() {
  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "testimonialData",
    }
  );

  return (
    <>
      <AdminHeader title="Testimonial Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          name="testimonialTitle"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="testimonialSubTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
        <RHFTextField
          name="testimonialDesc"
          title="Description"
          isTextArea={true}
          isRequired={true}
          placeHolder="Please enter description."
        />
      </div>
      <AdminSubHeading title="Testimonial Item" />
      {fields.map((item: any, index: number) => (
        <div
          className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          key={index}
        >
          <RHFTextField
            name={`testimonialData.${index}.fullName`}
            title={"Full Name"}
          />
          <RHFTextField
            isTextArea={true}
            name={`testimonialData.${index}.review`}
            title={"Review"}
          />
          <div className="flex items-center">
            <RHFImageUploader showImageRequiredMessage={true}
              savePath={`testimonialData.${index}.image`}
              isRounded={true}
              label={"Select Testimonial Image"}
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
            fullName: "",
            review: "",
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

      {/* <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <RHFTextField
          name="TestimonialTitle2"
          title="Title-2"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="testimonialSubTitle2"
          title="Sub Title-2"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
        <RHFTextField
          name="testimonialDesc2"
          title="Description-2"
          isTextArea={true}
          isRequired={true}
          placeHolder="Please enter service description."
        />
        <RHFTextField
          name="testimonialBtnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
      </div> */}
    </>
  );
}
