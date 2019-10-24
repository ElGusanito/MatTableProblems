import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import {forkJoin, Observable, Subject } from 'rxjs'; 
import { takeUntil, take, tap } from 'rxjs/operators';

import { MatTableDataSource, MatTable } from '@angular/material';




export class TimesheetEntry {
  mondayHours:string = '0'
  tuesdayHours:string = '0'
  wednesdayHours:string = '0'
  thursdayHours:string = '0'
  fridayHours:string = '0'
  saturdayHours:string = '0'
  sundayHours:string = '0'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tabledemo';

  timesheetEntryDataSource: MatTableDataSource<TimesheetEntry>;
  timesheetColumns = ['actions', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'  ];
  private _onDestroy = new Subject<void>();

  tmpTimesheet:TimesheetEntry[] = [];


  constructor( ) { }


  ngOnInit() {
    this.timesheetEntryDataSource = new MatTableDataSource<TimesheetEntry>([]);
    /*this.state.timesheetEntries$.pipe(
      takeUntil(this._onDestroy))
      .subscribe((data) => {
        this.timesheetEntryDataSource.data = [...data];
      });*/
  }

  ngOnDestroy(){
    this._onDestroy.next();
    this._onDestroy.complete();   
  }


  add(){
    this.tmpTimesheet.push(new TimesheetEntry());
    this.timesheetEntryDataSource = new MatTableDataSource<TimesheetEntry>(this.tmpTimesheet.slice());
    //this.state.updateTimesheetEntries(this.attendance.timesheetEntries);
    
  }

  remove(exception: TimesheetEntry){
    this.tmpTimesheet.splice(this.tmpTimesheet.findIndex(e => e === exception),1);
    this.timesheetEntryDataSource = new MatTableDataSource<TimesheetEntry>(this.tmpTimesheet.slice());
    //this.state.updateTimesheetEntries(this.attendance.timesheetEntries);
  }

  typeComparatorFn(select, option) {
    return select && option ? select.code === option.code : select === option;
  }



}
