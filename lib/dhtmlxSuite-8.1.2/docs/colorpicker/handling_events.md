---
sidebar_label: Event handling
title: JavaScript Colorpicker - Event Handling 
description: You can explore the event handling of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can attach event listeners with the **colorpicker.events.on()** method:

```javascript
   console.log("Selected mode: " + view); 
});
```

{{note The names of events are case-insensitive.}}

**Related sample**: [Colorpicker. Events](https://snippet.dhtmlx.com/fllgaabo)

## Detaching event listeners

To detach events, use **colorpicker.events.detach()**:

```javascript
   console.log("Selected mode: " + view); 
});

colorpicker.events.detach("modeChange");
```

## Calling events

To call events, use **colorpicker.events.fire()**:

```javascript
// where args is an array of arguments
```

## The list of events

The full list of events is available in the related [API section](colorpicker/api/api_overview.md#events).
