import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface PropsTypes {
  showPassword: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  register: UseFormRegister<FieldValues>;
}

export default function PasswordFiled({
  showPassword,
  handleClick,
  register,
}: PropsTypes) {
  return (
    <>
      <TextField
        required
        id="password"
        type={showPassword ? "text" : "password"}
        autoComplete="password"
        label="Password"
        sx={{ mt: 2 }}
        {...register("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
