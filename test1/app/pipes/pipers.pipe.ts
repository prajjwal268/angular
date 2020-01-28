import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipers'
})
export class PipersPipe implements PipeTransform {

  transform(db:any,search:any): any {
    if(search==undefined||search=='')
    {
      return;
    }
    else{
      return db.filter(function(db:any){
        return db.author.toLowerCase().includes(search.toString().toLowerCase())||db.title.toLowerCase().includes(search.toString().toLowerCase())||db.id.toString().includes(search)||db.year.toString().includes(search);
      })

    }
    
  }

}
