---
sidebar_label: blur
title: JavaScript Form - blur Select Event 
description: You can explore the blur event of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Select control has lost focus

@signature: blur: (value: string | number) => void;

@params:
- `value: string | number` - the current value of the control

@example:
form.getItem("select").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2