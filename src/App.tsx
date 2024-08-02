
import { useState } from 'react';
import './App.css'
const Square = () => {
  const [valor, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  // function App() {
  //     return(
  //     <div>
  //       <h1>titulo</h1>
  //       <button className="square">X</button>
  //     </div>
  //     )
  //   }
  // let valor;
  // const Square = (props) => {
  //   //const valor = props.value ?? "-";
  //   if (props.value) {
  //     valor = props.value;
  //   } else {
  //     valor = "-";
  //   }
  //   return(<button className="square">{props.value}</button>);
  // }
  return (
    <button className="square" onClick={handleClick}>
      {valor}
    </button>
  );
};
const App = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App
