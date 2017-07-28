import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';



import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: any;

  states = [
    {value: 'state-0', viewValue: 'State1'},
    {value: 'state-1', viewValue: 'State2'},
    {value: 'state-2', viewValue: 'State3'}
    
  ];

  jobs = [
    {value: 'job-0', viewValue: 'Job1'},
    {value: 'job-1', viewValue: 'Job2'},
    {value: 'job-2', viewValue: 'Job3'}
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));

   }

   filterStates(val: string) {
    return val ? this.jobs.filter(s => s.viewValue.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.jobs;
  }

  ngOnInit() {
  }

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

}
