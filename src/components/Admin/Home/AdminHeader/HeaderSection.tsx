import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import AdminHeader from "./AdminHeader";

export default function AdminHeaderSection() {
  return (
    <>
      <AdminHeader title={"Header Section"} />
      <div className="mt-8">
        <RHFTextField
          name="warningMessage"
          title="Warning Message"
          isRequired={true}
          placeHolder="Please enter warning message."
        />
      </div>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <RHFTextField
          name="headerBtnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
        <RHFTextField
          name="headerBtnLink"
          title="Button Link"
          isRequired={true}
          placeHolder="Please enter button link."
        />
        <RHFImageUploader showImageRequiredMessage={true}
          isRounded={true}
          label="Select Header Image"
          srcPath={'headerLogo'}
          savePath="headerLogo"
          imgPlaceholder={"Select Image Please"}
        />
      </div>
    </>
  );
}
