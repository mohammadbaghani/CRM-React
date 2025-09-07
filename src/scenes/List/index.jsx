import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataList } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import "./index.css";
const List = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ne, setNe] = useState(mockDataList);
  const columns = [
    {
      field: "phone",
      headerName: "تعداد",
      flex: 1,
    },
    {
      field: "age",
      headerName: "ویرایش تعداد" ,
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px" > <button className="pluse"
              onClick={() => addnumber(params.row.id)}>*
            </button>      <button className="pluse"
              onClick={() => minus(params.row.id)}>%
            </button>
            <button className="pluse zero"
              onClick={() => zero(params.row.id)}>0
            </button>       <button className="pluse"
              onClick={() => ten(params.row.id)}>+
            </button>
            <button className="pluse"
              onClick={() => self(params.row.id)}>You
            </button>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "نام کارخانه",
      type: "number",
      headerAlign: "center",
      align: "center",
 
    },

    {
      field: "cost",
      headerName: "قیمت",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "تاریخ خرید",
      flex: 1,
    },
    {
      field: "name",
      headerName: "نام کالا",
      flex: 1,
      cellClassName: "name-column--cell",
    }
  ];



  function addnumber(b) {
    const dd = ne.find(x => x.id === b);
    if (dd) {
      dd.phone = dd.phone * 2
    }
  }

  function self(yy) {
    const number = Number(prompt("لطفا تعداد مورد نظرتان را وارد نمایید"));
    if (typeof number === "number") {
      const ttt = ne.find(x => x.id === yy);
      if (ttt) {
        ttt.phone = number
      }
    }
    else {
      alert('عدد وارد نمایید')

    }
  }


  function minus(vv) {
    const jj = ne.find(x => x.id === vv);
    if (jj) {
      jj.phone = jj.phone / 2
    }
  }

  function ten(yy) {
    const ttt = ne.find(x => x.id === yy);
    if (ttt) {
      ttt.phone = Number(ttt.phone) + 10
    }
  }


  function zero(hh) {
    const person = ne.find(x => x.id === hh);
    if (person) {
      person.phone = 0
    }
  }


  const remove = xx => {
    setNe(ne.filter(x => x.id != xx))
  }



  return (
    <Box m="20px">
      <Header title="" subtitle="لیست کالاهای موجودی انبار" />
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataList} columns={columns} />
      </Box>
    </Box>
  );
};

export default List;
