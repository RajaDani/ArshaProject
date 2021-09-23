import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MainComponent from './ArshaProject/Components/MainComponent';

function App() {

  return (
    <BrowserRouter>
    <div className="App pb-5">     
          <MainComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;