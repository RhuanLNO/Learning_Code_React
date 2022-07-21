import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { login, formatDate } from '../Utils';

/* interface DataTableTypes {
  id: number,
  name: string,
  email: string,
  createdAt: string,
} */

/* const mockedData = [
  {
    id: 1,
    name: "Teste",
    email: "4pdmurpga@gmail.com",
    createdAt: "2020-09-11T10:11:14.376Z",
  },
  {
    id: 3,
    name: "Teste",
    email: "Teste@teste.com",
    createdAt: "2020-02-09T05:08:02.826Z",
  },
]; */

const UserTable = () => {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await login();
      if(response) {
        const url = "https://generic-api-nodejs-sequelize.herokuapp.com/users";
        const usersList = await axios.get(url, { headers: { authorization: response.data.token }});
        setData(usersList.data);
      }
    }
    catch {console.log("Não foi possível pegar os dados")};
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data: { id: boolean | number | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) =>
            {
              const userDate = formatDate(data.createdAt as any);
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{data.id}</TableCell>
                  <TableCell align="right">{data.name}</TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">{`${userDate.time} ${userDate.date}`}</TableCell>
                </TableRow>
              )
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { UserTable };
