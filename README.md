# Canvas Drawing Guide

_Document the methods used for the steel reinforcement tool_

Documentation for PaperJS, the vector graphics scripting framework, used to draw shapes based on input field values.

[Reference to PaperJS documentation](http://paperjs.org/reference/global/). We need to dive deep in [Vector Geometry](http://paperjs.org/tutorials/geometry/vector-geometry/) and [Mathematical Operations](http://paperjs.org/tutorials/geometry/mathematical-operations/) in order to understand the basic principles for this tool

[This example](http://sketch.paperjs.org/#V/0.12.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) is provided as a help to familiarise yourself with the concept of vectors.

Play around with it to get a feeling for how vectors work, and try to use it to repeat the principles learned in this tutorial.

## Table of Contents

1. [Point](#point)
1. [Line](#line)
1. [Arc](#arc)
1. [Text](#text)
1. [Grouping](#hierarchy)

## Point

`Point(x, y)`

- The Point object represents a point in the two dimensional space

- Create a point at `x: 10, y: 5`

_Example:_

```jsx
const point = new Point(10, 5);
```

## Line

`Path.Line(object)`

- Creates a linear path item.

_Parameters:_
object — an object containing properties describing the path’s attributes

_Returns:_
[`Path`](http://paperjs.org/reference/path/) — the newly created path

_Example:_

```jsx
const path = new Path.Line({
  from: [20, 20],
  to: [80, 80],
  strokeColor: "black",
});
```

## Arc

`Path.Arc(object)`

- Creates a circular arc path item.

_Parameters:_
object — an object containing properties describing the path’s attributes

_Returns:_
[`Path`](http://paperjs.org/reference/path/) — the newly created path

_Example:_

```jsx
const path = new Path.Arc({
  from: [20, 20],
  through: [60, 20],
  to: [80, 80],
  strokeColor: "black",
});
```

![arc](https://github.com/calinursu/steel-reinforcement-tool/blob/main/screenshots/Screenshot%202023-05-08%20at%2010.57.13.png)

## Text

`PointText(object)`

- A typography item which starts from a point and extends by the amount of characters it has.

_Parameters:_
object — an object containing properties describing the path’s attributes

_Returns:_
[`Path`](http://paperjs.org/reference/path/) — the newly created path

_Example:_

```jsx
const text = new PointText({
  point: [50, 50],
  content: "The contents of the point text",
  fillColor: "black",
  fontFamily: "Courier New",
  fontWeight: "bold",
  fontSize: 25,
});
```

## Hierarchy

The structure of a Paper.js project is based on the same stacking order principle that graphic design applications such as Adobe Illustrator and Adobe Photoshop use.

[`Reference`](http://paperjs.org/tutorials/project-items/project-hierarchy/)

`Group(object)`

- You can think of a Group as a folder. They group items together and any actions performed on them directly change the items that are are contained within them.

-For example, changing a style property like item.fillColor on a group will change that property on all of its children.

_Parameters:_
object — an object containing properties describing the path’s attributes

_Returns:_
[`Group`](http://paperjs.org/reference/group/)

_Example:_

```jsx
const path = new Path([100, 100], [100, 200]);
const path2 = new Path([50, 150], [150, 150]);

// Create a group from the two paths:
const group = new Group({
  children: [path, path2],
  // Set the stroke color of all items in the group:
  strokeColor: "black",
  // Move the group to the center of the view:
  position: view.center,
});
```

![group](https://github.com/calinursu/steel-reinforcement-tool/blob/main/screenshots/Screenshot%202023-05-07%20at%2014.11.22.png)

_Adding Children to Groups_

- When you create a group, it doesn't have any children yet. You can add children to groups in a few different ways.

`new Group([path, secondPath]);`

You can also add children to a group after it is created, using the item.`addChild(item)` function:

```jsx
// Create an empty group:
const group = new Group();

// Add the paths to the group:
group.addChild(path);
group.addChild(secondPath);
```

_Removing Items and Children_

- To remove an item from your Paper.js document, you call its `item.remove()` function. This doesn't destroy the item, it is only removed from the structure of the project and won't be drawn. You can add the item back to your project at any time.

- To remove all children contained within an item, you can call `item.removeChildren()`.

_Grid_

- Drawing the grid

```jsx
TODO;
```
