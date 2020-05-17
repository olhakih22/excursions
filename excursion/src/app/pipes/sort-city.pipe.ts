import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCity'
})
export class SortCityPipe implements PipeTransform {

  transform(value, by: any, type: any): unknown {
    const needed = []
    if(by[0] === -1 && type[0] === 'Усі'){
      return value
    } else if (by[0] !== -1 && type[0] === 'Усі') {

      needed.push(value[by[0]])
      return needed
    } else if (by[0] !== -1 && type[0] !== 'Усі') {
      value.filter((val, index) =>{
        val.excursion.filter(ex => {
          ex.allType.filter(typek =>{
            console.log(typek.types,type[0] );
            if(typek.types === type[0] && index === by[0]) {
              needed.push(val)
            }

          })
        })
      })
      let one = needed.splice(0, 1)
      return one

    } else if(by[0] === -1 && type[0] !== 'Усі') {
      return value
    }

  }

}
