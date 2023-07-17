"use client";
import { useState } from "react";
import styles from "./DataTable.module.css";

interface DataTableProps {
  headers: string[];
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
}

interface DataRow {
  cells: string[];
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  caption,
  sorting = false,
  pagination = false,
}) => {
  const [data, setData] = useState<DataRow[]>([
    { cells: ["John", "Doe", "john.doe@example.com"] },
    { cells: ["Jane", "Smith", "jane.smith@example.com"] },
    { cells: ["Bob", "Johnson", "bob.johnson@example.com"] },
  ]);

  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

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

  const sortedData = sortColumn !== null ? [...data] : data;
  if (sortColumn !== null) {
    sortedData.sort((a, b) => {
      const valueA = a.cells[sortColumn];
      const valueB = b.cells[sortColumn];
      if (sortAscending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = pagination
    ? sortedData.slice(startIndex, endIndex)
    : sortedData;

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.tableWrapper}>
      {caption && <caption>{caption}</caption>}
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
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
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
