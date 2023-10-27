export default function AdminHeader(props: { title: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(23, 52, 87)",
      }}
      className="text-white p-4 mt-24 sm:mt-8 rounded-md font-semibold"
    >
      <h3 className="text-white text-h5 sm:text-h4">{props.title}</h3>
    </div>
  );
}
