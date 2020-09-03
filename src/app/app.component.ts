import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'progressbar';
  _10Second = 10 * 1000;
  barWidth = {
    width:'1px'
  }

  ngOnInit(): void {
    const runner = setInterval(()=>{
      const nextWidth = parseInt(this.barWidth.width) + 10;
      this.barWidth.width = nextWidth + '%';
      if(nextWidth >= 100){
        this.barWidth.width = '100%';
        clearInterval(runner);
      }
    },this._10Second)
  }


}
