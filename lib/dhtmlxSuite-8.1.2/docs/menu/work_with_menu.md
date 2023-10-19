---
sidebar_label: Work with Menu
title: JavaScript Menu - Work with Menu 
description: You can explore how to work with Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Menu

## Hiding/showing menu options

You can hide and show menu items (one or several at once) with the help of the [hide()](menu/api/menu_hide_method.md) / [show()](menu/api/menu_show_method.md) methods:

```javascript
menu.show(id);
```

**Related sample**: [Menu. Show / hide menu item](https://snippet.dhtmlx.com/a9vbhxgd)

Both methods can take one parameter - the ID of a menu item or an array with IDs of menu items.

Starting from v7.0, it is possible to hide/show all Menu items on the page at once by using the methods without parameters:

```javascript
menu.hide();
// shows all Menu items
menu.show();
```

## Disabling/enabling menu options

You can disable one menu option or several options at a time with the [disable()](menu/api/menu_disable_method.md) method:

```javascript
menu.disable(["2","3"]);
```

To enable one menu option or several options at a time, use the [enable()](menu/api/menu_enable_method.md) method:

```javascript
menu.enable(["1","3"]);
```

**Related sample**: [Menu. Enable / disable menu item](https://snippet.dhtmlx.com/zuoam7r7)

Both methods can take one parameter: the ID of a menu item or an array of IDs.

Starting from v7.0, it is possible to disable/enable all Menu items on the page at once by using the methods without parameters:

```javascript
menu.disable();
// enables all Menu items
menu.enable();
```

## Checking if a menu option is disabled

To check if an item of Menu is disabled, call the [isDisabled()](menu/api/menu_isdisabled_method.md) method. The method takes one parameter:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of a menu item</td>
		</tr>
    </tbody>
</table>

```javascript
```

**Related sample**: [Menu. Enable / disable menu item](https://snippet.dhtmlx.com/zuoam7r7)

## Selecting/Unselecting an item

### Selecting a menu item

To select a particular Menu item, make use of the [select()](menu/api/menu_select_method.md) method of Menu. The method takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of an item</td>
		</tr>
        <tr>
			<td><b>unselect</b></td>
			<td>(<i>boolean</i>) optional, <i>true</i> - to unselect previously selected items, otherwise - <i>false</i>; <i>true</i> by default</td>
		</tr>
    </tbody>
</table>
<br/>

```javascript
```

**Related sample**: [Menu. Select / unselect](https://snippet.dhtmlx.com/9qqah8ex)

### Unselecting a menu item

To remove selection from a selected item, apply the [unselect()](menu/api/menu_unselect_method.md) method of Menu. The method may take the id of an item as a parameter:

```javascript
menu.unselect("align-left");
```

It is also possible to remove selection from all previously selected items of Menu via the [unselect()](menu/api/menu_unselect_method.md) method:

```javascript
menu.unselect();
```

**Related sample**: [Menu. Select / unselect](https://snippet.dhtmlx.com/9qqah8ex)

## Checking if a menu item is selected

To check if an item of Menu is selected, call the [isSelected()](menu/api/menu_isselected_method.md) method. The method takes one parameter:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of a menu item</td>
		</tr>
    </tbody>
</table>
<br/>

```javascript
```

**Related sample**: [Menu. Select / unselect](https://snippet.dhtmlx.com/9qqah8ex)

## Getting selected items

To get the selected items, call the [getSelected()](menu/api/menu_getselected_method.md) method. The method returns an array of string values with IDs of selected items:

```javascript
```

## Using Tree collection API

You can manipulate the controls of Menu with the help of the [Tree collection API](tree_collection.md). 

### Adding menu items

You can add menu items with the **add()** method of tree collection:

```javascript
    type:"separator"
});

menu.data.add({
    value:"Open", items:[
        { value:"File", hotkey:"Ctrl+F" },
        { value:"Folder" }
    ]
});
```

**Related sample**: [Menu. Add / remove Item](https://snippet.dhtmlx.com/nood4bfx)

### Rearranging menu items

You can move menu items to different positions with the **move()** method. For example, this is how you can move an item with ID "2" to the left edge of the menu:

```javascript
```

{{note
The ID should always be a string, even if in menu item configuration you set it as a number.
}}

To get the current position, use the **getIndex()** method of TreeCollection:

```javascript
```

{{note
Indexes are counted from 0.
}}

### Iterating menu items

You can work with all (or some) menu items with the help of the **forEach()** method of TreeCollection:

```javascript
menu.data.forEach(function(item){
    item.icon = "";
});
menu.paint();
```

### Setting item text 

You can set text labels for any menu item. Access the needed item with the **getItem()** method of the TreeCollection:

```javascript
menu.paint();
```

### Setting item hotkey

You can add a shortcut to a menu option by accessing it with the help of the **getItem()** method. After you add a hotkey, a label with the keys will be added to the option.

```javascript
menu.paint();
```

### Removing menu items  

You can remove any item from a menu with the **remove()** method. The item will be removed with all its sub-items.

```javascript
```

**Related sample**: [Menu. Add / remove Item](https://snippet.dhtmlx.com/nood4bfx)

To remove all items from Menu, call the **removeAll()** method. Afterwards, you can load other options.

```javascript
menu.data.parse(new_options);
```

{{note Check the full list of [Tree collection API](tree_collection.md).}}
