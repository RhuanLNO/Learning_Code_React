import { CustomForm } from './components/FormInputs';
import { Header, Footer } from './components/FormComponents';
import { UserTable } from './components/UserTable';

const showTable = false;

const App = () => {
  return (
    <>
      <Header />
      {showTable ? <UserTable /> : <CustomForm />}      
      <Footer />
    </>
  );  
}

export default App
