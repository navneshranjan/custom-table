import DataTable from "./components/DataTable";
import Header from "./components/Header";
interface DataRow {
  [key: string]: any;
}
const rows: DataRow[] = [
  {
    Timestamp: "aohn",
    PurchaseId: "123",
    Mail: "cohn.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Failed",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "11245",
    Mail: "gohn.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "bohn",
    PurchaseId: "4356",
    Mail: "lohn.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "998947",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "43245",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "11111",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "87464",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "34213",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "22346",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "aohn",
    PurchaseId: "4533455",
    Mail: "john.doe@example.com",
    Name: 1,
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
];
const page: React.FC = () => {
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

  return (
    <div>
      <Header />
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
