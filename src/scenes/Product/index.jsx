
import { Box } from "@mui/material";
import { mockDataCustomers } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import './Product.css'
export default function Product() {
  let params = useParams()

  const [ne, setNe] = useState(mockDataCustomers);
  let mm = ne.find(v => v.id == params.productID)
  return (
    <Box m="20px" className="customer">
      <Header
        title={mockDataCustomers.name}
        subtitle="مشخصات جزئی مشتری"
      />
      <p className="customer-name">
        نام مشتری :
        {mm.name}
      </p>
      <p>
        مدت اشتراک کارت فروشگاه :
        {mm.corelate}
      </p>
      <p>
        علاقه مند به خرید :
        {mm.favs}
      </p>
    </Box>
  );
};
