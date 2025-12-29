
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { DarkModeProvider } from './context/DarkModeContext';
import "./App.css"



function App() {
  return (
    <DarkModeProvider>
      <div id='app-container'>
          <Nav/>
        <Home/>
      
        
      </div>
    </DarkModeProvider>
  );
}

export default App;
