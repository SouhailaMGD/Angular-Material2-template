import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

states = [
    {value: 'State-0', viewValue: 'State1'},
    {value: 'State-1', viewValue: 'State2'},
    {value: 'State-2', viewValue: 'State3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
