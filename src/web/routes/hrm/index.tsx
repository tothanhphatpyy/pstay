import React from "react";
import { Route, Routes } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";

const HRMLayout = () => {
  return (
    <Routes>
      <Route path="employees" element={<SplitLogin />} />
    </Routes>
  );
};

export default HRMLayout;
