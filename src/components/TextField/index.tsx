import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export function TextField({ sx, ...props }: TextFieldProps) {
  return (
    <MuiTextField
      sx={{
        "& label": {
          color: "white",
        },
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInputBase-root": {
          color: "white",
          backgroundColor: "#31343A",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
}
