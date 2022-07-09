import axios from "axios";

const location = () => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) });
}

const login = () => {
    axios.post('https://generic-api-nodejs-sequelize.herokuapp.com/users/login', {
      email: 'rhuan_os@hotmail.com',
      password: '12345678'
    })
    .then((response) => { 
      const TOKEN = response.data.token;
      axios.get('https://generic-api-nodejs-sequelize.herokuapp.com/users', { headers: { authorization: TOKEN } })
        .then((response) => {
            let user = response.data.filter((users: any) => {
              return users.id === 38;
            });
            console.log(user);
            axios.delete(`https://generic-api-nodejs-sequelize.herokuapp.com/users/${user[0].id}`, {
              headers: {
                authorization: TOKEN
              }
            })
            .then(() => console.log("Usuário deletado"))
            .catch(() => console.log("Não foi possível deletar o usuário"));  
          })
        .catch(() => { console.log("Não foi possível carregar a lista de usuários") })
      })
    .catch(() => { console.log("Não foi possível realizar o login") });
}

export { location, login };