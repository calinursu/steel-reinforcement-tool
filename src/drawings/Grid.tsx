import paper from "paper";
import Drawing from "./Drawing";

export default function Grid(canvas: HTMLCanvasElement) {
  const shape = new Drawing(canvas);
  shape.drawGrid(paper.view.bounds);
}
