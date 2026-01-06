import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import B from "./scenes/Product";
import Customers from "./scenes/Customers";
import List from "./scenes/List";
import Form from "./scenes/form";
import Questions from "./scenes/Questions";
import { CssBaseline, ThemeProvider, useMediaQuery, Drawer, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import "./index.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
      setIsCollapsed(true);
    } else if (isTablet) {
      setIsSidebarOpen(true);
      setIsCollapsed(true);
    } else {
      setIsSidebarOpen(true);
      setIsCollapsed(false);
    }
  }, [isMobile, isTablet]);

  const handleSidebarToggle = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleSidebarClose = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* Desktop/Tablet Sidebar */}
          {!isMobile && (
            <Sidebar 
              isSidebarOpen={isSidebarOpen}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              onToggle={handleSidebarToggle}
            />
          )}
          
          {/* Mobile Drawer */}
          {isMobile && (
            <Drawer
              anchor="right"
              open={isSidebarOpen}
              onClose={handleSidebarClose}
              variant="temporary"
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  width: 280,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Sidebar 
                isSidebarOpen={isSidebarOpen}
                isCollapsed={false}
                setIsCollapsed={setIsCollapsed}
                onToggle={handleSidebarToggle}
                onClose={handleSidebarClose}
                isMobile={true}
              />
            </Drawer>
          )}

          <main className={`content ${!isMobile && isCollapsed ? 'collapsed' : ''}`}>
            <Topbar 
              onMenuClick={handleSidebarToggle}
              isMobile={isMobile}
            />
            <Box onClick={isMobile && isSidebarOpen ? handleSidebarClose : undefined}>
             <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Customers" element={<Customers />} />
              <Route path="/List" element={<List />} />
              <Route path="/form" element={<Form />} />      
          
              <Route path="/Questions" element={<Questions />} />
              <Route path="/calendar" element={<Calendar />} />          
              <Route path='/product/:productID' element={<B/>} />
            </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;