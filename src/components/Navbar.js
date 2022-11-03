import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PasswordGenerator from "./PasswordGenerator";
import Home from "./Home";
import Dashboard from "./Dashboard";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("one");
  const handleChange = (e, tabValue) => {
    setCurrentTab(tabValue);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="fullWidth"
        centered
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="Dashboard" />
        <Tab value="three" label="Generate Password"></Tab>
      </Tabs>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        {currentTab === "one" && <Home />}
        {currentTab === "two" && <Dashboard />}
        {currentTab === "three" && <PasswordGenerator />}
      </Box>
    </>
  );
};

export default Navbar;
