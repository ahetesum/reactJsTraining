import './App.css';
import FirstComponent from './components/firstComponent/FirstComponent';

const App=()=> {


  return (
    <div className="App">
       <h1>Hello React</h1>
       <FirstComponent title="I am First Component" date={new Date(2022,2,28)} amount={550.00} />
    </div>
  );
}

export default App;
