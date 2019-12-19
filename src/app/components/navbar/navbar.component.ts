import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private tick = true;
  private _t = ' AM'
  private time: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = this.getTime();
    }, 1000);
  }
  private getTime(): string {
    this.tick = !this.tick
    let time = new Date().toString().slice(15, 21);
    let hour = parseInt(time.slice(0,3));
    if(hour > 12){
      this._t = ' PM'
      hour -= 12;
    }
    else if(hour == 0) hour = 12;
    else{
      this._t = ' AM'
    }
    if(this.tick){
      let t = time.replace(/:/g, " ");
      time = t;
    }
    time = hour.toString() + time.slice(3, time.length);
    time += this._t;
    return time;
  }

}
