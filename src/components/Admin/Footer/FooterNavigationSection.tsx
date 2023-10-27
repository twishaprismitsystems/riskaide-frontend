import AdminSubHeading from "@/common/AdminSubHeading";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";

const FooterNavigationSection = () => {
  const objForm = useFormContext();
  const {
    fields: footerNavigation,
    append: addNavigation,
    remove: removeNavigation,
  } = useFieldArray({
    control: objForm.control,
    name: "footerNavigation.data",
  });

  return (
    <>
      <AdminSubHeading title="Footer Navigation" />
      <div className="mt-8">
        <RHFTextField
          name={`footerNavigation.title`}
          title="Footer Navigation Title"
          isRequired={true}
          placeHolder="Please enter footer navigation title."
        />
      </div>
      {footerNavigation.map((item: any, index: number) => {
        return (
          <div key={index} className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <RHFTextField
              name={`footerNavigation.data.${index}.name`}
              title="Name"
              isRequired={true}
              placeHolder="Please enter name."
            />
            <div className="flex items-center">
              <RHFTextField
                name={`footerNavigation.data.${index}.link`}
                title="Link"
                isRequired={true}
                placeHolder="Please enter Link."
              />
              <i
                onClick={() => {
                  removeNavigation(index);
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
          addNavigation({
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

export default FooterNavigationSection;
