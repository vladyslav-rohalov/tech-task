import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PropsTypes {
  showPassword: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function PasswordFiled({
  showPassword,
  handleClick,
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
