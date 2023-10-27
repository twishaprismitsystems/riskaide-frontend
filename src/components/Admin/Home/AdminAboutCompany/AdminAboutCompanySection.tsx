import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFormContext } from "react-hook-form";
import AdminHeader from "../AdminHeader/AdminHeader";

export default function AdminAboutCompanySection() {
  const objForm = useFormContext();

  return (
    <>
      <AdminHeader title="About Company Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RHFTextField
          name="aboutCompany.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter title."
        />
        <RHFTextField
          name="aboutCompany.subTitle"
          title="Sub Title"
          isRequired={true}
          placeHolder="Please enter sub title."
        />
        <RHFTextField
          name="aboutCompany.missionTitle"
          title="Mission Title"
          isRequired={true}
          placeHolder="Please enter mission title."
        />
        <RHFTextField
          name="aboutCompany.missionDesc"
          title="Missin Description"
          isRequired={true}
          isTextArea={true}
          placeHolder="Please enter Missin Description."
        />
        <RHFTextField
          name="aboutCompany.missionSubDesc"
          title="Missin Sub Description"
          isRequired={true}
          isTextArea={true}
          placeHolder="Please enter Missin Sub Description."
        />
        <RHFTextField
          name="aboutCompany.missionDetails"
          title="Mission Details"
          isRequired={true}
          isTextArea={true}
          placeHolder="Enter Comma separated values"
        />
        <RHFTextField
          name="aboutCompany.btnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
        <RHFImageUploader showImageRequiredMessage={true}
          isRounded={true}
          savePath={`aboutCompany.image`}
          label="Select Main Image"
        />
        <RHFImageUploader showImageRequiredMessage={true}
          isRounded={true}
          savePath={`aboutCompany.subImage`}
          label="Select Sub Image"
        />
      </div>
    </>
  );
}
