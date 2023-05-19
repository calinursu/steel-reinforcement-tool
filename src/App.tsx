import Canvas from "components/Canvas";
import Drag from "drawings/Drag";
import Grid from "drawings/Grid";
import Line from "drawings/Line";
import Measurements from "drawings/Measurements";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="canvas-container">
        <Canvas drawing={Line} />
        <Canvas drawing={Measurements} />
        <Canvas drawing={Grid} />
        <Canvas drawing={Drag} />
      </div>
    </div>
  );
}

export default App;
