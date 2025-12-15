import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../data/Context";

const Index = () => {
  const { sidebarList } = useContext(GlobalState);
  console.log(sidebarList);
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate, sidebarList]);
  return <></>;
};

export default Index;
