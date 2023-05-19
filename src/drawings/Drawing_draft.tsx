import paper, { Path, Point, Tool } from "paper";

interface Object {
  size: number;
  strokeWidth: number;
  strokeColor: paper.Color;
  opacity: number;
}

// interface Grid extends Object {
//   bound: paper.Rectangle;
// }

// const s = {
//   size: 30,
//   strokeWidth: 1,
//   strokeColor: "#324c59",
//   opacity: 0.1,
// };

export default function Drawing(canvas: HTMLCanvasElement) {
  window.addEventListener("load", init);
  (canvas as any).addEventListener("mousewheel", onMouseWheel);

  function init() {
    /* 
    Use a Tool to define mouse handler functions (onMouseMove, onMouseDown, onMouseDrag, onMouseUp) 
    or a keyboard handler function (onKeyDown, onKeyUp). 
    */
    const tool = new Tool();

    const path = new Path.Circle({
      center: paper.view.center,
      radius: 50,
      fillColor: "blue",
    });

    let circleOnDown: paper.Path.Circle;
    function testMouseClick(event: any) {
      circleOnDown = new Path.Circle(event.point, 5);
      circleOnDown.fillColor = "red" as unknown as paper.Color;
    }

    function onMouseDown(event: any) {
      testMouseClick(event);
    }

    tool.onMouseDown = function (event: any) {
      onMouseDown(event);
    };
  }

  function onMouseWheel(event: WheelEvent) {
    let newZoom = paper.view.zoom;
    let oldZoom = paper.view.zoom;

    if (event.deltaY < 0) {
      newZoom = paper.view.zoom * 1.01;
    } else {
      newZoom = paper.view.zoom * 0.99;
    }
    const beta = oldZoom / newZoom;
    const mousePosition = new Point(event.offsetX, event.offsetY);
    // viewToProject: gives the coordinates in the Project space from the Screen Coordinates
    const viewPosition = paper.view.viewToProject(mousePosition);
    const ctr = paper.view.center;
    const pc = viewPosition.subtract(ctr);
    const offset = viewPosition.subtract(pc.multiply(beta)).subtract(ctr);

    paper.view.zoom = newZoom;
    paper.view.center = paper.view.center.add(offset);
  }

  return null;
}
