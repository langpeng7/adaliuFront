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
import intl from 'react-intl-universal';
import { blue } from '@material-ui/core/colors';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {excelUtil,initColumn} from '../../common/excelExp.js';
console.log(initColumn)
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
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}));

export default function CustomerInfoTable() {
  const classes = useStyles();
  const columns = [
    { id: 'name', 
      label: intl.get('bac9'), 
      minWidth: 110 
    },
    {
      id: 'code',
      label: intl.get('bac33'),
      minWidth: 100,
  
    },
    { id: 'job', 
      label: intl.get('bac11'), 
      minWidth: 80 
    },
    {
      id: 'address',
      label: intl.get('bac13'),
      minWidth: 170,
  
    },
    {
      id: 'constructionId',
      label: intl.get('bac31'),
      minWidth: 150,
    },
    {
      id: 'visitorTime',
      label: intl.get('bac46'),
      minWidth: 100,
    },
  ];
  const [rows,setRows] = React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [construct, setConstruct] = React.useState('');
  const [houseList,setHouseList] = React.useState([]);
  useEffect(() => {	
    axios.get('/api/list')
    .then(function (response) {
   
      setRows(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get('/api/houseList')
    .then(function (response) {
      setHouseList(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    })

  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  //时间下拉
  const [selectedDateBegin, setSelectedDateBegin] = React.useState(new Date((new Date().getTime() - 86400000*30*6)));
  const [selectedDateEnd, setSelectedDateEnd] = React.useState(new Date());

  const handleDateChangeBegin = (date) => {

    setSelectedDateBegin(date);
    if(selectedDateEnd-date >= 0){
      let bgTemp = Format.dateFormat(date)
      let edTemp = Format.dateFormat(selectedDateEnd)
 
      axios.get('/api/list',{
        params: {
          bgTime: bgTemp,
          edTime: edTemp,
          constructionId:construct
        }
      })
      .then(function (response) {
           setRows(response.data.data);

      })
      .catch(function (error) {
        console.log(error);
      })
 
    }else{
      alert("起始时间需小于结束时间")
    }
  };


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
           setRows(response.data.data);

      })
      .catch(function (error) {
        console.log(error);
      })
 
    }else{
      alert("起始时间需小于结束时间")
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
          setRows(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
 
    }
  };


  
  function visitorDetail (e){

    setVisitorId(e)
    setOpen(true);
 
  }

  const detailList = [{type:'detail',name:'详情'}, {type:'edit',name:'编辑'},{type:'delete',name:'删除'}];

  const [open, setOpen] = React.useState(false);
  const [visitorId, setVisitorId] = React.useState();
  const [selectedValue, setSelectedValue] = React.useState(detailList[1]);
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      if(value.type=="detail"){
        window.open("/#/visitorDetail?visitorId="+visitorId);
      }
      if(value.type=="delete"){
        const params ={
          visitorId: visitorId
        }
        axios({
          method: 'post',
          url: '/api/delete',
          headers: {
            'Content-Type':'application/json'
          },          
          data: JSON.stringify(params)
     
        })
        .then(function (response) {
          let bgTemp = Format.dateFormat(selectedDateBegin)
          let edTemp = Format.dateFormat(selectedDateEnd)
     
          axios.get('/api/list',{
            params: {
              bgTime: bgTemp,
              edTime: edTemp,
            }
          })
          .then(function (response) {
              setRows(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          })
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      if(value.type=="edit"){
          window.open("/#/visitorEdit?visitorId="+visitorId);
      }
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <List>
          {detailList.map((email) => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email.type}>
              <ListItemText primary={email.name} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }

  return (
<Paper className={classes.root}>
  <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
  <Grid item  xs={12}>
    <Grid item xs={8}> 
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="flex-start" spacing={4}>
        <Grid item xs={4}>
            <KeyboardDatePicker 
                margin="normal"
                id="beginTime"
                label={intl.get('bac29')}
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
            label={intl.get('bac30')}
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
            {intl.get('bac31')}
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
                <em>{intl.get('bac32')}</em>
              </MenuItem>
              {houseList.map((hous) => {
               return( <MenuItem key={hous.houseId} value={hous.houseId}>{hous.houseName}</MenuItem>)
              })}
       
     
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}  style={{"lineHeight":"80px"}}>
          <Button variant="contained" style={{"marginLeft":"20px"}} color="primary" onClick={() => {excelUtil(initColumn, rows, "人员名单.xlsx") }}>
              导出
          </Button>

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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} value={row.id} onClick={()=>visitorDetail(row.id)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if(column.id=="constructionId"){
                      for( let cos in houseList){
                        if(houseList[cos].houseId==value){
                          return  (
                            <TableCell key={column.id} align={column.align}  >
                              {houseList[cos].houseName}
                            </TableCell>
                          );
                          
                         
                        }
                      }
                    }else{
                      return (
                        <TableCell key={column.id} align={column.align}  >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );


                    }
            
                
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,20,30]}
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