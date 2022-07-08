import { InvalidParamsException } from '~/lib/core';
import { Connector, QueryParam, QueryParams } from './dynamic';
import QueryResponse from './QueryResponse';
import AbstractQuery from "./AbstractQuery";
import TrailMessageType from "./TrailMessageType";


class DynamicQueryRequest<T extends object | object[]> extends AbstractQuery<QueryResponse<T>> {
  //
  queryParams: QueryParams | null;

  constructor(queryParam?: QueryParam) {
    //
    super(TrailMessageType.DynamicQueryRequest, DynamicQueryRequest);

    this.queryParams = queryParam ? QueryParams.fromParam(queryParam) : null;
  }

  static oneParam<T extends object | object[]>(queryParam: QueryParam): DynamicQueryRequest<T> {
    //
    queryParam.connector = Connector.End;

    return new DynamicQueryRequest<T>(queryParam);
  }

  static multiParams<T extends object | object[]>(...queryParams: QueryParam[]): DynamicQueryRequest<T> {
    //
    if (queryParams.length === 0) {
      throw new InvalidParamsException('DynamicQueryRequest.multiParams', 'queryParams, Length of queryParams must be more 1');
    }

    const newQueryParams = queryParams.map((queryParam, index: number) => {
      const last = index === queryParams.length - 1;

      if (last && queryParam.connector !== Connector.End) {
        queryParam.connector = Connector.End;
      } else if (!last && queryParam.connector === Connector.End) {
        throw new InvalidParamsException('DynamicQueryRequest.multiParams', 'ConnectorType must not be End in the middle of queryParams');
      }

      return queryParam;
    });

    const query = new DynamicQueryRequest<T>();

    query.queryParams = QueryParams.fromParams(newQueryParams);

    return query;
  }
}

export default DynamicQueryRequest;
