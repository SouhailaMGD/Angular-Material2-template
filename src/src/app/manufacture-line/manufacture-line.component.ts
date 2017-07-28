import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacture-line',
  templateUrl: './manufacture-line.component.html',
  styleUrls: ['./manufacture-line.component.css']
})
export class ManufactureLineComponent implements OnInit {

    states = [
    {value: 'state-0', viewValue: 'State1'},
    {value: 'state-1', viewValue: 'State2'},
    {value: 'state-2', viewValue: 'State3'}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
