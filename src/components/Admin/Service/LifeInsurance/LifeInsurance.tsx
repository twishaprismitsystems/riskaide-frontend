import AdminSubHeading from "@/common/AdminSubHeading";
import RHFImageUploader from "@/common/TextField/RHFImageUploader";
import RHFTextField from "@/common/TextField/RHFTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import AdminHeader from "../../Home/AdminHeader/AdminHeader";

export default function LifeInsurance() {
    const objForm = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control: objForm.control,
        name: "lifeInsurance.data",
    });

    return (
        <>
            <AdminHeader title='Life Insurance Section' />
            <div className="mt-8">
                <RHFTextField
                    title={"Title"}
                    name={`lifeInsurance.title`}
                    isRequired={true}
                    placeHolder="Please enter title"
                />
            </div>
            <AdminSubHeading title="Life Insurance Item" />
            {fields.map((item, index) => (
                <div key={item.id} className="pt-8 grid  grid-cols-1 sm:grid-cols-3 gap-8">
                    <RHFTextField
                        title={"Title"}
                        name={`lifeInsurance.data.${index}.title`}
                        isRequired={true}
                        placeHolder="Please enter title"
                    />
                    <RHFTextField
                        title="Description"
                        name={`lifeInsurance.data.${index}.desc`}
                        isRequired={true}
                        isTextArea={true}
                        placeHolder="Please enter description."
                    />
                    <div className="flex items-center">
                        <RHFImageUploader showImageRequiredMessage={true}
                            savePath={`lifeInsurance.data.${index}.image`}
                            label={"Select Insurance Image"}
                            isRounded={true}
                        />
                        <i
                            onClick={() => {
                                remove(index);
                            }}
                            className="cursor-pointer pl-8 self-center fa fa-trash text-red-600"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={() => {
                    append({
                        image: "",
                        title: "",
                        desc: "",
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
    )
}
