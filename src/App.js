import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { passwordGenerator } from "./util";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const btnClicked = () => {
    setGeneratedPassword(passwordGenerator());
  };

  return (
    <>
      <Button variant="contained" onClick={btnClicked}>
        Generate Password
      </Button>
      <TextField
        id="outlined-basic"
        label="password"
        value={generatedPassword}
        variant="outlined"
      />
    </>
  );
}

export default App;
