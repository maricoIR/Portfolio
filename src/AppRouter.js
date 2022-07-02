import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import "./index.css";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
