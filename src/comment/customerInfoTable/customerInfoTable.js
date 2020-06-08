import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import axios from 'axios';

const columns = [
  { id: 'code', 
  label: '预约码', 
  minWidth: 120 
  },
  { id: 'name', 
    label: '姓名', 
    minWidth: 80 
  },
  {
    id: 'population',
    label: '职业',
    minWidth: 80,

  },
  {
    id: 'size',
    label: '住址',
    minWidth: 200,

  },
  {
    id: 'density',
    label: '设施',
    minWidth: 60,

  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

function aaa(){
  axios({
    method: 'get',
    url: '/api/list'
  })
  .then(function (response) {
    console.log(response);
  })
}


const useStyles = makeStyles({
  root: {
    width: '80vw',
    padding:'1vw'
  },
  container: {
    maxHeight: 440,
  },
});

export default function CustomerInfoTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  aaa()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event+event.target.value);
    setPage(0);
  };
  const [selectedDateBegin, setSelectedDateBegin] = React.useState(new Date('2016-08-18T13:00:00'));
  const handleDateChangeBegin = (date) => {
    setSelectedDateBegin(date);
  };

  const [selectedDateEnd, setSelectedDateEnd] = React.useState(new Date());
  const handleDateChangeEnd = (date) => {
    setSelectedDateEnd(date);
  };

  return (
    <Paper className={classes.root}>
<MuiPickersUtilsProvider utils={DateFnsUtils} >
    <Grid container justify="flex-start" >
        <Grid item xs={3}>
            <KeyboardDatePicker 
                disableToolbar
                margin="normal"
                id="beginTime"
                label="起始时间"
                format="MM/dd/yyyy"
                value={selectedDateBegin}
                onChange={handleDateChangeBegin}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </Grid>
        <Grid item xs={3}>
            <KeyboardDatePicker
            margin="normal"
            id="endTime"
            label="结束时间"
            format="MM/dd/yyyy"
            value={selectedDateEnd}
            onChange={handleDateChangeEnd}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
    <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> 
    </Paper>
  );
}