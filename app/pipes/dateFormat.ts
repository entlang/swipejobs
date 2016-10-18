import {Pipe, PipeTransform} from "@angular/core";
import moment = require('moment')
import 'moment-timezone'; 

@Pipe({
    name: 'dateFormat'
})
export class DateFormat implements PipeTransform {
   transform(date: any, args?: any): any {
     let d = new Date(date);
     if (args && args == "short") {
     	return moment(d).format('ddd, MMM D');
     }
     return moment(d).tz(moment.tz.guess()).format('ddd, MMM DD h:mm A z');
   }
}