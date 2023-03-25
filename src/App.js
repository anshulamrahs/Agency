
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
