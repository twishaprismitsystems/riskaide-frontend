import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";

export default function AboutHeaderSection() {

  const objForm = useFormContext();

  return (
    <>
      <AdminHeader title="About Header Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <RHFTextField
          name="header.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter header title."
        />
        <RHFTextField
          name="header.desc"
          title="Description"
          isRequired={true}
          placeHolder="Please enter header description."
          isTextArea={true}
        />
      </div>
    </>
  );
}
