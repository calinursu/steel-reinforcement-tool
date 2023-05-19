import Drawing from "./Drawing";

export default function Measurements(canvas: HTMLCanvasElement) {
  const shape = new Drawing(canvas);
  shape.drawMeasurements();
}
