import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';



function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
