import logo from './logo.svg';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <AuthContextProvider>
    <Navigation/>
  </AuthContextProvider>
  );
}

export default App;
