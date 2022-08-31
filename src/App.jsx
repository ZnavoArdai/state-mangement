import { useReducer } from "react";
import "./App.css";
import { ACTION } from "./store/actions/count-action";
import { reducer } from "./store/reducers/count-reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, input:"" });

  return (
    <div className="App">
      {state.input}
      {state.count}
      <button onClick={() => dispatch({ type: ACTION.UP })}>+</button>
      <button onClick={() => dispatch({ type: ACTION.DOWN })}>-</button>
      <button onClick={() => dispatch({ type: ACTION.REST })}>rest</button>
      <input onChange={(e)=>dispatch({type:ACTION.INPUT,payload:e.target.value})} type="text" />
    </div>
  );
}

export default App;
