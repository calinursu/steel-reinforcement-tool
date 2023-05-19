import Drawing from "./Drawing";

export default function Circle(canvas: HTMLCanvasElement) {
  const shape = new Drawing(canvas);
  shape.draw();
}
