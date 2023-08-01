import { styled } from '@mui/material/styles';
import {Table,Paper,TableRow,TableHead,TableContainer ,TableCell,tableCellClasses,TableBody }from '@mui/material';
import { BorderColor, ToggleOn, Visibility } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(1, 91, 196, 0.10)',
    color: theme.palette.common.black,
    fontSize:12,
    StyledTableRow:80,
    fontWeight:600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontWeight:500
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FBFBFB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function TableForDepartmentList({row,page,searchKey}) {

  const [datas,setDatas] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const url = searchKey?`https://dummyjson.com/users/search?q=${searchKey}`:`https://dummyjson.com/users?limit=${row}&skip=${row*(page-1)}`;
      const res = await axios.get(url);
      // console.log(res.data.users);
      setDatas(res.data.users)
    }
    getData();
  },[setDatas,row,page,searchKey])
  // console.log(datas)
  return (
    // style={{height:"90%"}}
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{height:10}}>
            <StyledTableCell sx={{width:"3rem"}}>S No.</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}} >Department Name</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}} >Department Address</StyledTableCell>
            <StyledTableCell sx={{width:"8.6rem"}} >Total number of domain</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}}>Date Added</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data,index) => (
            <StyledTableRow key={index} sx={{height:-1}}>
              <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell style={{color:'#015BC4',textDecoration:'underline'}} >{data.firstName}</StyledTableCell>
              <StyledTableCell >{data.lastName}</StyledTableCell>
              <StyledTableCell >{((data.age).toString())[0]}</StyledTableCell>
              <StyledTableCell >{data.birthDate}</StyledTableCell>
              <StyledTableCell >{<BorderColor/>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<Visibility/>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<ToggleOn sx={{color:"rgba(112, 182, 115, 1)"}}/>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

