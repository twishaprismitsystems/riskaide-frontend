import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../Home/AdminHeader/AdminHeader";
import FooterCompanySection from "./FooterCompanySection";
import FooterNavigationSection from "./FooterNavigationSection";
import FooterServiceSection from "./FooterServiceSection";

export default function AdminFooterSection() {
  const objForm = useFormContext();
  const { fields, append } = useFieldArray({
    control: objForm.control,
    name: "footerContactDetails",
  });

  const {
    fields: footer,
    append: addFooter,
    remove: removeFooter,
  } = useFieldArray({
    control: objForm.control,
    name: "footer.data",
  });

  return (
    <>
      <AdminHeader title="Footer Section" />
      <AdminSubHeading title="Contact Information" />

      <div className="grid mt-8 grid-cols-1">
        {fields.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              <RHFTextField
                name={`footerContactDetails.${index}.name`}
                title="Name"
                isRequired={true}
                placeHolder="Please enter name."
              />
              <RHFTextField
                name={`footerContactDetails.${index}.value`}
                title="Value"
                isRequired={true}
                placeHolder="Please enter value."
              />
              <RHFImageUploader showImageRequiredMessage={true}
                savePath={`footerContactDetails.${index}.image`}
                label={"Select Contact Image"}
                isRounded={true}
              />
            </div>
          );
        })}
      </div>

      <FooterCompanySection />
      <FooterServiceSection />
      <FooterNavigationSection />

      <AdminSubHeading title="Contact Card Information" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
        <RHFTextField
          name={`footerCard.title`}
          title="Name"
          isRequired={true}
          placeHolder="Please enter name."
        />
        <RHFTextField
          name={`footerCard.value`}
          title="Value"
          isRequired={true}
          placeHolder="Please enter value."
        />
        <RHFTextField
          name={`footerCard.btnTitle`}
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
      </div>
      <AdminSubHeading title="Footer Information" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <RHFTextField
          name={`footer.title`}
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFImageUploader
          savePath={`footer.image`}
          label="Select Footer Logo"
          isRounded={true}
          showImageRequiredMessage={true}
        />
      </div>
      <AdminSubHeading title="Footer Icons" />
      {footer.map((item: any, index: number) => {
        return (
          <div key={index} className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-8">
            <RHFTextField
              name={`footer.data.${index}.iconName`}
              title="Icon Name"
              isRequired={true}
              placeHolder="Please enter name."
            />
            <div className="flex items-center">
              <RHFTextField
                name={`footer.data.${index}.iconLink`}
                title="Icon Link"
                isRequired={true}
                placeHolder="Please enter Link."
              />
              <i
                onClick={() => {
                  removeFooter(index);
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
          addFooter({
            iconName: "",
            iconLink: "",
          });
        }}
        className="mb-28 rounded-md block p-4 mt-4 bg-slate-300"
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
