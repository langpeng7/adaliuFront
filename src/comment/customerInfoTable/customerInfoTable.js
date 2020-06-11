import React,{ useState, useEffect }from 'react';
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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    id: 'constructionId',
    label: '设施',
    minWidth: 170,
  },
];



const useStyles = makeStyles((theme)=>({
  root: {

    padding:'1vw'
  },
  container: {
    height: 560,
  },
  formControl: {
    margin: theme.spacing(2),
    width: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function CustomerInfoTable() {
  const classes = useStyles();
  const [rows,setRows] = React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [construct, setConstruct] = React.useState('');
  useEffect(() => {	
    axios.get('/api/list')
    .then(function (response) {
      setRows(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);






  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  //时间下拉
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
 
      axios.get('/api/list',{
        params: {
          bgTime: bgTemp,
          edTime: edTemp,
          constructionId:construct
        }
      })
      .then(function (response) {
          console.log(response)
           setRows(response.data.data);

      })
      .catch(function (error) {
        console.log(error);
      })
 
    }

  };

  //设施下拉

  const handleChangeConstruction = (event) => {
    
    setConstruct(event.target.value);

    if(selectedDateEnd-selectedDateBegin>=0){
      let bgTemp = Format.dateFormat(selectedDateBegin)
      let edTemp = Format.dateFormat(selectedDateEnd)
 
      axios.get('/api/list',{
        params: {
          bgTime: bgTemp,
          edTime: edTemp,
          constructionId:event.target.value
        }
      })
      .then(function (response) {
          console.log(response)
           setRows(response.data.data);

      })
      .catch(function (error) {
        console.log(error);
      })
 
    }
  };
  return (
<Paper className={classes.root}>
  <Grid item  xs={10}>
    <Grid item xs={8}> 
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="flex-start" spacing={3}>
        <Grid item xs={4}>
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
    
        <Grid item xs={4}>
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
        <Grid item xs={3}>
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              设施
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={construct}
              onChange={handleChangeConstruction}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>全部</em>
              </MenuItem>
              <MenuItem value={1}>大阪府</MenuItem>
              <MenuItem value={2}>神奈川</MenuItem>
              <MenuItem value={3}>奈良县</MenuItem>
              <MenuItem value={4}>北海道</MenuItem>
     
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
    </Grid>

    </Grid>
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
        rowsPerPageOptions={[10,25,100]}
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