import Sidebar from './components/sidebar/Sidebar'
// import RightContainer from './components/rightcon/RightContainer';
// import {useState} from 'react'
// import Header from './components/rightcon/header/Header'
import './app.css'
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  // const [titleState, setState] = useState("")
  return (
    <div className="main-container">
      <Sidebar />
    </div>
  );
}
export default App;