import './App.css';
import Header from './Mycomponents/Header';
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      decs: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      decs: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the collage",
      decs: "You need to go to the market to get this job done3"
    },
  ]
  return (
    <>
    <Header title="My todos list" searchbar={true}/>
    <Todos Todos={Todos}/>
    <Footer/>
  </>
  );
}

export default App;
