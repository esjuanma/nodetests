# CanvasAPI v1.0

## Shape()
Main method to create new shapes to the canvas.
The currently available shape types are:
- Button [1]
- Circle [2]
- Menu [3]
- Textbox [4]
- Window [5]
 
The parameters order is:
- Type
- ID
- Position X
- Position Y
- Width
- Height*
- Inner text
- Font Family
- Font Size

***\*null for Circle; takes width value instead***

For example to create a button of 200px width, 50px height at the origin of the canvas:
- new Shape('Button', 'myButton', 0, 0, 300, 50, 'A button', 'Arial', 13);

## Shape methods
Shapes come with several methods:
- **getArea()** returns the shape area
- **remove()** for removing the shape
- **addClickListener(callback)** takes a callback and it is executed when the object is clicked. The callback can also take an event parameter which is the one provided by the browser's click event.
- **addAttribute()** to add custom attributes to shapes. For example:
  - .addAttribute('items', ['item1', 'item2', 'item3']) on a menu shape [4]
  - .addAttribute('textLines', ['Lorem ipsum', 'dolor sit', 'amet']) on a window shape [5]

### Examples

[1] Button
[![N|Solid](http://localhost/button.png)](Shape)

[2] Circle
[![N|Solid](http://localhost/circle.png)](Shape)

[3] Textbox
[![N|Solid](http://localhost/textbox.png)](Shape)

[4] Menu
[![N|Solid](http://localhost/menu.png)](Shape)

[5] Window
[![N|Solid](http://localhost/window.png)](Shape)