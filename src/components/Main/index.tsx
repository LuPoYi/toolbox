import { styled } from '@mui/material/styles';

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
  drawer_width: number
}>(({ theme, open, drawer_width }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawer_width}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export default Main
