import { Typography, AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return(
    <AppBar position="static">
      <Toolbar variant="regular">
        <Typography variant="h5" align="center">HRM</Typography>
        <Typography align="center">Adicionar novo paciente</Typography>
      </Toolbar>
    </AppBar>
  );
}

const Footer = () => <Typography align="center">Após 5 minutos o sistema é atualizado - HRM 2022</Typography>

export { Header, Footer };
