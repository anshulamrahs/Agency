
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <About/>
      <Work/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
