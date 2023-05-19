# Canvas Drawing Guide

_Document the methods used for the steel reinforcement tool_

Documentation for PaperJS, the vector graphics scripting framework, used to draw shapes based on input field values.

[Reference to PaperJS documentation](http://paperjs.org/reference/global/).

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

![arc](https://github.com/calinursu/steel-reinforcement-tool/screenshots/blob/main/Screenshot%202023-05-08%20at%2010.57.13.png)

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

![group](https://github.com/calinursu/steel-reinforcement-tool/screenshots/blob/main/Screenshot%202023-05-07%20at%2014.11.22.png)

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
TODO
```
