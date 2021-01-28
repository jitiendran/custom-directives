import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives-test';
  numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
  showNum:boolean = false
  value:number = 10;
  show(){
    this.showNum = !this.showNum
  }
}
