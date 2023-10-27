
export default function AdminSubHeading(props: { title: string }) {
  return (
    <>
      <div className="text-black bg-slate-300 p-4 mt-8 rounded-md font-semibold">
        <h4>{props.title}</h4>
      </div>
    </>
  );
}
