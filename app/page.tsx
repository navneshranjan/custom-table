import DataTable from "./components/DataTable";
interface DataRow {
  [key: string]: any;
}

const page: React.FC = () => {
  // const rows: DataRow[] = [
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "john.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "john.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "ohn.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "john.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "aohn.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  //   {
  //     cells: [
  //       "11:20",
  //       "200019",
  //       "john.doe@example.com",
  //       "John",
  //       "",
  //       "Pass",
  //       "Select",
  //     ],
  //   },
  // ];
  const rows: DataRow[] = [
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "cohn.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "gohn.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "bohn",
      PurchaseId: "Doe",
      Mail: "lohn.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
    {
      Timestamp: "aohn",
      PurchaseId: "Doe",
      Mail: "john.doe@example.com",
      Name: 1,
      Source: "Admin",
      Status: "",
      Select: "",
    },
  ];
  return (
    <div>
      <h1>Custom Data Table</h1>
      <DataTable
        headers={[
          "Timestamp",
          "PurchaseId",
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
