// import { Route, Routes } from "react-router-dom";
// import PageRender from "./PageRender";
// import Index from "./pages/index";
// import useAuthStore from "./data/Stores/Authstore";
// import Home from "./screens/home";
// import { ToastContainer } from "react-toastify";
// import Sidebar from "./components/sidebar/Sidebar";
// import Navbar from "./components/navbar/Navbar";

// // import { clearErrors } from "./data/Reducers/ErrorReducer";

// const Routers = () => {
//   const { isAuth } = useAuthStore();

//   return (
//     <>
//       <ToastContainer position="bottom-left" />

//       <Routes>
//         <Route
//           path="/"
//           element={!isAuth ? <Index /> : <Home />}
//         />
//         <Route
//           path="/:page"
//           element={<PageRender />}
//         />
//         <Route
//           path="/:page/:id"
//           element={<PageRender />}
//         />
//         <Route
//           path="/:page/:id/:step"
//           element={<PageRender />}
//         />
//       </Routes>
//     </>
//   );
// };

// export default Routers;

import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageRender from "./PageRender";
import Home from "./screens/home.jsx";
import Index from "./pages/index";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const Routers = () => {
  const location = useLocation(),
    { error, auth } = useSelector((state) => state),
    dispatch = useDispatch();
  console.log(location);

  return (
    <>
      <ToastContainer position="bottom-center" />
      <Sidebar auth={auth}>
        {auth.isAuth && (
          <div>
            <Navbar />
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={auth?.isAuth ? <Index /> : <Home />}
          />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/:page"
            element={<PageRender />}
          />
          <Route
            path="/:page/:id"
            element={<PageRender />}
          />
          <Route
            path="/:page/:id/:step"
            element={<PageRender />}
          />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Routers;
