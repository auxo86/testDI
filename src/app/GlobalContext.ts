import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class GlobalContext {

  IntContextFlag: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}
}
