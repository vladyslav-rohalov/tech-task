import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormControl, Button, TextField } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";
import PasswordFiled from "../passwordField/passwordField";
import { FormData } from "@/app/utils/interfaces";

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  handleRegister: (formData: FormData) => void;
  showPassword: boolean;
  handleShowPassword: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Registration({
  toggleAuth,
  handleRegister,
  showPassword,
  handleShowPassword,
}: PropsTypes) {
  const { register, handleSubmit, control } = useForm();

  return (
    <FormControl
      sx={{ display: "flex", width: "100%" }}
      component="form"
      onSubmit={handleSubmit(({ name, email, role, password }) =>
        handleRegister({ name, email, role, password })
      )}
    >
      <InputLabel id="role-selector">Role</InputLabel>
      <Controller
        control={control}
        name="role"
        defaultValue="Author"
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value}
            labelId="role-selector"
            id="role-selector"
            sx={{ mb: 2 }}
          >
            <MenuItem value={"Author"}>Author</MenuItem>
            <MenuItem value={"Commentator"}>Commentator</MenuItem>
          </Select>
        )}
      />
      <TextField
        required
        id="name"
        label="Name"
        type="text"
        {...register("name")}
      />
      <TextField
        required
        id="email"
        label="Email"
        sx={{ mt: 2 }}
        type="email"
        {...register("email")}
      />
      <PasswordFiled
        showPassword={showPassword}
        handleClick={handleShowPassword}
        register={register}
      />

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
