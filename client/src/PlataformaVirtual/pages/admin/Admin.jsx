

import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Table, TableBody, TableCell, TableContainer,
        TablePagination, TableRow, Paper, Checkbox,
        FormControlLabel, Switch } from '@mui/material';

import { UserContext } from '../../context/UserContext';
import { NavBar } from '../../../ui/components/NavBar/NavBar';

import { EnhancedTableHead, EnhancedTableToolbar } from './components'

import { getComparator, stableSort } from './helpers'
import { useAdminTable } from './hooks/useAdminTable';



export const Admin = () => {
  const navigate = useNavigate();
  const { isAdmin, logOutUser, userData, loged } = useContext(UserContext);

  const { order, orderBy, selected, page,
          dense, rowsPerPage, handleRequestSort,
          handleChangeDense, handleSelectAllClick,
          handleChangePage, handleChangeRowsPerPage,
          handleClick, isSelected, emptyRows, rowsData,
          handleOnDeleteUsers } = useAdminTable();

  
  
  useEffect(() => {
    if (!loged) {
      navigate('/login')
    } else if (!isAdmin()) {
      navigate('/menuInicial')
    }
  }, [loged])

  useEffect(() => {
    
  }, [rowsData])
  
  
  { !rowsData && !isAdmin && <></> }
  return (
    <>
    <NavBar nombreUsuario={userData.nombre} onLogOut={logOutUser} />
    <Box sx={{ width: '100%', mt: 6 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} onDeleteUsers={ handleOnDeleteUsers } />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rowsData.length}
            />
            <TableBody>
              {stableSort(rowsData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.cedula);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.cedula)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.cedula}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.cedula}
                      </TableCell>
                      <TableCell align="left">{row.nombre}</TableCell>
                      <TableCell align="left">{row.tipo}</TableCell>
                      
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          labelRowsPerPage="Filas por página"
          labelDisplayedRows={
            ({ from, to, count }) => {
              return '' + from + '-' + to + ' de ' + count
            }
          }
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rowsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Paper>

      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Hacer la tabla más densa"
      />

    </Box>    
    </>
  );
}