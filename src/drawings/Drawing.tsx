import paper, { Group, Path, Point } from "paper";

export default class Drawing {
  canvas: HTMLCanvasElement;
  collection: paper.Group;
  gridGroup: paper.Group;
  path: paper.Path;
  startFromAngle: number;
  lineList: paper.Item[];
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.collection = new Group();
    this.gridGroup = new Group();
    this.path = new Path([new Point(0, 0)]);
    this.lineList = [];
    this.startFromAngle = 0;

    this.draw = this.draw.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawGrid = this.drawGrid.bind(this);
    this.onMouseDrag = this.onMouseDrag.bind(this);
    this.drawMeasurements = this.drawMeasurements.bind(this);
  }

  draw() {
    const circle = new Path.Circle({
      center: new Point(0, 0),
      radius: 50,
      fillColor: "blue",
    });

    this.collection.addChildren([circle]);
    this.collection.position = paper.view.center;
  }

  drawLine() {
    const line = new Path.Line({
      from: new Point(0, 0),
      to: new Point(150, 0),
      strokeColor: "orange",
      strokeWidth: 5,
    });

    this.collection.addChildren([line]);
    this.collection.position = paper.view.center;
  }

  drawMeasurements() {
    type Measurement = {
      name: string;
      length: number;
      angle: number;
    }
    const measurements = [
      {
        name: 'a',
        length: 200,
        angle: -90,
      },
      {
        name: 'b',
        length: 100,
        angle: 0,
      },
    ];

    measurements.map((measurement: Measurement) => {
      const point = new Point({
        length: measurement.length,
        angle: this.startFromAngle,
      });

      const addedMeasurement = this.path.lastSegment.point.add(point);
      this.path.add(addedMeasurement);

      this.startFromAngle += measurement.angle;
      // return this.startFromAngle;
    });

    for (let i = 0; i < this.path.segments.length; i++) {
      const segment = this.path.segments[i];

      if(!segment.previous) {
        continue;
      }

      const from = segment.previous.point;
      const to = from.add(segment.point.subtract(from));
      
      const line = new Path.Line({
          from,
          to,
          strokeColor: "tomato",
          strokeWidth: 4,
      });

      this.lineList.push(line);
    }

    this.collection.addChildren([...this.lineList]);
    this.collection.position = paper.view.center;
  }

  drawGrid(bound: paper.Rectangle) {
    const size = 40;
    const strokeWidth = 1;
    const strokeColor = new paper.Color("Fuchsia");
    const opacity = 0.5;

    for (let i = 0; i < bound.width / size; i++) {
        const horizontalLine = new Path.Line({
            from: bound.topLeft.add(new Point(0, size * i)),
            to:  bound.topRight.add(new Point(0, size * i)),
            strokeWidth,
            strokeColor,
            opacity,
        });
        const verticalLine = new Path.Line({
            from:  bound.topLeft.add(new Point(size * i, bound.top)),
            to:  bound.bottomLeft.add(new Point(size * i, bound.bottom)),
            strokeWidth,
            strokeColor,
            opacity,
        });
        this.gridGroup.addChild(horizontalLine);
        this.gridGroup.addChild(verticalLine);
    }
  }

  onMouseDrag(event: paper.ToolEvent) {
    const offset = new Point(new Point(this.collection.position.x + event.delta.x, this.collection.position.y + event.delta.y))
    this.collection.position = offset;
  }
}
