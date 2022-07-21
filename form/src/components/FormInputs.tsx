import { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { location, login } from "../Utils";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const riskColors = ["Azul", "Verde", "Amarelo", "Laranja", "Vermelho"];

const CustomForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [document, setDocument] = useState("")
  const [risk, setRisk] = useState("")
  
  useEffect(() => {
    login();
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sexo:</FormLabel>
          <RadioGroup
            defaultValue="non-declared"
            name="gender-select"
          >
            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
            <FormControlLabel value="other" control={<Radio />} label="Outros" />
            <FormControlLabel value="non-declared" control={<Radio />} label="Prefiro não declarar" />
          </RadioGroup>
        </FormControl>
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
            {/* <TextField placeholder="Risco" value={risk} onChange={(event) => {setRisk(event.target.value)}} /> */}            
            <Box sx={{ minWidth: 223 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Risco</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={risk}
                  label="Risk"
                  onChange={(event) => {setRisk(event.target.value)}}
                >
                  {riskColors.map((color) => (
                    <MenuItem value={color} key={color}>{color}</MenuItem> 
                  ))};
                </Select>
              </FormControl>
            </Box>
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