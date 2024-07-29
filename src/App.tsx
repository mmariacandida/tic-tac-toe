
import './App.css'
const Square = ({value}) => {
  const valor = value ?? "-";

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
    <button className="square">
      {valor}
    </button>
  );
};
const App = () => {
  return (
    <>
    <div className="board-row">
      <Square value="X"/>
      <Square value="6"/>
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
