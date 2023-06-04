import { Config } from '../src/component/Routers/Config';
import './App.css';
import { Footer } from './component/footer/Footer';

function App() {
  return (
    <>
      <div className='header'>
        <Config />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
