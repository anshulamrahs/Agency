
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <About/>
      <Work/>
      <Services/>
    </div>
  );
}

export default App;
