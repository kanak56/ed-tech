import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
    </div>
  );
}

export default App;
