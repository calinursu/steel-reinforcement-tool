# Canvas Drawing Guide

_Document the methods used for the steel reinforcement tool_

Documentation for PaperJS, the vector graphics scripting framework, used to draw shapes based on input field values.

[Reference to PaperJS documentation](http://paperjs.org/reference/global/).

## Table of Contents

1. [Point](#point)
1. [Line](#line)

## Point

`Point(x, y)`
The Point object represents a point in the two dimensional space

- Create a point at x: 10, y: 5

_Example:_

```jsx
const point = new Point(10, 5);

Constructors

Point(x: number, y: number)
```

## Line

`Path.Line(object)`
Creates a linear path item.

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
Creates a circular arc path item.

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

## Text

`PointText(object)`
A typography item which starts from a point and extends by the amount of characters it has.

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

## Group

`Group(object)`
A Group is a collection of items. When you transform a Group, its children are treated as a single unit without changing their relative positions.

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

- ![cn](https://github.com/calinursu/steel-reinforcement-tool/blob/main/Screenshot%202023-05-07%20at%2014.11.22.png)
