"use client";

import { useState } from "react";
import styles from "./DataTable.module.css";

interface DataTableProps {
  headers: string[];
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
  data: Array<Record<string, any>>;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  caption,
  sorting = false,
  pagination = false,
  data,
}) => {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage = 5;

  const handleHeaderClick = (index: number) => {
    if (sorting) {
      if (sortColumn === index) {
        setSortAscending(!sortAscending);
      } else {
        setSortColumn(index);
        setSortAscending(true);
      }
    }
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Failed":
        return styles.statusBadgeRed;
      case "Paid":
        return styles.statusBadgeGreen;
      case "Pending":
        return styles.statusBadgeYellow;
      default:
        return "";
    }
  };

  const sortedData = sortColumn !== null ? [...data] : data;
  console.log("sorted datas", sortedData);

  if (sortColumn !== null) {
    sortedData.sort((a, b) => {
      const valueA = a[headers[sortColumn]];
      const valueB = b[headers[sortColumn]];
      if (sortAscending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }
  const filteredData = searchQuery
    ? sortedData.filter((row) =>
        String(row["PurchaseId"])
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : sortedData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const paginatedData = pagination
  //   ? sortedData.slice(startIndex, endIndex)
  //   : sortedData;
  const paginatedData = pagination
    ? filteredData.slice(startIndex, endIndex)
    : filteredData;

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.tableWrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0 20px 0",
        }}
      >
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by PurchaseId"
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={
                  sorting ? styles.headerCellSortable : styles.headerCell
                }
                onClick={() => handleHeaderClick(index)}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {paginatedData.map((row, rowIndex) => (
            <tr className={rowIndex % 2 === 0 ? styles.row : ""} key={rowIndex}>
              {headers.map((header, cellIndex) => {
                if (header === "Status") {
                  const status = row[header];
                  const badgeColor = getStatusBadgeColor(status);
                  return (
                    <td key={cellIndex}>
                      <span className={`${styles.statusBadge} ${badgeColor}`}>
                        {status}
                      </span>
                    </td>
                  );
                } else if (header === "Select") {
                  return (
                    <td className={styles.badge} key={cellIndex}>
                      <span className={styles.select_button}>
                        {row[header]}
                      </span>
                    </td>
                  );
                } else {
                  return (
                    <td className={styles.row_style} key={cellIndex}>
                      {row[header]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <div className={styles.paginationWrapper}>
          <button
            className={styles.paginationButton}
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            className={styles.paginationButton}
            disabled={endIndex >= sortedData.length}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
