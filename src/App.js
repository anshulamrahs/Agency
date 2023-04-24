
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
      innerSize={12}
      outerSize={10}
      color='97, 237, 135'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={4}
      />
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
