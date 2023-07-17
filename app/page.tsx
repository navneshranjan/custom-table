import DataTable from "./components/DataTable";
interface DataRow {
  cells: string[];
  data?: any; // Optional row data
}

const page: React.FC = () => {
  const rows: DataRow[] = [
    {
      cells: [
        "11:20",
        "200019",
        "john.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
    {
      cells: [
        "11:20",
        "200019",
        "john.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
    {
      cells: [
        "11:20",
        "200019",
        "aohn.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
    {
      cells: [
        "11:20",
        "200019",
        "john.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
    {
      cells: [
        "11:20",
        "200019",
        "aohn.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
    {
      cells: [
        "11:20",
        "200019",
        "john.doe@example.com",
        "John",
        "",
        "Pass",
        "Select",
      ],
    },
  ];
  return (
    <div>
      <h1>Custom Data Table</h1>
      <DataTable
        headers={[
          "Timestamp",
          "Purchase Id",
          "Mail",
          "Name",
          "Source",
          "Status",
          "Select",
        ]}
        caption="Bookings"
        sorting
        pagination
        data={rows}
      />
    </div>
  );
};

export default page;
