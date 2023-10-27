import AdminSubHeading from "@/common/AdminSubHeading";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";

const FooterServiceSection = () => {
  const objForm = useFormContext();
  const {
    fields: footerService,
    append: addService,
    remove: removeService,
  } = useFieldArray({
    control: objForm.control,
    name: "footerService.data",
  });

  return (
    <>
      <AdminSubHeading title="Footer Service" />
      <div className="mt-8">
        <RHFTextField
          name={`footerService.title`}
          title="Footer Service Title"
          isRequired={true}
          placeHolder="Please enter footer service title."
        />
      </div>
      {footerService.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <RHFTextField
              name={`footerService.data.${index}.name`}
              title="Name"
              isRequired={true}
              placeHolder="Please enter name."
            />
            <div className="flex items-center">
              <RHFTextField
                name={`footerService.data.${index}.link`}
                title="Link"
                isRequired={true}
                placeHolder="Please enter Link."
              />
              <i
                onClick={() => {
                  removeService(index);
                }}
                className="cursor-pointer pl-8 self-center fa fa-trash text-red-600"
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          addService({
            name: "",
            link: "",
          });
        }}
        className="rounded-md block p-4 mt-4 bg-slate-300"
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
};

export default FooterServiceSection;
