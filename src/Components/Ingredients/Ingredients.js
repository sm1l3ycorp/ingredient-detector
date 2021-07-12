import React from "react";
import PropTypes from 'prop-types';
import { useTable } from "react-table";
import MaUTable from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: '#d3d3d3',
    },
  },
}))(TableRow);


const Ingredients = ({ detected }) => {
  const data = React.useMemo(() => detected, [detected]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "INGREDIENT",
        accessor: "name",
      },
      {
        Header: "CHANCE",
        accessor: "value",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState: { hiddenColumns: ["id"] } });

  return (
    <>
      {" "}
      {detected.length > 0 && (
        <TableContainer component={Paper}>
          <MaUTable {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <StyledTableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <StyledTableCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </MaUTable>
        </TableContainer>
      )}
    </>
  );
};

Ingredients.propTypes = {
  detected: PropTypes.array.isRequired,
};


export default Ingredients;
