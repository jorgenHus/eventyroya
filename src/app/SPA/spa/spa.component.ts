import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit{
  bgColor = 'black';
  output = 'Click on an image to change the output';

  output$ = new BehaviorSubject<string>('menu');


  ngOnInit(): void {
    this.output$.next('menu');
  }
  changeOutput(clicked: string) {
    this.output$.next(clicked);
  }
}
