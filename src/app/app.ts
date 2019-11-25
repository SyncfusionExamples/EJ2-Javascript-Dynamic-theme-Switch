import { DropDownList, DropDownListClassList } from '@syncfusion/ej2-dropdowns';
import { Ajax } from '@syncfusion/ej2-base';
import { Grid, Sort, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource';

// defined the array of data
let themes: string[] = ['material', 'fabric', 'bootstrap'];
Grid.Inject(Sort, Page);
// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: themes,
    select: function(e) {
        debugger
        console.log(e);
        if (e && e.itemData.value) {
            let ajax: Ajax = new Ajax('assets/styles/' + e.itemData.value + '.css', 'GET', true);
            ajax.send().then((result: any) => {
              let style: HTMLCollectionOf<HTMLStyleElement> = document.getElementsByTagName('style') as HTMLCollectionOf<HTMLStyleElement>;
              style[0].innerHTML = `/*${e.itemData.value}*/` + result;
            });
          }
    },
    // set placeholder to DropDownList input element
    placeholder: "Select a theme"
});

let grid: Grid = new Grid({
  dataSource: data,
  columns: [
              { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
              { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
              { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
              { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
  ],
  allowSorting: true,
  allowPaging: true,
  pageSettings: { pageSize: 7 }
});
  
// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');
// render initialized Grid
grid.appendTo('#Grid');