import DataTable from "./components/DataTable";

const page: React.FC = () => {
  return (
    <div>
      <h1>Custom Data Table</h1>
      <DataTable
        headers={["First Name", "Last Name", "Email"]}
        caption="Users"
        sorting
        pagination
      />
    </div>
  );
};

export default page;
