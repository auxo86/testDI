import { Injectable } from '@angular/core';
import { CriteriaBoxDisease, CriteriaBoxProcudure } from './CriteriaModel';

@Injectable()
export class CriteriasCollection {
  DiseaseCriterias: CriteriaBoxDisease[];
  ProcedureCriterias: CriteriaBoxProcudure[];

  constructor() {
    // set icd9CM & icd10cm
    this.DiseaseCriterias = [];
    // set icd9pcs & icd10pcs
    this.ProcedureCriterias = [];
  }
}
