import paper from "paper";
import { useEffect, useRef } from "react";

type Props = {
  canvasProps?: {};
  className?: string;
  drawing: (canvas: HTMLCanvasElement) => void;
};

function Canvas({ className, canvasProps = {}, drawing }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      paper.setup(canvas.current);
      drawing(canvas.current);
    }
  }, [drawing]);

  return (
    <canvas
      width="500" 
      height="300"
      {...canvasProps}
      className={className}
      ref={canvas}
    />
  );
}

export default Canvas;
