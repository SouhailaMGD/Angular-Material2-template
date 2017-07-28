import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

   states = [
    {value: 'state-0', viewValue: 'State1'},
    {value: 'state-1', viewValue: 'State2'},
    {value: 'state-2', viewValue: 'State3'}
    
  ];

    authorizations = [
    {value: 'authorization-0', viewValue: 'Authorization1'},
    {value: 'authorization-1', viewValue: 'Authorization2'},
    {value: 'authorization-2', viewValue: 'Authorization3'}
    
  ];


  constructor() { }

  ngOnInit() {
  }

}
