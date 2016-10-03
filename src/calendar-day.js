import {bindable} from "aurelia-framework";

export class CalendarDay {
    /* start-non-standard */
    @bindable selectedDay = null;
    @bindable selectedHalfHours = [];
    /* end-non-standard */
    constructor() {

    }
    attached(){
       
    }
}