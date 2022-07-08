import QueryParam from './QueryParam';


class QueryParams {
  //
  queryParams: QueryParam[] = [];

  constructor(queryParams: QueryParam[]) {
    //
    this.queryParams = queryParams;
  }

  static fromParam(queryParam: QueryParam) {
    //
    const queryParams: QueryParam[] = [];

    queryParams.push(queryParam);

    return new QueryParams(queryParams);
  }

  static fromParams(queryParams: QueryParam[]) {
    //
    return new QueryParams(queryParams);
  }
}

export default QueryParams;
