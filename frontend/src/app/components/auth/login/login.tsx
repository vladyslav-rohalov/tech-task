import { useForm } from "react-hook-form";
import { FormControl, Button, TextField } from "@mui/material";
import PasswordFiled from "../passwordField/passwordField";
import { FormData } from "@/app/utils/interfaces";

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  handleLogin: (formData: FormData) => void;
  handleShowPassword: (event: React.MouseEvent<HTMLElement>) => void;
  showPassword: boolean;
}

export default function Login({
  toggleAuth,
  handleLogin,
  showPassword,
  handleShowPassword,
}: PropsTypes) {
  const { register, handleSubmit } = useForm();

  return (
    <FormControl
      sx={{ display: "flex", width: "100%" }}
      component="form"
      onSubmit={handleSubmit(({ email, password }) =>
        handleLogin({ email, password })
      )}
    >
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
        sx={{ mt: 2, height: 48, bgcolor: "primary.light" }}
        type="submit"
      >
        Log In
      </Button>
      <Button type="button" sx={{ mt: 2, height: 48 }} onClick={toggleAuth}>
        Register
      </Button>
    </FormControl>
  );
}
