import React, { useState } from "react";
import { Button, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import { passwordGenerator } from "./util";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const btnClicked = () => {
    setGeneratedPassword(passwordGenerator());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    toggleShowCopyMessage();
  };

  const toggleShowCopyMessage = () => {
    setShowCopiedMessage((val) => !val);
  };

  return (
    <>
      <Button variant="contained" onClick={btnClicked}>
        Generate Password
      </Button>
      <TextField
        id="outlined-basic"
        label="generated password"
        value={generatedPassword}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton onClick={copyToClipboard}>
              <ContentCopyRoundedIcon />
            </IconButton>
          ),
        }}
      />
      <Snackbar
        open={showCopiedMessage}
        onClose={toggleShowCopyMessage}
        autoHideDuration={2000}
      >
        <Alert onClose={toggleShowCopyMessage} severity="info">
          Password Copied!
        </Alert>
      </Snackbar>
    </>
  );
};
export default PasswordGenerator;
