import './App.css';
import FirstComponent from './components/firstComponent/FirstComponent';

const App=()=> {
  return (
    <div className="App">
       <h1>Hello React</h1>
       <FirstComponent />
       <FirstComponent />
       <FirstComponent />
       <FirstComponent />
    </div>
  );
}

export default App;
