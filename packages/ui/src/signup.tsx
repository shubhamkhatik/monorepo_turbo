import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const ariaLabel = { "aria-label": "description" };

export function Signup() {
  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="first name"
          inputProps={ariaLabel}
        />
        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="last name"
          inputProps={ariaLabel}
        />
        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="location"
          inputProps={ariaLabel}
        />
      </Box>
      <Button variant="contained">Submit</Button>
    </>
  );
}
