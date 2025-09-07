import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import { Button } from "@material-ui/core";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { createContext } from 'react'
const Team = () => {
  const [ne, setNe] = useState(mockDataTeam);
  const [userinput, setUserinput] = useState('');
  const [useremail, setUseremail] = useState('');
  const [phone, setPhone] = useState('');
  const [favs, setFavs] = useState('');
  const [corelate, setCorelate] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const AppContext = createContext()
  const columns = [
    {
      field: "age",
      headerName: "حذف",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px" >
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => remove(params.row.id)} />

          </Box>
        );
      },
    },
    {
      field: "accessLevel",
      headerName: "جزئیات مشتری",
      flex: 1,

      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {ne.access}
            </Typography>
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            <Link to={`/Product/${params.row.id}`} className="linkto">
              اطلاعات بیشتر
            </Link>
            </Typography>
          
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "شماره تماس",
      flex: 1,
    },
    {
      field: "name",
      headerName: "نام",
      flex: 1,
      cellClassName: "name-column--cell",
    }, { field: "id", headerName: "آیدی" }

  ];
  const remove = xx => {
    setNe(ne.filter(x => x.id != xx))
    Swal.fire({
      title: '!مشتری حذف گردید',
      text: '',
      icon: "success",
      confirmButtonText: 'تایید'
    })
  }
  function todoTitleHandler(event) {
    setUserinput(event.target.value)
  }
  function emailh(event) {
    setUseremail(event.target.value)
  }
  function myphone(event) {
    setPhone(event.target.value)
  }



  function addTodo(event) {
    event.preventDefault()
    if (userinput, useremail, phone, corelate, favs) {

      let obj = {
        id: 12,
        name: userinput,
        email: useremail,
        age: 35,
        phone: phone,
        access: "admin",
        favs: favs,
        corelate: corelate
      }
      Swal.fire({
        title: '!مشتری جدید از انتهای لیست اضافه شد',
        text: '',
        icon: "success",
        confirmButtonText: 'تایید'
      })

      setUserinput('')
      setUseremail('')
      setPhone('')
      setFavs('')
      setCorelate('')
      setNe(prevState => {
        return [...prevState, obj]
      })
    }
    else {
      alert('تمامی فیلد ها را پر نمایید')
      setUserinput('')
      setUseremail('')
      setPhone('')
      setFavs('')
      setCorelate('')
    }
  }
  function favorites(event) {
    setFavs(event.target.value)

  }

  function corelattion(event) {
    setCorelate(event.target.value)

  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"  >
      <List >
        <div className="form-child">
          <form onSubmit={addTodo} className="all-todos">
            <input type="text" className="user-input" maxLength="40" placeholder='اسم' value={userinput} onChange={todoTitleHandler} />
            <input className="user-input" maxLength="40" placeholder='ایمیل' value={useremail} onChange={emailh} />
            <input className="user-input" maxLength="40" placeholder='شماره تماس ' value={phone} onChange={myphone} />
            <input className="user-input" maxLength="40" placeholder='علاقه مندی ' value={favs} onChange={favorites} />
            <input className="user-input" maxLength="40" placeholder='سابقه همکاری ' value={corelate} onChange={corelattion} />
            <button type="submit" className="btn">
              <Button variant="contained" onClick={toggleDrawer(anchor, false)}>ثبت فروشنده</Button>
            </button>    </form>
        </div>

      </List>

    </Box>
  );
  return (<>

    <Box m="20px">
      <Header title="" subtitle="لیست مشتریان ساینا تجارت افراز" className="ff" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }} >
        <DataGrid checkboxSelection rows={[...ne]} columns={columns} pageSize={8} />
      </Box>
    </Box>
    <div className="form-child">
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} variant="contained" className="vvv">مشتری جدید +</Button>
            <Drawer anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  </>
  );
};

export default Team;
