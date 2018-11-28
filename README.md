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
[![N|Solid](https://esjuanma.github.io/nodetests/images/button.png)](Button)

[2] Circle
[![N|Solid](https://esjuanma.github.io/nodetests/images/circle.png)](Circle)

[3] Textbox
[![N|Solid](https://esjuanma.github.io/nodetests/images/textbox.png)](Textbox)

[4] Menu
[![N|Solid](https://esjuanma.github.io/nodetests/images/menu.png)](Menu)

[5] Window
[![N|Solid](https://esjuanma.github.io/nodetests/images/window.png)](Window)