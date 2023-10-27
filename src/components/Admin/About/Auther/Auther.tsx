import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";

export default function AutherSection() {

  const objForm = useFormContext();
  return (
    <>
      <AdminHeader title="About Auther Section" />
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          name="aboutAuthor.title"
          title="Title"
          isRequired={true}
          placeHolder="Please enter header title."
        />
        <RHFTextField
          name="aboutAuthor.desc"
          title="Description"
          isRequired={true}
          placeHolder="Please enter header description."
          isTextArea={true}
        />
        <RHFImageUploader showImageRequiredMessage={true}
          isRounded={true}
          label="Select Header Image"
          srcPath={'aboutAuthor.authorImage'}
          savePath="aboutAuthor.authorImage"
          imgPlaceholder={"Select Auther Image Please"}
        />
      </div>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <RHFTextField
            name="aboutAuthor.desc1"
            title="Description1"
            isRequired={true}
            placeHolder="Please enter auther description 1."
            isTextArea={true}
          />
          <RHFTextField
            name="aboutAuthor.desc2"
            title="Description2"
            isRequired={true}
            placeHolder="Please enter auther description 2."
            isTextArea={true}
          />
          <RHFTextField
            name="aboutAuthor.btnTitle"
            title="Button Title"
            isRequired={true}
            placeHolder="Please enter button title."
          />
        </div>
    </>
  );
}
