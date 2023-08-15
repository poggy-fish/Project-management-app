// import Nav from "./views/nav/index";
// import HomePage from "./views/homePage";
// import Footer from "./footer/index";
// function App() {
//   return (
//     <div style={{ background: '#f5f9ff', minHeight: '100vh'}}>
//       <Nav />
//       <HomePage />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./views/homePage/index";
import Nav from './views/nav/index';
import Footer from './views/footer/index';
import Dashboard from "./views/dashboardPage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.user)); //using state.user insteadof state.token for now to authorize login

  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Routes>
            <Route path={"/"} element={ isAuth ? <Dashboard /> : <HomePage /> } />
            <Route
              path="/dashboard"
              element={isAuth ? <Dashboard /> : <Navigate to="/" />}
            />
            {/* <Route
              path="/profile/:userId"
              element={isAuth ? <Dashboard /> : <Navigate to="/" />}
            /> */}
          </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;