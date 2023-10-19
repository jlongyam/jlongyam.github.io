---
sidebar_label: Step 4. Add a ContextMenu
title: Step 4. Add a ContextMenu
---          
In this step we consider how to add and display a context menu on the page.

##Adding ContextMenu on the page

To add a context menu on the page we should take the following steps:

1\. Initialize dhtmlxContextMenu with the constructor in the same way as we [initialized the toolbar](tutorial/basic_application/step3.md):

```javascript
```

2\. Create a JSON structure with items for ContextMenu:

```javascript
	{
    	"id": "edit",
    	"icon": "mdi mdi-pencil",
    	"value": "Edit"
	},
	{
    	"id": "delete",
    	"icon": "mdi mdi-delete",
    	"value": "Delete"
	}
];
```

You can find more information about types of the menu controls and their attributes in the [List of Menu Controls](menu/configuring_menu_items.md) article.


3\. We use the <b>parse()</b> method to load the predefined data set to the context menu:

```javascript
```

<i>We pass a JSON structure as a parameter.</i>

##Displaying the ContextMenu

Let's consider how to display dhtmlxContextMenu on the page after right-clicking on a grid cell.

We need to follow the steps below to do that: 

- set a selection on the grid cell using the <b>setCell()</b> method of the Selection object. The <b>setCell()</b> method takes as a parameter the id of a grid row:

```javascript
```

- prevent the browser context menu from appearing on the page through the **event.preventDefault()** method:

```javascript
```

- show a dhxContextMenu on the page via the [](menu/api/menu_showat_method.md) method of dhxContextMenu:

```javascript
```

Now we should put together the above described steps and place them inside the handler function of the [](grid/api/grid_cellrightclick_event.md) event:

```javascript
	grid.selection.setCell(row.id);
	e.preventDefault();
	contextMenu.showAt(e);
});
```

After that a right-click on a grid cell will call a context menu we have specified.

<img src="tutorial/binding_components/context_menu.png"/>

<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step5.md"></a>
</div>








