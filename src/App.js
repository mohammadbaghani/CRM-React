import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import B from "./scenes/Product";
import Customers from "./scenes/Customers";
import List from "./scenes/List";
import Form from "./scenes/form";
import Questions from "./scenes/Questions";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import "./index.css";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Customers" element={<Customers />} />
              <Route path="/List" element={<List />} />
              <Route path="/form" element={<Form />} />      
          
              <Route path="/Questions" element={<Questions />} />
              <Route path="/calendar" element={<Calendar />} />          
              <Route path='/product/:productID' element={<B/>} />
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
