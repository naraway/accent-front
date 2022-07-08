class OffsetElementList<T> {
  //
  empty: boolean;
  totalCount: number;
  previous: boolean;
  next: boolean;
  results: T[] = [];


  constructor(results: T[], totalCount: number, previous: boolean, next: boolean) {
    //
    this.results = results;
    this.totalCount = totalCount;
    this.empty = false;
    this.previous = previous;
    this.next = next;
  }
}

export default OffsetElementList;
