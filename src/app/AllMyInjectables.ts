import { GlobalContext } from './GlobalContext';
import { CriteriasCollection } from './CriteriasCollection';

export const AllMyInjectiables: Array<any> = [
  { provide: 'GlobalContext', useClass: GlobalContext },
  // { provide: 'CriteriasCollection', useClass: CriteriasCollection },
];
