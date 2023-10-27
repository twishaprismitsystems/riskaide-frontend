import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useFormContext } from "react-hook-form";

export default function AdminQuote() {
  return (
    <>
      <AdminHeader title="Quote Section" />
      <div className="pt-8 grid  grid-cols-1 sm:grid-cols-3 gap-8">
        <RHFTextField
          title={"Title"}
          name={`quote.title`}
          isRequired={true}
          placeHolder="Please enter quote title"
        />
        <RHFTextField
          title={"Sub Title"}
          name={`quote.subTitle`}
          isRequired={true}
          placeHolder="Please enter quote sub title"
        />
        <RHFTextField
          name="quote.desc"
          title="Description"
          isRequired={true}
          isTextArea={true}
          placeHolder="Please enter description."
        />
        <RHFTextField
          name="quote.btnTitle"
          title="Button Title"
          isRequired={true}
          placeHolder="Please enter button title."
        />
      </div>
    </>
  );
}
