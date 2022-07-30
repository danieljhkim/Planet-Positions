import Canvas from './components/canvas/index';
import Navigation from './components/navigation/index';
import Footer from './components/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="App">
        <Navigation></Navigation>
        <Canvas></Canvas>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
