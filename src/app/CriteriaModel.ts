export abstract class BaseCriteriaBox {
  abstract sCodeKind: string;
  iSn: number;
  Operand: string;

  constructor(obj?: any) {
    this.iSn = obj.iSn;
    this.Operand = obj.iSn === 0 ? '^' : obj.Operand;
  }
}

export class CriteriaBoxDisease extends BaseCriteriaBox {
  CriteriaIcd9cm: string;
  CriteriaIcd10cm: string;
  sCodeKind: string;

  constructor(obj?: any) {
    super(obj);
    this.sCodeKind = obj.sCodeKind;
    this.CriteriaIcd9cm = obj && obj.CriteriaIcd9cm || null;
    this.CriteriaIcd10cm = obj && obj.CriteriaIcd10cm || null;
  }
}

export class CriteriaBoxProcudure extends BaseCriteriaBox {
  CriteriaIcd9Pcs: string;
  CriteriaIcd10Pcs: string;
  sCodeKind: string;

  constructor(obj?: any) {
    super(obj);
    this.sCodeKind = obj.sCodeKind;
    this.CriteriaIcd9Pcs = obj && obj.CriteriaIcd9Pcs || null;
    this.CriteriaIcd10Pcs = obj && obj.CriteriaIcd10Pcs || null;
  }
}
