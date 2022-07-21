import { Typography, AppBar, Toolbar, Box } from "@mui/material";

const Header = () => {
  return(
    <AppBar position="static" color="default">
      <Toolbar variant="regular">
        <Box
          component="img"
          sx={{
          height: 50,
          width: 120,
          margin: 1
          }}
          alt="HRM Logo"
          src={'dist/assets/HRM_logo.png'}
        />
        <Typography align="center">Adicionar novo paciente</Typography>
      </Toolbar>
    </AppBar>
  );
}

const Footer = () => <Typography align="center">Após 5 minutos o sistema é atualizado - HRM 2022</Typography>

export { Header, Footer };
