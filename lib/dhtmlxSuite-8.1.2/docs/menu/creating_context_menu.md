---
sidebar_label: Context menu
title: JavaScript Menu - Context Menu 
description: You can explore the Context Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Context menu

dhtmlxContextMenu is a component that provides an easy way to add a contextual menu to projects. It will be of great help for frequently used actions in web sites, help systems, etc.

![DHX Context Menu](../assets/menu/context_menu.png)

**Related sample**: [Menu. Context menu initialization with config.data](https://snippet.dhtmlx.com/mgya9p1l)

## Initialization

You can initialize dhtmlxContextMenu with the constructor:

```javascript
```

It takes two parameters:

- *container* - optional, set it to *null*, since ContentMenu is created inside a popup
- *config* - optional, a configuration object. You can set the CSS classes to style a context menu here 

## Loading menu options

Like with DHTMLX Menu, options can be either parsed from a JSON array:

```javascript
    { value: "File", 
        items: [
            { value: "New File", icon: "dxi dxi-file-outline"},                      
            { value: "Remove File", icon: "dxi dxi-delete"}        
        ]
    },
    {
        type: "separator"
    },
    { value: "Edit",
        items: [
            { value: "Undo", icon: "dxi dxi-undo"},
            { value: "Redo", icon: "dxi dxi-redo"}
         ]
    },
    {
        type: "spacer"
    }
];

cmenu.data.parse(data);
```

or loaded from a JSON file:

```javascript
```

## Showing dhtmlxContextMenu

dhtmlxContextMenu is attached to a context zone, and can be shown with the **showAt()** method. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>element</b></td>
			<td>(<i>HTMLElement|Event|string</i>) the element that will be a context zone: an HTML object/its id/a mouse event</td>
		</tr>
        <tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) optional, the position of showing a context menu relative to the context zone: "bottom"|"right". By default a context menu is shown at the point where the mouse pointer is.</td>
		</tr>
    </tbody>
</table>

### Attaching to HTML object

This is how you can attach dhtmlxContextMenu to an HTML element:

```html
<div id="menu"></div>
```

```javascript

document.querySelector('#menu').oncontextmenu = function(e) {    
    e.preventDefault();
    cmenu.showAt('menu', 'right');
}
```

- **e** is the mouse event.

### Attaching to a mouse event

This is how you can attach dhtmlxContextMenu to a mouse event:

```javascript

document.querySelector('#menu').oncontextmenu = function(e) {   
    e.preventDefault();
    cmenu.showAt(e);
}
```
