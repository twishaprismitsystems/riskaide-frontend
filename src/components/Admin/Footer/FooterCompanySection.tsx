import AdminSubHeading from "@/common/AdminSubHeading";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";

const FooterCompanySection = () => {
  const objForm = useFormContext();
  const {
    fields: footerCompany,
    append: addCompany,
    remove: removeCompany,
  } = useFieldArray({
    control: objForm.control,
    name: "footerCompany.data",
  });

  return (
    <>
      <AdminSubHeading title="Footer Company" />
      <div className="mt-8">
        <RHFTextField
          name={`footerCompany.title`}
          title="Footer Company Title"
          isRequired={true}
          placeHolder="Please enter footer company title."
        />
      </div>
      {footerCompany.map((item: any, index: number) => {
        return (
          <div key={index} className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-8">
            <RHFTextField
              name={`footerCompany.data.${index}.name`}
              title="Name"
              isRequired={true}
              placeHolder="Please enter name."
            />
            <div className="flex items-center">
              <RHFTextField
                name={`footerCompany.data.${index}.link`}
                title="Link"
                isRequired={true}
                placeHolder="Please enter Link."
              />
              <i
                onClick={() => {
                  removeCompany(index);
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
          addCompany({
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

export default FooterCompanySection;
