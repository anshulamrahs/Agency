
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <About/>
      <Work/>
    </div>
  );
}

export default App;
