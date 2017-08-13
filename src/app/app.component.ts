import { Component, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  from = { hour: null, minute: 0, second: null };
  to = { hour: null, minute: 0, second: null };
  timeDuration: string = '00 : 00';

  onTimeChange() {
    const twentyFourHours = 24;

    if (this.to.hour > this.from.hour)
      this.timeDuration = Math.abs(this.from.hour - this.to.hour).toString()
        + ' : ' + this.formatMinutes(Math.abs(this.from.minute - this.to.minute));
    else
      this.timeDuration = Math.abs((this.from.hour - this.to.hour) -
        twentyFourHours).toString() + ' : ' + this.formatMinutes(Math.abs(this.from.minute - this.to.minute));
  }

  private formatMinutes(minutes) {
    if (minutes == 0) return '00';
    if (minutes < 10) return '0' + minutes;

    return minutes;
  }

}
