

import { useState, useEffect } from "react";

import { getUsersData } from '../data'
import { deleteUser } from '../helpers'


export const useAdminTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rowsData, setRowsData] = useState([]);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rowsData.map((n) => n.cedula);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, cedula) => {
      const selectedIndex = selected.indexOf(cedula);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, cedula);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
  
    const handleOnDeleteUsers = () => {
      try {
        //Se elimina de la base de datos
        selected.forEach((ced) => {
          deleteUser(ced);
        })
        //Se actualiza el arreglo de usuarios
        const newData = rowsData.filter( ({cedula}) => !selected.includes(cedula) )
        setRowsData(newData);
        setSelected([]);

      } catch (error) {
        console.log(error);
      }  
    }
    
    const isSelected = (cedula) => selected.indexOf(cedula) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;

    
    useEffect(() => {
  
      getUsersData(setRowsData);
      
    }, [])


    return {
        order,
        orderBy,
        selected,
        page,
        dense,
        rowsPerPage,
        handleRequestSort,
        handleChangeDense,
        handleSelectAllClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleClick,
        isSelected,
        emptyRows,
        rowsData,
        handleOnDeleteUsers
    }
}
