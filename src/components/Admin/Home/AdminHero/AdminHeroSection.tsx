import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useFormContext } from "react-hook-form";

export default function AdminHeroSection() {
  const objForm = useFormContext();
  
  return (
    <>
      <AdminHeader title="Hero Section" />
      <div className="pt-8 grid  grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          title={"Hero Title"}
          name={`heroSection.heroTitle`}
          isRequired={true}
          placeHolder="Please enter hero title"
        />
        <RHFTextField
          name="heroSection.heroBtnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
        <RHFImageUploader showImageRequiredMessage={true}
          isRounded={true}
          label="Select Hero Image"
          savePath="heroSection.heroImage"
          imgPlaceholder={"Select Image Please"}
        />
      </div>
    </>
  );
}
