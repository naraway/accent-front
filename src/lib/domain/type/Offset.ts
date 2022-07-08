import { makeAutoObservable } from 'mobx';
import SortDirection from './SortDirection';


class Offset {
  //
  offset: number = 0;
  limit: number = 0;
  totalCount: number = 0;
  previous: boolean = false;
  next: boolean = false;
  totalCountRequested: boolean = true;
  sortDirection: SortDirection = SortDirection.Ascending;
  sortingField: string = '';


  constructor(offset: number = 0, limit: number = 0, sortDirection?: SortDirection) {
    //
    makeAutoObservable(this);
    this.offset = offset;
    this.limit = limit;
    this.totalCountRequested = true;

    if (sortDirection) {
      this.sortDirection = sortDirection;
    }
  }

  static newAscending(offset: number, limit: number, sortingField?: string) {
    //
    const offsetModel = new Offset(offset, limit);

    if (sortingField) {
      offsetModel.sortingField = sortingField;
    }

    return offsetModel;
  }

  static newDescending(offset: number, limit: number, sortingField?: string) {
    //
    const offsetModel = new Offset(offset, limit, SortDirection.Descending);

    if (sortingField) {
      offsetModel.sortingField = sortingField;
    }

    return offsetModel;
  }
}

export default Offset;
