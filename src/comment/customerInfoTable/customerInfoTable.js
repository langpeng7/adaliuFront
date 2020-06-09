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
import axios from 'axios';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import Format  from '../../common/format';

const columns = [
  { id: 'name', 
    label: '姓名', 
    minWidth: 110 
  },
  {
    id: 'code',
    label: '预约码',
    minWidth: 100,

  },
  { id: 'job', 
    label: '工作', 
    minWidth: 80 
  },
  {
    id: 'address',
    label: '住址',
    minWidth: 170,

  },
  {
    id: 'homeName',
    label: '设施',
    minWidth: 170,
  },
];

let rows = [

];

getVistors()
function getVistors(){
    axios.get('/api/list')
    .then(function (response) {
        rows = response.data.data
    })
    .catch(function (error) {
      console.log(error);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event+event.target.value);
    setPage(0);
  };
  const [selectedDateBegin, setSelectedDateBegin] = React.useState(new Date((new Date().getTime() - 86400000*30*6)));
  const handleDateChangeBegin = (date) => {
    setSelectedDateBegin(date);
  };

  const [selectedDateEnd, setSelectedDateEnd] = React.useState(new Date());
  const handleDateChangeEnd = (date) => {

    setSelectedDateEnd(date);
    if(date-selectedDateBegin>=0){
      let bgTemp = Format.dateFormat(selectedDateBegin)
      let edTemp = Format.dateFormat(date)
      rows = []
      axios.get('/api/list',{
        params: {
          bgTime: bgTemp,
          edTime: edTemp
        }
      })
      .then(function (response) {
          console.log(response)
          rows = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      })
 
    }

  };

  return (
    <Paper className={classes.root}>
<MuiPickersUtilsProvider utils={DateFnsUtils} >
    <Grid container justify="flex-start" >
        <Grid item xs={3}>
            <KeyboardDatePicker 
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