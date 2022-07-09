import { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { location, login } from "../Utils";

const CustomForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [document, setDocument] = useState("")
  const [risk, setRisk] = useState("")
  
  useEffect(() => {
    // login();
    location();
  }, []);

  interface InputBoxTypes {
    children: JSX.Element
  };

  const InputBox = ({children}: InputBoxTypes): JSX.Element => {
    return(
      <Grid 
        container 
        alignItems="center" 
        flexDirection="column" 
        style={{ margin: "10px 0px" }}
      >
        {children} 
      </Grid>
    );
  }

  return(
    <Grid container justifyContent="center">
      <Grid container item md={3} flexDirection="column">
        <InputBox>
          <>
            <Typography>Nome:</Typography>
            <TextField placeholder="Nome" value={name} onChange={(event) => {setName(event.target.value)}} />
          </>
        </InputBox>
        <InputBox>
          <>
            <Typography>Idade:</Typography>
            <TextField placeholder="Idade" value={age} onChange={(event) => {setAge(event.target.value)}} />
          </>
        </InputBox>
        <InputBox>
          <>
            <Typography>Endereço:</Typography>
            <TextField placeholder="Endereço" value={address} onChange={(event) => {setAddress(event.target.value)}} />
          </>
        </InputBox>
        <InputBox>
          <>
            <Typography>Documento:</Typography>
            <TextField placeholder="Documento" value={document} onChange={(event) => {setDocument(event.target.value)}} />
          </>
        </InputBox>
        <InputBox>
          <>
            <Typography>Risco:</Typography>
            <TextField placeholder="Risco" value={risk} onChange={(event) => {setRisk(event.target.value)}} />
          </>
        </InputBox>
        <InputBox>
          <Button 
            variant="outlined" 
            onClick={() => {console.log(name, age, address, document, risk)}}
          >
            Enviar
          </Button>
        </InputBox>
      </Grid>
    </Grid>
  );
}

export { CustomForm };