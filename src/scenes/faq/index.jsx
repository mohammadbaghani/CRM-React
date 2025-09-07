import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import "./index.css";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="" subtitle="راهنمای استفاده از نرم افزار مدیریت مشتریان ساینا" className="aco-title" />
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} className="aco-title" variant="h5">
            چگونه تعداد کالا ها را کم یا زیاد کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            به بخش موجودی انبار بروید
            <br>
            </br>
            z    صفر = تعداد کالا
            <br>
            </br>
            +    به علاوه ده = تعداد کالا
            <br>
            </br>
            *  ضربدر ده = تعداد کالا

            <br>
            </br>
            %   تقیسم بر ده = تعداد کالا
            <br>
            </br>
            *  ضربدر ده = تعداد کالا
            <br>
            </br>
            S   خودتان انتخاب می کنید = تعداد کالا
          </Typography>
        </AccordionDetails>
      </Accordion>   <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} className="aco-title" variant="h5">
            برای ثبت رویدادها
            از کدام قسمت وارد شوم؟          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            به بخش ثبت رویداد ها بروید
            <br>
            </br>
            یک روز از تقویم را انتخاب نمایید
            <br>
            </br>
            نام رویداد را وارد نمایید
            <br>
            </br>
            ok را بزنید
            <br>
            </br>
            🙂 حالا رویداد شما با تاریخ آن ثبت شده است
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} className="aco-title" variant="h5">
            چگونه به لیست مشتریان مشتری جدید اضافه کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            به این مسیر بروید
            در پنل مشتریان با کلیک روی مشتری جدید
            می توانید مشتری جدید را اضافه نمایید
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} className="aco-title" variant="h5">
            در کدام قسمت جزئیات بیشتری از مشتریان را می توانم ببینم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            در پنل مشتریان روی اطلاعات بیشتر کلیک نمایید
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
