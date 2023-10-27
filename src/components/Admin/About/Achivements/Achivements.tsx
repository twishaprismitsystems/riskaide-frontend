import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";
import AdminSubHeading from "@/common/AdminSubHeading";

export default function AchivementsSection() {

  const objForm = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: objForm.control,
      name: "achievements.data",
    }
  );
  
  return (
    <>
      <AdminHeader title="About Achievements Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          name="achievements.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title"
        />
        <RHFTextField
          name="achievements.desc"
          title="Description"
          isRequired={true}
          placeHolder="Please enter description"
        />
        <RHFTextField
          name="achievements.note"
          title="Note"
          isRequired={true}
          placeHolder="Please enter note"
        />
      </div>

    <AdminSubHeading title="Achievements Item" />
    {fields.map((item: any, index: number) => (
      <div
        key={index}
        className="pt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <RHFTextField
            name={`achievements.data.${index}.title`}
            title="Title"
            isRequired={true}
            placeHolder="Please enter title."
          />
        </div>
        <div className="flex items-center">
        <div className="w-full">
          <RHFTextField
            name={`achievements.data.${index}.desc`}
            title="Description"
            isRequired={true}
            placeHolder="Please enter description."
            isTextArea={true}
          />
          </div>
          <div>
            <i
              onClick={() => {
                remove(index);
              }}
              className="cursor-pointer pl-8 self-center fa fa-trash text-red-600"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    ))}
    <button
      onClick={() => {
        append({
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
