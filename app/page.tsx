import DataTable from "./components/DataTable";
import Header from "./components/Header";
interface DataRow {
  [key: string]: any;
}

const headers: string[] = [
  "Timestamp",
  "PurchaseId",
  "Mail",
  "Name",
  "Source",
  "Status",
  "Select",
];

const rows: DataRow[] = [
  {
    Timestamp: "2 minutes ago",
    PurchaseId: 123,
    Mail: "ahan.doe@example.com",
    Name: "Ahan",
    Source: "Admin",
    Status: "Failed",
    Select: "Select",
  },
  {
    Timestamp: "10 minutes ago",
    PurchaseId: 22,
    Mail: "bhumi.doe@example.com",
    Name: "Bhumi",
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "15 minutes ago",
    PurchaseId: 33,
    Mail: "charu.doe@example.com",
    Name: "Charu",
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "19 minutes ago",
    PurchaseId: 44,
    Mail: "dhobal.doe@example.com",
    Name: "Dhobal",
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "2 hours ago",
    PurchaseId: 66,
    Mail: "emami.doe@example.com",
    Name: "Emami",
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "10 hours ago",
    PurchaseId: 5,
    Mail: "farhan.doe@example.com",
    Name: "Farhan",
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
  {
    Timestamp: "1 day ago",
    PurchaseId: 9,
    Mail: "ganesh.doe@example.com",
    Name: "Ganesh",
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "10 hours ago",
    PurchaseId: 11,
    Mail: "harry.doe@example.com",
    Name: "Harry",
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "15 hours ago",
    PurchaseId: 45,
    Mail: "iklakh.doe@example.com",
    Name: "Iklakh",
    Source: "Admin",
    Status: "Paid",
    Select: "Select",
  },
  {
    Timestamp: "20 hours ago",
    PurchaseId: 32,
    Mail: "john.doe@example.com",
    Name: "John",
    Source: "Admin",
    Status: "Pending",
    Select: "Select",
  },
];

const page: React.FC = () => {
  return (
    <div>
      <Header />
      <DataTable
        headers={headers}
        caption="Bookings"
        sorting
        pagination
        data={rows}
      />
    </div>
  );
};

export default page;
