import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  models = [{"name" : -1}]
  title = 'menudeneme';
  aa = 0;
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.models.push({name:  i})
    }
  }

  changeFn(name: number) {
    this.aa = name;
  }

  qewqw($event: boolean) {
    alert($event)
  }
}
