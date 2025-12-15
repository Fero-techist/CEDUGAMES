/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";
import useAuthStore from "./Stores/Authstore";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  let handleCapitalize = (word) => {
    let splitter = word.trim().split(" ");
    let firstCap = splitter[0].split("");
    let remaining = splitter.slice(1, splitter.length).join(" ");

    let firstCapOne = firstCap[0].toUpperCase();
    let firstCapTwo = firstCap.slice(1, firstCap.length).join("");

    let joinFirst = `${firstCapOne}${firstCapTwo}`;

    return `${joinFirst} ${remaining}`;
  };

  let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  let { isAuth } = useAuthStore();

  let sidebarList = [];

  let [stateName, setStateName] = useState("");

  let nairaSign = <span className="fontInherit">&#8358;</span>;
  let nairaSignNeutral = "₦";

  const state = {
    handleCapitalize,

    numberWithCommas,

    sidebarList,
    auth: isAuth,
    nav,
    toggleNav,
    stateName,
    setStateName,
    nairaSign,
    nairaSignNeutral,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
