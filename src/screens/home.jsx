import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";

const Index = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return <></>;
};

export default Index;
