import { FormControl, Button, TextField } from "@mui/material";
import PasswordFiled from "../passwordField/passwordField";
import { UserDataLog } from "@/app/utils/interfaces";

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  handleLogin: (userData: UserDataLog) => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  showPassword: boolean;
}

export default function Login({
  toggleAuth,
  handleLogin,
  showPassword,
  handleClick,
}: PropsTypes) {
  const onLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    const email = (formElements.namedItem("email") as HTMLInputElement).value;
    const password = (formElements.namedItem("password") as HTMLInputElement)
      .value;
    const userData = { email, password };

    handleLogin(userData);
  };

  return (
    <FormControl
      sx={{ display: "flex", width: "100%" }}
      component="form"
      onSubmit={onLogin}
    >
      <TextField
        required
        id="email"
        label="Email"
        sx={{ mt: 2 }}
        type="email"
      />
      <PasswordFiled showPassword={showPassword} handleClick={handleClick} />
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
