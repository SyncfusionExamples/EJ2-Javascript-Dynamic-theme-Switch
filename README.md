# Themeswitcher

This project is a skeleton application used to create [Essential JS 2](https://www.syncfusion.com/products/essential-js2) web application.

## Create an typescript application

To create a typescript application, refer to [`getting started`](https://ej2.syncfusion.com/documentation/drop-down-list/getting-started/) document.

## Add Different Themes for Dynamic Theme Change

In the `src` folder of the application, create `assets` folder. 

Under `assets` folder, create a folder named `styles`. Then, load CSS file of the different themes in that `styles` folder. 

## Add Style Tag 

```typescript
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DropDownList component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
     
    //  add style tag for dynamic theme change
    <style id="theme"></style>

</head>

<body>
    <div id='container'>
        <!--element which is going to render the DropDownList-->
        <input type="text" tabindex="1" id='ddlelement'/>
        <br>
        <br>
        <!--element which is going to render the Grid-->
        <div id='Grid'></div>   
    </div>

</body>

</html>

```

## Dynamic theme change 

To achieve dynamic theme change, read the stylesheet/CSS file of the selected theme and apply these styles to DOM element using AJAX.

Add the below code in `app.ts` file.

```typescript
  let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: themes,
    select: function(e) {
        debugger
        console.log(e);
        if (e && e.itemData.value) {
            let ajax: Ajax = new Ajax('assets/styles/' + e.itemData.value + '.css', 'GET', true);
            ajax.send().then((result: any) => {
              let styleTag = document.getElementById('theme');
              styleTag.innerHTML=`/*${e.itemData.value}*/` + result;
            });
          }
    },
    // set placeholder to DropDownList input element
    placeholder: "Select a theme"
});

```

The `select` function in the dropdownlist component gets triggered, whenever the theme value is changed.

Whenever the `select` function is triggered, the respective CSS file of the selected theme is applied to the DOM elements.

## Run the Application

Use the following command to run the application in browser.

```
npm run start
```
