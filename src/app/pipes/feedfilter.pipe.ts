import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {

  transform(target:any, type: string): any{
     if(type=="All")
         return target
     else
         return target.filter((x:any)=>x.type==type)
  }

}
