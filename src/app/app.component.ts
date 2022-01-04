import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ng-clock',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AngularClock implements AfterViewInit {

  timerId: any;
  ngAfterViewInit() {
    this.generateDialLines();
    this.timerId = this.getTime();
  }
  getTime() {

    setInterval(()=>{
      this.clock();
    }, 100);
  }
  clock() {
    var weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),
             
        hDeg = h * 30 + m * (360/720),
        mDeg = m * 6 + s * (360/3600),
        sDeg = s * 6;
    
        var day = weekday[d.getDay()];
    var monthtext = month+"";
    if(month < 9) {
      monthtext = "0" + month;
    }
    
    this.h_transform = "rotate("+hDeg+"deg)";
    this.m_transform = "rotate("+mDeg+"deg)";
    this.s_transform = "rotate("+sDeg+"deg)";
    this.date_text = date+"/"+monthtext+"/"+year;
    this.day_text = day;
  }
  generateDialLines()
  {
    for (var i = 1; i < 60; i++) {
      var temp = "rotate(" + 6 * i + "deg)";
      this.diallines.push(temp);
    }
  }
  public h_transform:any;
  public m_transform:any;
  public s_transform:any;
  public date_text :any;
  public day_text : any;
  public diallines = new Array();
  
}
