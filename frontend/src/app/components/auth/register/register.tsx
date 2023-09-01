import { useState } from "react";
import { FormControl, Button, TextField } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";
import PasswordFiled from "../passwordField/passwordField";
import { SelectChangeEvent } from "@mui/material";
import { UserDataReg } from "@/app/utils/interfaces";

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  handleRegister: (userData: UserDataReg) => void;
  showPassword: boolean;
  handleShowPassword: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Registration({
  toggleAuth,
  handleRegister,
  showPassword,
  handleShowPassword,
}: PropsTypes) {
  const [role, setRole] = useState("");

  const handleChange = (e: SelectChangeEvent<string>): void => {
    setRole(e.target.value);
  };

  const onRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    const name = (formElements.namedItem("name") as HTMLInputElement).value;
    const email = (formElements.namedItem("email") as HTMLInputElement).value;
    const password = (formElements.namedItem("password") as HTMLInputElement)
      .value;

    const userData = { role, name, email, password };

    handleRegister(userData);
  };

  return (
    <FormControl
      sx={{ display: "flex", width: "100%" }}
      component="form"
      onSubmit={onRegister}
    >
      <InputLabel id="test-select-label">Role</InputLabel>
      <Select
        required
        labelId="test-select-label"
        id="test-select-label"
        value={role}
        label="Role"
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value={"Author"}>Author</MenuItem>
        <MenuItem value={"Commentator"}>Commentator</MenuItem>
      </Select>
      <TextField required id="name" label="Name" type="text" />
      <TextField
        required
        id="email"
        label="Email"
        sx={{ mt: 2 }}
        type="email"
      />
      <PasswordFiled showPassword={showPassword} handleClick={handleShowPassword} />

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2, height: 48, bgcolor: "primary.light" }}
      >
        Register
      </Button>
      <Button type="button" sx={{ mt: 2, height: 48 }} onClick={toggleAuth}>
        Log In
      </Button>
    </FormControl>
  );
}
