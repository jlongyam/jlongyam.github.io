---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Avatar Event 
description: You can explore the afterValidate event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: object, isValidate: boolean) => void;'}

@params:
- `value: object` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("avatar").events.on("afterValidate", value => {
    console.log("afterValidate", value);
});

@descr: