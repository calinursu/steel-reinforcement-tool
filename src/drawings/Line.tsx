import Drawing from "./Drawing";

export default function Line(canvas: HTMLCanvasElement) {
  const shape = new Drawing(canvas);
  shape.drawLine();
}
