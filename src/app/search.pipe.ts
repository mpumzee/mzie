import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], searchText: string, filterMetadata: any): any[] {

    if(!items) return [];
    if(!searchText) {
      filterMetadata.count = items.length;
      return items;
    }
    searchText = searchText.toLowerCase();
    console.log(JSON.stringify(items));
    
    let filteredItems = items.filter( it => {
      return (it.standNumber  || '').toLowerCase().includes(searchText);
    });
    filterMetadata.count = filteredItems.length;
    return filteredItems;

    }

}
