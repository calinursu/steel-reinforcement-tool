import paper from "paper";
import Drawing from "./Drawing";

export default function Drag(canvas: HTMLCanvasElement) {
  const shape = new Drawing(canvas);
  shape.draw();
  paper.view.onMouseDrag = shape.onMouseDrag;
}
