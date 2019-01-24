import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalContext} from './GlobalContext';

const DT_ICD10CM_START: Date = new Date('2016/01/01');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDI';
  intContext: number;

  DateFrameFormGroup: FormGroup;
  dtStart: AbstractControl;
  dtEnd: AbstractControl;

  constructor(FrmBuilder: FormBuilder, private AppGlobalContext: GlobalContext) {
    this.DateFrameFormGroup = FrmBuilder.group({
      'dtStart': ['2015-12-31', Validators.required],
      'dtEnd': ['2016-01-01', Validators.required]
    });

    this.dtStart = this.DateFrameFormGroup.controls['dtStart'];
    this.dtEnd = this.DateFrameFormGroup.controls['dtEnd'];

    this.AppGlobalContext.IntContextFlag.asObservable().subscribe(intContext => {
      this.intContext = intContext;
    });

    this.CheckTimeContext();
  }

  // 檢查時間Context
  CheckTimeContext(): void {
    const dtDateStart: Date = new Date(this.dtStart.value);
    const dtDateEnd: Date = new Date(this.dtEnd.value);
    if (dtDateEnd < DT_ICD10CM_START && dtDateStart <= dtDateEnd) {
      // Only ICD9CM情境
      this.AppGlobalContext.IntContextFlag.next(1);
    } else if (dtDateStart >= DT_ICD10CM_START && dtDateEnd >= dtDateStart) {
      // Only ICD10CM情境
      this.AppGlobalContext.IntContextFlag.next(2);
    } else if (DT_ICD10CM_START > dtDateStart && DT_ICD10CM_START <= dtDateEnd) {
      // 兩者並存情境
      this.AppGlobalContext.IntContextFlag.next(3);
    } else {
      // 隱藏全部的條件區
      this.AppGlobalContext.IntContextFlag.next(4);
    }
  }
}
