import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  states = [
    {value: 'state-0', viewValue: 'State1'},
    {value: 'state-1', viewValue: 'State2'},
    {value: 'state-2', viewValue: 'State3'}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
