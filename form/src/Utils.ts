import axios from "axios";

const location = () => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) });
}

const login = () => {
    return axios.post('https://generic-api-nodejs-sequelize.herokuapp.com/users/login', {
      email: 'rhuan_os@hotmail.com',
      password: '12345678'
    })
/*     .then((response) => {
      return response.data.token;
/*       axios.get('https://generic-api-nodejs-sequelize.herokuapp.com/users', { headers: { authorization: TOKEN } })
        .then((response) => {
            let user = response.data.filter((users: any) => {
              return users;
            });
            console.log(user); */
//            axios.delete(`https://generic-api-nodejs-sequelize.herokuapp.com/users/${user[0].id}`, {
//              headers: {
//                authorization: TOKEN
//              }
//            })
//            .then(() => console.log("Usuário deletado"))
//            .catch(() => console.log("Não foi possível deletar o usuário"));  
/*           })
        .catch(() => { console.log("Não foi possível carregar a lista de usuários") }) */
/*       })
    .catch(() => { 
      console.log("Não foi possível realizar o login"); 
    });
    console.log(TOKEN);
    return TOKEN; */
}

const formatDate = (date: string) => {
  let calendar = {
    time: '',
    date: '',
  };
  const splittedValues = date.split("T");
  calendar.time = formatTime(splittedValues[1] as any);
  const splittedDate = splittedValues[0].split("-");
  calendar.date = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  return calendar;
}

const formatTime = (time:string) => {
  const splittedTime = time.split(":");
  return `${splittedTime[0]}:${splittedTime[1]}`;
};

export { location, login, formatDate };

//linha 19 .id === 38