import RHFTextField from '@/common/TextField/RHFTextField'
import AdminHeader from '../../Home/AdminHeader/AdminHeader'

export default function AdminServiceHeader() {
    return (
        <>
            <AdminHeader title='Header Section' />
            <div className="pt-8 grid  grid-cols-1 md:grid-cols-3 gap-8">
                <RHFTextField
                    title={"Header Title"}
                    name={`header.title`}
                    isRequired={true}
                    placeHolder="Please enter title"
                />
                <RHFTextField
                    title="Header Description"
                    name="header.desc"
                    isRequired={true}
                    isTextArea={true}
                    placeHolder="Please enter description."
                />
                <RHFTextField
                    title={"Service Title"}
                    name={`title`}
                    isRequired={true}
                    placeHolder="Please enter title"
                />
                <RHFTextField
                    title="Service Description"
                    name="desc"
                    isTextArea={true}
                    isRequired={true}
                    placeHolder="Please enter description."
                />
            </div>
        </>
    )
}
